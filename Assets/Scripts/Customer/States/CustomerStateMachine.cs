using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Customer behavior states
public enum CustomerStateType
{
    MovingToBaggageQueue,
    IdleInBaggageQueue,
    MovingToStairs,
    IdleOnStairs,
    MovingToPlaneQueue,
    IdleInPlaneQueue,
    MovingToPlane,
    Released
}

public class CustomerStateMachine : MonoBehaviour
{
    public CustomerController customerController;

    // State machine core
    private CustomerBaseState currentState; // Currently active state
    [SerializeField] private CustomerStateType currentStateType;
    public CustomerStateType CurrentStateType()
    {
        return currentStateType;
    }

    private Dictionary<CustomerStateType, CustomerBaseState> states = new Dictionary<CustomerStateType, CustomerBaseState>();

    private void Awake()
    {
        customerController = GetComponent<CustomerController>();

        // Initialize
        states = new Dictionary<CustomerStateType, CustomerBaseState>
        {
            { CustomerStateType.MovingToBaggageQueue, new MovingToBaggageQueue(this) },
            { CustomerStateType.IdleInBaggageQueue, new IdleInBaggageQueue(this) },
            { CustomerStateType.MovingToStairs, new MovingToStairs(this) },
            { CustomerStateType.IdleOnStairs, new IdleOnStairs(this) },
            { CustomerStateType.MovingToPlaneQueue, new MovingToPlaneQueue(this) },
            { CustomerStateType.IdleInPlaneQueue, new IdleInPlaneQueue(this) },
            { CustomerStateType.MovingToPlane, new MovingToPlane(this) },
            { CustomerStateType.Released, new Released(this) }
        };
    }

    private void Update()
    {
        currentState?.UpdateState();
    }

    // Transitions between states
    private void OnCustomerChangeState(GameObject target, CustomerStateType stateType)
    {
        if (target != gameObject) return;
        if (!states.TryGetValue(stateType, out var newState)) return;

        // Exit the current state, enter to the new one
        currentState?.ExitState();
        currentState = newState;
        currentStateType = stateType;
        currentState?.EnterState();
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnCustomerChangeState,
            (Action<GameObject, CustomerStateType>)OnCustomerChangeState);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnCustomerChangeState,
            (Action<GameObject, CustomerStateType>)OnCustomerChangeState);
    }
}