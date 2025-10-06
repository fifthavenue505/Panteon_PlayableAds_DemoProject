using System.Collections.Generic;
using UnityEngine;

public class PlayerStateMachine : MonoBehaviour
{
	public PlayerController playerController;

	private PlayerBaseState currentState;

	[SerializeField]
	private PlayerStateType CurrentStateType;

	private Dictionary<PlayerStateType, PlayerBaseState> states;

	private void Awake()
	{
		playerController = GetComponent<PlayerController>();
		states = new Dictionary<PlayerStateType, PlayerBaseState>
		{
			{
				PlayerStateType.Idle,
				new PlayerIdleState(this)
			},
			{
				PlayerStateType.Walking,
				new PlayerWalkingState(this)
			},
			{
				PlayerStateType.CarryingIdle,
				new PlayerCarryingIdleState(this)
			},
			{
				PlayerStateType.CarryingWalking,
				new PlayerCarryingWalkingState(this)
			},
			{
				PlayerStateType.IdleOnStair,
				new PlayerIdleOnStairState(this)
			},
			{
				PlayerStateType.CarryingOnStair,
				new PlayerCarryingOnStairState(this)
			},
			{
				PlayerStateType.Waiting,
				new PlayerWaitingState(this)
			}
		};
	}

	private void Update()
	{
		currentState?.UpdateState();
	}

	private void OnPlayerChangeState(PlayerStateType stateType)
	{
		if (states.TryGetValue(stateType, out var newState))
		{
			currentState?.ExitState();
			currentState = newState;
			CurrentStateType = stateType;
			currentState?.EnterState();
		}
	}

	private void OnEnable()
	{
		EventManager.AddHandler<PlayerStateType>(GameEvent.OnPlayerChangeState, OnPlayerChangeState);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler<PlayerStateType>(GameEvent.OnPlayerChangeState, OnPlayerChangeState);
	}
}
