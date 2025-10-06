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
            { PlayerStateType.Idle, new PlayerIdleState() },
            { PlayerStateType.Walking, new PlayerWalkingState() },
            { PlayerStateType.CarryingIdle, new PlayerCarryingIdleState() },
            { PlayerStateType.CarryingWalking, new PlayerCarryingWalkingState() },
            { PlayerStateType.IdleOnStair, new PlayerIdleOnStairState() },
            { PlayerStateType.CarryingOnStair, new PlayerCarryingOnStairState() },
            { PlayerStateType.Waiting, new PlayerWaitingState() }
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