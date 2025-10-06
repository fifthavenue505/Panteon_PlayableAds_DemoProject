using System.Collections;
using UnityEngine;

namespace EpicToonFX
{
	public class ETFXMouseOrbit : MonoBehaviour
	{
		public Transform target;

		public float distance = 12f;

		public float xSpeed = 120f;

		public float ySpeed = 120f;

		public float yMinLimit = -20f;

		public float yMaxLimit = 80f;

		public float distanceMin = 8f;

		public float distanceMax = 15f;

		public float smoothTime = 2f;

		private float rotationYAxis = 0f;

		private float rotationXAxis = 0f;

		private float velocityX = 0f;

		private float maxVelocityX = 0.1f;

		private float velocityY = 0f;

		private readonly float autoRotationSmoothing = 0.02f;

		[HideInInspector]
		public bool isAutoRotating = false;

		[HideInInspector]
		public ETFXEffectController etfxEffectController;

		[HideInInspector]
		public ETFXEffectControllerPooled etfxEffectControllerPooled;

		private void Start()
		{
			Vector3 angles = base.transform.eulerAngles;
			rotationYAxis = angles.y;
			rotationXAxis = angles.x;
			if ((bool)GetComponent<Rigidbody>())
			{
				GetComponent<Rigidbody>().freezeRotation = true;
			}
		}

		private void Update()
		{
			if (!target)
			{
				return;
			}
			if (Input.GetMouseButton(1))
			{
				velocityX += xSpeed * Input.GetAxis("Mouse X") * distance * 0.02f;
				velocityY += ySpeed * Input.GetAxis("Mouse Y") * 0.02f;
				if (isAutoRotating)
				{
					StopAutoRotation();
				}
			}
			distance = Mathf.Clamp(distance - Input.GetAxis("Mouse ScrollWheel") * 15f, distanceMin, distanceMax);
		}

		private void FixedUpdate()
		{
			if ((bool)target)
			{
				rotationYAxis += velocityX;
				rotationXAxis -= velocityY;
				rotationXAxis = ClampAngle(rotationXAxis, yMinLimit, yMaxLimit);
				Quaternion toRotation = Quaternion.Euler(rotationXAxis, rotationYAxis, 0f);
				Quaternion rotation = toRotation;
				if (Physics.Linecast(target.position, base.transform.position, out var hit))
				{
					distance -= hit.distance;
				}
				Vector3 negDistance = new Vector3(0f, 0f, 0f - distance);
				Vector3 position = Vector3.Lerp(base.transform.position, rotation * negDistance + target.position, 0.6f);
				base.transform.rotation = rotation;
				base.transform.position = position;
				velocityX = Mathf.Lerp(velocityX, 0f, Time.deltaTime * smoothTime);
				velocityY = Mathf.Lerp(velocityY, 0f, Time.deltaTime * smoothTime);
			}
		}

		public static float ClampAngle(float angle, float min, float max)
		{
			if (angle < -360f)
			{
				angle += 360f;
			}
			if (angle > 360f)
			{
				angle -= 360f;
			}
			return Mathf.Clamp(angle, min, max);
		}

		public void InitializeAutoRotation()
		{
			isAutoRotating = true;
			StartCoroutine(AutoRotate());
		}

		public void SetAutoRotationSpeed(float rotationSpeed)
		{
			maxVelocityX = rotationSpeed;
		}

		private void StopAutoRotation()
		{
			if (etfxEffectController != null)
			{
				etfxEffectController.autoRotation = false;
			}
			if (etfxEffectControllerPooled != null)
			{
				etfxEffectControllerPooled.autoRotation = false;
			}
			isAutoRotating = false;
			StopAllCoroutines();
		}

		private IEnumerator AutoRotate()
		{
			int lerpSteps = 0;
			while (lerpSteps < 30)
			{
				velocityX = Mathf.Lerp(velocityX, maxVelocityX, autoRotationSmoothing);
				yield return new WaitForFixedUpdate();
			}
			while (isAutoRotating)
			{
				velocityX = maxVelocityX;
				yield return new WaitForFixedUpdate();
			}
		}
	}
}
