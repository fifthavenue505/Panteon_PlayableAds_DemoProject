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
}

public class PlayerStateMachine : MonoBehaviour
{
    public PlayerController playerController;

    // State Machine
    private PlayerBaseState currentState;
    [SerializeField] private PlayerStateType CurrentStateType;

    private Dictionary<PlayerStateType, PlayerBaseState> states;
    private void Awake()
    {
        playerController = GetComponent<PlayerController>();

        states = new Dictionary<PlayerStateType, PlayerBaseState>
        {
            { PlayerStateType.Idle, new PlayerIdleState(this) },
            { PlayerStateType.Walking, new PlayerWalkingState(this) },
            { PlayerStateType.CarryingIdle, new PlayerCarryingIdleState(this) },
            { PlayerStateType.CarryingWalking, new PlayerCarryingWalkingState(this) },
            { PlayerStateType.IdleOnStair, new PlayerIdleOnStairState(this) },
            { PlayerStateType.CarryingOnStair, new PlayerCarryingOnStairState(this) }
        };
    }

    private void Start()
    {
    }

    private void Update()
    {
        currentState?.UpdateState();
    }

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