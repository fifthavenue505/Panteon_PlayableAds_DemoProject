using System;
using UnityEngine;
using UnityEngine.Rendering;

namespace ToonyColorsPro.Runtime
{
	[ExecuteInEditMode]
	public class TCP2_PlanarReflection : MonoBehaviour
	{
		public int textureSize = 1024;

		public RenderTextureFormat renderTextureFormat = RenderTextureFormat.Default;

		public LayerMask reflectLayers = -1;

		public float clipPlaneOffset = 0.07f;

		[Space]
		public bool useCustomBackgroundColor;

		public Color backgroundColor = Color.black;

		[Space]
		public bool applyBlur;

		[Range(1f, 4f)]
		public int blurIterations = 1;

		[Range(0.01f, 10f)]
		public float blurDistance = 1f;

		private Camera reflectionCamera;

		private RenderTexture reflectionRenderTexture;

		private Shader blurShader;

		private Material blurMaterial;

		private CommandBuffer commandBufferBlur;

		private Shader reflectionDepthShader;

		private RenderTexture reflectionDepthRenderTexture;

		private bool isURP;

		private static bool s_InsideRendering;

		private static readonly int _SamplingDistance = Shader.PropertyToID("_SamplingDistance");

		private static readonly int _PlanarReflectionTempRT = Shader.PropertyToID("_PlanarReflectionTempRT");

		private static readonly int _ReflectionTex = Shader.PropertyToID("_ReflectionTex");

		private void OnValidate()
		{
			UpdateRenderTexture();
			UpdateCommandBuffer();
		}

		private void OnEnable()
		{
			isURP = GraphicsSettings.currentRenderPipeline != null && GraphicsSettings.currentRenderPipeline.GetType().Name.Contains("Universal");
			Camera.onPreCull = (Camera.CameraCallback)Delegate.Combine(Camera.onPreCull, new Camera.CameraCallback(BeginCameraRendering));
			UpdateRenderTexture();
			UpdateCommandBuffer();
		}

		private void OnDisable()
		{
			if (isURP)
			{
				RenderPipelineManager.beginCameraRendering -= BeginCameraRendering;
			}
			else
			{
				Camera.onPreCull = (Camera.CameraCallback)Delegate.Remove(Camera.onPreCull, new Camera.CameraCallback(BeginCameraRendering));
			}
			ClearCommandBuffer();
			ClearRenderTexture();
		}

		private void UpdateRenderTexture()
		{
			if (reflectionRenderTexture == null || reflectionRenderTexture.width != textureSize || reflectionRenderTexture.format != renderTextureFormat)
			{
				ClearRenderTexture();
				reflectionRenderTexture = new RenderTexture(textureSize, textureSize, 16, renderTextureFormat, RenderTextureReadWrite.sRGB)
				{
					name = $"Planar Reflection {UnityEngine.Random.Range(1000, 9999)}",
					hideFlags = HideFlags.HideAndDontSave
				};
				AssignRenderTextureToMaterials();
			}
		}

		private void AssignRenderTextureToMaterials()
		{
			Material[] materials = GetComponent<Renderer>().sharedMaterials;
			Material[] array = materials;
			foreach (Material mat in array)
			{
				if (mat.HasProperty(_ReflectionTex))
				{
					mat.SetTexture(_ReflectionTex, reflectionRenderTexture);
				}
			}
		}

		private void ClearRenderTexture()
		{
			if (reflectionRenderTexture != null)
			{
				reflectionRenderTexture.Release();
				UnityEngine.Object.DestroyImmediate(reflectionRenderTexture);
			}
		}

		private void UpdateCommandBuffer()
		{
			if (commandBufferBlur != null)
			{
				ClearCommandBuffer();
			}
			if (!applyBlur)
			{
				return;
			}
			if (blurMaterial == null)
			{
				if (blurShader == null)
				{
					blurShader = Shader.Find("Hidden/TCP2 Gaussian Blur Filter");
					if (blurShader == null)
					{
						Debug.LogError("[TCP2 Planar Reflection] Can't find Gaussian Blur Filter shader!", base.gameObject);
						return;
					}
				}
				blurMaterial = new Material(blurShader);
				blurMaterial.name = "Planar Reflection Blur";
			}
			float resolutionRatio = (float)Screen.width * ((float)textureSize / 1024f);
			blurMaterial.SetFloat(_SamplingDistance, blurDistance * (resolutionRatio / 1080f));
			if (!(reflectionRenderTexture == null) && !(reflectionCamera == null))
			{
				commandBufferBlur = new CommandBuffer();
				commandBufferBlur.GetTemporaryRT(_PlanarReflectionTempRT, textureSize, textureSize, 16, FilterMode.Bilinear, reflectionRenderTexture.format, RenderTextureReadWrite.sRGB);
				commandBufferBlur.CopyTexture(reflectionRenderTexture, _PlanarReflectionTempRT);
				commandBufferBlur.Blit(_PlanarReflectionTempRT, reflectionRenderTexture, blurMaterial, 0);
				for (int i = 0; i < blurIterations; i++)
				{
					commandBufferBlur.Blit(reflectionRenderTexture, _PlanarReflectionTempRT, blurMaterial, 1);
					commandBufferBlur.Blit(_PlanarReflectionTempRT, reflectionRenderTexture, blurMaterial, 2);
				}
				commandBufferBlur.ReleaseTemporaryRT(_PlanarReflectionTempRT);
				if (!isURP)
				{
					reflectionCamera.AddCommandBuffer(CameraEvent.AfterEverything, commandBufferBlur);
				}
			}
		}

		private void ClearCommandBuffer()
		{
			if (reflectionCamera != null && reflectionCamera.commandBufferCount > 0 && !isURP)
			{
				reflectionCamera.RemoveCommandBuffer(CameraEvent.AfterEverything, commandBufferBlur);
			}
			if (commandBufferBlur != null)
			{
				commandBufferBlur.Clear();
				commandBufferBlur.Release();
				commandBufferBlur = null;
			}
		}

		private void BeginCameraRendering(Camera cam)
		{
			BeginCameraRendering(default(ScriptableRenderContext), cam);
		}

		private void BeginCameraRendering(ScriptableRenderContext context, Camera cam)
		{
			if ((cam.cameraType & (CameraType.Game | CameraType.SceneView)) != 0)
			{
				if (reflectionCamera == null)
				{
					GameObject go = new GameObject("Planar Reflection Camera", typeof(Camera));
					reflectionCamera = go.GetComponent<Camera>();
					reflectionCamera.enabled = false;
					go.hideFlags = HideFlags.HideAndDontSave;
					UpdateRenderTexture();
					UpdateCommandBuffer();
					reflectionCamera.targetTexture = reflectionRenderTexture;
				}
				RenderPlanarReflection(context, cam);
			}
		}

		private void RenderPlanarReflection(ScriptableRenderContext context, Camera worldCamera)
		{
			if (worldCamera == null || !base.enabled || s_InsideRendering)
			{
				return;
			}
			s_InsideRendering = true;
			Transform thisTransform = base.transform;
			Vector3 pos = thisTransform.position;
			Vector3 normal = thisTransform.up;
			reflectionCamera.CopyFrom(worldCamera);
			if (useCustomBackgroundColor)
			{
				reflectionCamera.clearFlags = CameraClearFlags.Color;
				reflectionCamera.backgroundColor = backgroundColor;
			}
			float d = 0f - Vector3.Dot(normal, pos) - clipPlaneOffset;
			Vector4 reflectionPlane = new Vector4(normal.x, normal.y, normal.z, d);
			Matrix4x4 reflectionMatrix = Matrix4x4.zero;
			CalculateReflectionMatrix(ref reflectionMatrix, reflectionPlane);
			reflectionCamera.worldToCameraMatrix = worldCamera.worldToCameraMatrix * reflectionMatrix;
			Vector4 clipPlane = CameraSpacePlane(reflectionCamera, pos, normal, 1f, clipPlaneOffset);
			Matrix4x4 projection = worldCamera.CalculateObliqueMatrix(clipPlane);
			reflectionCamera.projectionMatrix = projection;
			reflectionCamera.targetTexture = reflectionRenderTexture;
			reflectionCamera.cullingMask = ~(1 << base.gameObject.layer) & reflectLayers.value;
			Transform reflectionCamTransform = reflectionCamera.transform;
			reflectionCamTransform.position = reflectionMatrix.MultiplyPoint(worldCamera.transform.position);
			Vector3 euler = worldCamera.transform.eulerAngles;
			reflectionCamTransform.eulerAngles = new Vector3(0f, euler.y, euler.z);
			GL.invertCulling = true;
			if (isURP)
			{
				if (applyBlur && commandBufferBlur != null)
				{
					context.ExecuteCommandBuffer(commandBufferBlur);
				}
			}
			else
			{
				reflectionCamera.Render();
			}
			GL.invertCulling = false;
			s_InsideRendering = false;
		}

		private static Vector4 CameraSpacePlane(Camera cam, Vector3 pos, Vector3 normal, float sideSign, float clipPlaneOffset)
		{
			Vector3 offsetPos = pos + normal * clipPlaneOffset;
			Matrix4x4 matrix = cam.worldToCameraMatrix;
			Vector3 camPosition = matrix.MultiplyPoint(offsetPos);
			Vector3 camNormal = matrix.MultiplyVector(normal).normalized * sideSign;
			return new Vector4(camNormal.x, camNormal.y, camNormal.z, 0f - Vector3.Dot(camPosition, camNormal));
		}

		private static void CalculateReflectionMatrix(ref Matrix4x4 reflectionMat, Vector4 plane)
		{
			reflectionMat.m00 = 1f - 2f * plane[0] * plane[0];
			reflectionMat.m01 = -2f * plane[0] * plane[1];
			reflectionMat.m02 = -2f * plane[0] * plane[2];
			reflectionMat.m03 = -2f * plane[3] * plane[0];
			reflectionMat.m10 = -2f * plane[1] * plane[0];
			reflectionMat.m11 = 1f - 2f * plane[1] * plane[1];
			reflectionMat.m12 = -2f * plane[1] * plane[2];
			reflectionMat.m13 = -2f * plane[3] * plane[1];
			reflectionMat.m20 = -2f * plane[2] * plane[0];
			reflectionMat.m21 = -2f * plane[2] * plane[1];
			reflectionMat.m22 = 1f - 2f * plane[2] * plane[2];
			reflectionMat.m23 = -2f * plane[3] * plane[2];
			reflectionMat.m30 = 0f;
			reflectionMat.m31 = 0f;
			reflectionMat.m32 = 0f;
			reflectionMat.m33 = 1f;
		}
	}
}
