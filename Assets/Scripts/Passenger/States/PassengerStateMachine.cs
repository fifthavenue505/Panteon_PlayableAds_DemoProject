using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum PassengerStateType
{
    WalkingToFirstLine,
    IdleInFirstLine,
    MovingToStairs,
    IdleOnStairs,
    MovingToSecondLine,
    WaitingInSecondLine,
    MovingToPlane,
}

public class PassengerStateMachine : MonoBehaviour
{
    public PassengerController passengerController;

    // State Machine
    private PassengerBaseState currentState;
    [SerializeField] private PassengerStateType CurrentStateType;

    private Dictionary<PassengerStateType, PassengerBaseState> states;
    
    private void Awake()
    {
        passengerController = GetComponent<PassengerController>();

        states = new Dictionary<PassengerStateType, PassengerBaseState>
        {
            { PassengerStateType.WalkingToFirstLine, new PassengerWalkingToFirstLine(this) },
            { PassengerStateType.IdleInFirstLine, new PassengerIdleInFirstLine(this) },
            { PassengerStateType.MovingToStairs, new PassengerMovingToStairs(this) },
            { PassengerStateType.IdleOnStairs, new PassengerIdleOnStairs(this) },
            { PassengerStateType.MovingToSecondLine, new PassengerMovingToSecondLine(this) },
            { PassengerStateType.WaitingInSecondLine, new PassengerWaitingInSecondLine(this) },
            { PassengerStateType.MovingToPlane, new PassengerMovingToPlane(this) }
        };
    }
    
    private void Update()
    {
        currentState?.UpdateState();
    }
    
    private void OnPassengerChangeState(PassengerStateType stateType)
    {
        if (!states.TryGetValue(stateType, out var newState)) return;
        
        currentState?.ExitState();
        currentState = newState;
        CurrentStateType = stateType;
        currentState?.EnterState();
    }

    private void OnEnable()
    {
        EventManager.AddHandler<PassengerStateType>(GameEvent.OnPassengerChangeState, OnPassengerChangeState);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler<PassengerStateType>(GameEvent.OnPassengerChangeState, OnPassengerChangeState);
    }
}
