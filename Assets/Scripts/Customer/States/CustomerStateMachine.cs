using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum CustomerStateType
{
    WalkingToFirstLine,
    IdleInFirstLine,
    MovingToStairs,
    IdleOnStairs,
    MovingToSecondLine,
    WaitingInSecondLine,
    MovingToPlane,
    Released,
}

public class CustomerStateMachine : MonoBehaviour
{
    public CustomerController customerController;

    // State Machine
    private CustomerBaseState currentState;
    [SerializeField] private CustomerStateType currentStateType;
    public CustomerStateType CurrentStateType => currentStateType;

    private Dictionary<CustomerStateType, CustomerBaseState> states;

    private void Awake()
    {
        customerController = GetComponent<CustomerController>();

        states = new Dictionary<CustomerStateType, CustomerBaseState>
        {
            { CustomerStateType.WalkingToFirstLine, new CustomerWalkingToFirstLine(this) },
            { CustomerStateType.IdleInFirstLine, new CustomerIdleInFirstLine(this) },
            { CustomerStateType.MovingToStairs, new CustomerMovingToStairs(this) },
            { CustomerStateType.IdleOnStairs, new CustomerIdleOnStairs(this) },
            { CustomerStateType.MovingToSecondLine, new CustomerMovingToSecondLine(this) },
            { CustomerStateType.WaitingInSecondLine, new CustomerWaitingInSecondLine(this) },
            { CustomerStateType.MovingToPlane, new CustomerMovingToPlane(this) },
            { CustomerStateType.Released, new CustomerReleased(this) }
        };
    }

    private void Update()
    {
        currentState?.UpdateState();
    }

    private void OnCustomerChangeState(CustomerStateMachine target, CustomerStateType stateType)
    {
        if (target != this) return;
        if (!states.TryGetValue(stateType, out var newState)) return;

        currentState?.ExitState();
        currentState = newState;
        currentStateType = stateType;
        currentState?.EnterState();
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnCustomerChangeState,
            (Action<CustomerStateMachine, CustomerStateType>)OnCustomerChangeState);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnCustomerChangeState,
            (Action<CustomerStateMachine, CustomerStateType>)OnCustomerChangeState);
    }
}