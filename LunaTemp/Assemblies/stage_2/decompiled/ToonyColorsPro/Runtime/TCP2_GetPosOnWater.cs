using UnityEngine;

namespace ToonyColorsPro.Runtime
{
	public class TCP2_GetPosOnWater : MonoBehaviour
	{
		public Material WaterMaterial;

		[Tooltip("Height scale, for example if the water mesh is scaled along its Y axis")]
		public float heightScale = 1f;

		[Space]
		[Tooltip("Will make the object stick to the water plane")]
		public bool followWaterHeight = true;

		[Tooltip("Y Position offset")]
		public float heightOffset;

		[Space]
		[Tooltip("Will align the object to the wave normal based on its position")]
		public bool followWaterNormal;

		[Tooltip("Determine the object's up axis (when following wave normal)")]
		public Vector3 upAxis = new Vector3(0f, 1f, 0f);

		[Tooltip("Rotation of the object once it's been affected by the water normal")]
		public Vector3 postRotation = new Vector3(0f, 0f, 0f);

		[SerializeField]
		[HideInInspector]
		private bool isValid;

		[SerializeField]
		[HideInInspector]
		private int sineCount;

		private float[] sinePosOffsetsX = new float[8] { 1f, 2.2f, 2.7f, 3.4f, 1.4f, 1.8f, 4.2f, 3.6f };

		private float[] sinePosOffsetsZ = new float[8] { 0.6f, 1.3f, 3.1f, 2.4f, 1.1f, 2.8f, 1.7f, 4.3f };

		private float[] sinePhsOffsetsX = new float[8] { 1f, 1.3f, 0.7f, 1.75f, 0.2f, 2.6f, 0.7f, 3.1f };

		private float[] sinePhsOffsetsZ = new float[8] { 2.2f, 0.4f, 3.3f, 2.9f, 0.5f, 4.8f, 3.1f, 2.3f };

		private void LateUpdate()
		{
			if (followWaterHeight)
			{
				Vector3 worldPosition = GetPositionOnWater(base.transform.position);
				worldPosition.y += heightOffset;
				base.transform.position = worldPosition;
			}
			if (followWaterNormal)
			{
				base.transform.rotation = Quaternion.FromToRotation(upAxis, GetNormalOnWater(base.transform.position));
				base.transform.Rotate(postRotation, Space.Self);
			}
		}

		public Vector3 GetPositionOnWater(Vector3 worldPosition)
		{
			float freq = WaterMaterial.GetFloat("_WaveFrequency");
			float height = WaterMaterial.GetFloat("_WaveHeight") * heightScale;
			float speed = WaterMaterial.GetFloat("_WaveSpeed");
			float phase = Time.time * speed;
			float x = worldPosition.x * freq;
			float z = worldPosition.z * freq;
			float waveFactorX = 0f;
			float waveFactorZ = 0f;
			switch (sineCount)
			{
			case 1:
				waveFactorX = Mathf.Sin(x + phase) * height;
				waveFactorZ = Mathf.Sin(z + phase) * height;
				break;
			case 2:
				waveFactorX = (Mathf.Sin(sinePosOffsetsX[0] * x + sinePhsOffsetsX[0] * phase) + Mathf.Sin(sinePosOffsetsX[1] * x + sinePhsOffsetsX[1] * phase)) * height / 2f;
				waveFactorZ = (Mathf.Sin(sinePosOffsetsZ[0] * z + sinePhsOffsetsZ[0] * phase) + Mathf.Sin(sinePosOffsetsZ[1] * z + sinePhsOffsetsZ[1] * phase)) * height / 2f;
				break;
			case 4:
				waveFactorX = (Mathf.Sin(sinePosOffsetsX[0] * x + sinePhsOffsetsX[0] * phase) + Mathf.Sin(sinePosOffsetsX[1] * x + sinePhsOffsetsX[1] * phase) + Mathf.Sin(sinePosOffsetsX[2] * x + sinePhsOffsetsX[2] * phase) + Mathf.Sin(sinePosOffsetsX[3] * x + sinePhsOffsetsX[3] * phase)) * height / 4f;
				waveFactorZ = (Mathf.Sin(sinePosOffsetsZ[0] * z + sinePhsOffsetsZ[0] * phase) + Mathf.Sin(sinePosOffsetsZ[1] * z + sinePhsOffsetsZ[1] * phase) + Mathf.Sin(sinePosOffsetsZ[2] * z + sinePhsOffsetsZ[2] * phase) + Mathf.Sin(sinePosOffsetsZ[3] * z + sinePhsOffsetsZ[3] * phase)) * height / 4f;
				break;
			case 8:
				waveFactorX = (Mathf.Sin(sinePosOffsetsX[0] * x + sinePhsOffsetsX[0] * phase) + Mathf.Sin(sinePosOffsetsX[1] * x + sinePhsOffsetsX[1] * phase) + Mathf.Sin(sinePosOffsetsX[2] * x + sinePhsOffsetsX[2] * phase) + Mathf.Sin(sinePosOffsetsX[3] * x + sinePhsOffsetsX[3] * phase) + Mathf.Sin(sinePosOffsetsX[4] * x + sinePhsOffsetsX[4] * phase) + Mathf.Sin(sinePosOffsetsX[5] * x + sinePhsOffsetsX[5] * phase) + Mathf.Sin(sinePosOffsetsX[6] * x + sinePhsOffsetsX[6] * phase) + Mathf.Sin(sinePosOffsetsX[7] * x + sinePhsOffsetsX[7] * phase)) * height / 8f;
				waveFactorZ = (Mathf.Sin(sinePosOffsetsZ[0] * z + sinePhsOffsetsZ[0] * phase) + Mathf.Sin(sinePosOffsetsZ[1] * z + sinePhsOffsetsZ[1] * phase) + Mathf.Sin(sinePosOffsetsZ[2] * z + sinePhsOffsetsZ[2] * phase) + Mathf.Sin(sinePosOffsetsZ[3] * z + sinePhsOffsetsZ[3] * phase) + Mathf.Sin(sinePosOffsetsZ[4] * z + sinePhsOffsetsZ[4] * phase) + Mathf.Sin(sinePosOffsetsZ[5] * z + sinePhsOffsetsZ[5] * phase) + Mathf.Sin(sinePosOffsetsZ[6] * z + sinePhsOffsetsZ[6] * phase) + Mathf.Sin(sinePosOffsetsZ[7] * z + sinePhsOffsetsZ[7] * phase)) * height / 8f;
				break;
			}
			worldPosition.y = waveFactorX + waveFactorZ;
			return worldPosition;
		}

		public Vector3 GetNormalOnWater(Vector3 worldPosition)
		{
			float freq = WaterMaterial.GetFloat("_WaveFrequency");
			float height = WaterMaterial.GetFloat("_WaveHeight") * heightScale;
			float speed = WaterMaterial.GetFloat("_WaveSpeed");
			float phase = Time.time * speed;
			float x = worldPosition.x * freq;
			float z = worldPosition.z * freq;
			float waveNormalX = 0f;
			float waveNormalZ = 0f;
			switch (sineCount)
			{
			case 1:
				waveNormalX = (0f - height) * Mathf.Cos(x + phase);
				waveNormalZ = (0f - height) * Mathf.Cos(z + phase);
				break;
			case 2:
				waveNormalX = (0f - height) / 2f * (Mathf.Cos(sinePosOffsetsX[0] * x + sinePhsOffsetsX[0] * phase) * sinePosOffsetsX[0] + Mathf.Cos(sinePosOffsetsX[1] * x + sinePhsOffsetsX[1] * phase) * sinePosOffsetsX[1]);
				waveNormalZ = (0f - height) / 2f * (Mathf.Cos(sinePosOffsetsZ[0] * z + sinePhsOffsetsZ[0] * phase) * sinePosOffsetsZ[0] + Mathf.Cos(sinePosOffsetsZ[1] * z + sinePhsOffsetsZ[1] * phase) * sinePosOffsetsZ[1]);
				break;
			case 4:
				waveNormalX = (0f - height) / 4f * (Mathf.Cos(sinePosOffsetsX[0] * x + sinePhsOffsetsX[0] * phase) * sinePosOffsetsX[0] + Mathf.Cos(sinePosOffsetsX[1] * x + sinePhsOffsetsX[1] * phase) * sinePosOffsetsX[1] + Mathf.Cos(sinePosOffsetsX[2] * x + sinePhsOffsetsX[2] * phase) * sinePosOffsetsX[2] + Mathf.Cos(sinePosOffsetsX[3] * x + sinePhsOffsetsX[3] * phase) * sinePosOffsetsX[3]);
				waveNormalZ = (0f - height) / 4f * (Mathf.Cos(sinePosOffsetsZ[0] * z + sinePhsOffsetsZ[0] * phase) * sinePosOffsetsZ[0] + Mathf.Cos(sinePosOffsetsZ[1] * z + sinePhsOffsetsZ[1] * phase) * sinePosOffsetsZ[1] + Mathf.Cos(sinePosOffsetsZ[2] * z + sinePhsOffsetsZ[2] * phase) * sinePosOffsetsZ[2] + Mathf.Cos(sinePosOffsetsZ[3] * z + sinePhsOffsetsZ[3] * phase) * sinePosOffsetsZ[3]);
				break;
			case 8:
				waveNormalX = (0f - height) / 8f * (Mathf.Cos(sinePosOffsetsX[0] * x + sinePhsOffsetsX[0] * phase) * sinePosOffsetsX[0] + Mathf.Cos(sinePosOffsetsX[1] * x + sinePhsOffsetsX[1] * phase) * sinePosOffsetsX[1] + Mathf.Cos(sinePosOffsetsX[2] * x + sinePhsOffsetsX[2] * phase) * sinePosOffsetsX[2] + Mathf.Cos(sinePosOffsetsX[3] * x + sinePhsOffsetsX[3] * phase) * sinePosOffsetsX[3] + Mathf.Cos(sinePosOffsetsX[4] * x + sinePhsOffsetsX[4] * phase) * sinePosOffsetsX[4] + Mathf.Cos(sinePosOffsetsX[5] * x + sinePhsOffsetsX[5] * phase) * sinePosOffsetsX[5] + Mathf.Cos(sinePosOffsetsX[6] * x + sinePhsOffsetsX[6] * phase) * sinePosOffsetsX[6] + Mathf.Cos(sinePosOffsetsX[7] * x + sinePhsOffsetsX[7] * phase) * sinePosOffsetsX[7]);
				waveNormalZ = (0f - height) / 8f * (Mathf.Cos(sinePosOffsetsZ[0] * z + sinePhsOffsetsZ[0] * phase) * sinePosOffsetsZ[0] + Mathf.Cos(sinePosOffsetsZ[1] * z + sinePhsOffsetsZ[1] * phase) * sinePosOffsetsZ[1] + Mathf.Cos(sinePosOffsetsZ[2] * z + sinePhsOffsetsZ[2] * phase) * sinePosOffsetsZ[2] + Mathf.Cos(sinePosOffsetsZ[3] * z + sinePhsOffsetsZ[3] * phase) * sinePosOffsetsZ[3] + Mathf.Cos(sinePosOffsetsZ[4] * z + sinePhsOffsetsZ[4] * phase) * sinePosOffsetsZ[4] + Mathf.Cos(sinePosOffsetsZ[5] * z + sinePhsOffsetsZ[5] * phase) * sinePosOffsetsZ[5] + Mathf.Cos(sinePosOffsetsZ[6] * z + sinePhsOffsetsZ[6] * phase) * sinePosOffsetsZ[6] + Mathf.Cos(sinePosOffsetsZ[7] * z + sinePhsOffsetsZ[7] * phase) * sinePosOffsetsZ[7]);
				break;
			}
			return new Vector3(waveNormalX, 1f, waveNormalZ).normalized;
		}
	}
}
