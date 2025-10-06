using UnityEngine;

// Movement to baggage queue
public class MovingToBaggageQueue : CustomerBaseState
{
    public MovingToBaggageQueue(CustomerStateMachine customer)
    {
        this.customer = customer;
    }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.IdleInBaggageQueue);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, true);
    }
}

// Waiting state in baggage queue
public class IdleInBaggageQueue : CustomerBaseState
{
    public IdleInBaggageQueue(CustomerStateMachine customer)
    {
        this.customer = customer;
    }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, true);
    }
}

// Customer movement from baggage queue to the stairs
public class MovingToStairs : CustomerBaseState
{
    public MovingToStairs(CustomerStateMachine customer)
    {
        this.customer = customer;
    }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.IdleOnStairs);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, false);
    }
}

// Idle on stairs state
public class IdleOnStairs : CustomerBaseState
{
    public IdleOnStairs(CustomerStateMachine customer)
    {
        this.customer = customer;
    }

    public override void EnterState()
    {
        CustomerSystemManager.Instance.AttachTrigger().InteractEnter(customer.gameObject);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, false);
    }
}

// Customer movement from stairs to plane
public class MovingToPlaneQueue : CustomerBaseState
{
    public MovingToPlaneQueue(CustomerStateMachine customer)
    {
        this.customer = customer;
    }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, false);
    }
}

// Waiting state inside the plane boarding queue
public class IdleInPlaneQueue : CustomerBaseState
{
    public IdleInPlaneQueue(CustomerStateMachine customer)
    {
        this.customer = customer;
    }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, false);
    }
}

// Final movement of the customer toward the airplane
public class MovingToPlane : CustomerBaseState
{
    public MovingToPlane(CustomerStateMachine customer)
    {
        this.customer = customer;
    }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.Released);
        EventManager.Broadcast(GameEvent.OnCustomerBoard, customer.customerController);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, false);
    }
}

// Released state after the customer has boarded the plane
public class Released : CustomerBaseState
{
    public Released(CustomerStateMachine customer)
    {
        this.customer = customer;
    }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnCustomerEnterPlane);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, false);
        Factory.ReleaseCustomer(customer.customerController);
    }
}