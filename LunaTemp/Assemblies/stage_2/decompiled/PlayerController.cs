using UnityEngine;

public class PlayerController : MonoBehaviour
{
	[Header("Movement Settings")]
	[SerializeField]
	private float moveSpeed = 5f;

	[Header("Obstacle Detection")]
	[SerializeField]
	private float rayDistance = 1f;

	[SerializeField]
	private LayerMask obstacleMask;

	[Header("References")]
	[SerializeField]
	private PlayerBaggage _playerBaggage;

	[SerializeField]
	private Camera mainCamera;

	[SerializeField]
	private FloatingJoystick joystick;

	[SerializeField]
	private ParticleSystem trailParticle;

	public PlayerBaggage _PlayerBaggage => _playerBaggage;

	public void SetTrailParticle(bool state)
	{
		if (state)
		{
			trailParticle.Play();
		}
		else
		{
			trailParticle.Stop();
		}
	}

	private void Awake()
	{
		_playerBaggage = GetComponent<PlayerBaggage>();
	}

	private void Start()
	{
		EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);
		joystick = SingletonManager<UIManager>.Instance.GetJoystick();
	}

	public void HandleMovement()
	{
		Vector3 dir = GetJoystickDirection();
		if (dir.magnitude > 0.05f)
		{
			dir = dir.normalized;
			Vector3 camForward = mainCamera.transform.forward;
			Vector3 camRight = mainCamera.transform.right;
			camForward.y = 0f;
			camRight.y = 0f;
			camForward.Normalize();
			camRight.Normalize();
			Vector3 moveDir = camForward * dir.z + camRight * dir.x;
			if (!IsObstacleInFront(moveDir))
			{
				Vector3 delta = moveDir * (moveSpeed * Time.deltaTime);
				base.transform.position += delta;
			}
			base.transform.rotation = Quaternion.LookRotation(moveDir, Vector3.up);
		}
	}

	public bool HasMovementInput()
	{
		return Mathf.Abs(joystick.Horizontal) >= 0.01f || Mathf.Abs(joystick.Vertical) >= 0.01f;
	}

	private Vector3 GetJoystickDirection()
	{
		return new Vector3(joystick.Horizontal, 0f, joystick.Vertical);
	}

	private bool IsObstacleInFront(Vector3 moveDir)
	{
		Ray ray = new Ray(base.transform.position + Vector3.up * 0.5f, moveDir);
		return Physics.Raycast(ray, rayDistance, obstacleMask);
	}

	public void SetPlayerControlElements(bool state)
	{
		SingletonManager<UIManager>.Instance.SetJoystickEnabled(state);
		if (SingletonManager<TutorialManager>.Instance.GetTutorialActive())
		{
			SingletonManager<TutorialManager>.Instance.SetPlayerArrow(state);
		}
		SetTrailParticle(state);
	}
}
