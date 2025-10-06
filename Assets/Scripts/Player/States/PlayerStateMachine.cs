using System;
using System.Collections.Generic;
using UnityEngine;

public enum PlayerStateType
{
    Idle,
    Walking,
    CarryingIdle,
    CarryingWalking,
    IdleOnStair,
    CarryingOnStair,
    Waiting,
}

public class PlayerStateMachine : MonoBehaviour
{
    public PlayerController playerController;

    // State Machine
    private PlayerBaseState currentState;
    [SerializeField] private PlayerStateType CurrentStateType;

    private Dictionary<PlayerStateType, PlayerBaseState> states = new Dictionary<PlayerStateType, PlayerBaseState>();

    private void Awake()
    {
        playerController = GetComponent<PlayerController>();

        // Initialize and register all player states
        states = new Dictionary<PlayerStateType, PlayerBaseState>
        {
            { PlayerStateType.Idle, new PlayerIdleState(this) },
            { PlayerStateType.Walking, new PlayerWalkingState(this) },
            { PlayerStateType.CarryingIdle, new PlayerCarryingIdleState(this) },
            { PlayerStateType.CarryingWalking, new PlayerCarryingWalkingState(this) },
            { PlayerStateType.IdleOnStair, new PlayerIdleOnStairState(this) },
            { PlayerStateType.CarryingOnStair, new PlayerCarryingOnStairState(this) },
            { PlayerStateType.Waiting, new PlayerWaitingState(this) }
        };
    }

    private void Update()
    {
        currentState?.UpdateState();
    }

    // Handles transition from one player state to another
    private void OnPlayerChangeState(PlayerStateType stateType)
    {
        if (!states.TryGetValue(stateType, out var newState)) return;

        currentState?.ExitState();
        currentState = newState;
        CurrentStateType = stateType;
        currentState?.EnterState();
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnPlayerChangeState, (Action<PlayerStateType>)OnPlayerChangeState);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnPlayerChangeState, (Action<PlayerStateType>)OnPlayerChangeState);
    }
}