using UnityEngine;

public class MovingToBaggageQueue : CustomerBaseState
{
    public MovingToBaggageQueue(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.IdleInBaggageQueue);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, true);
    }
}

public class IdleInBaggageQueue : CustomerBaseState
{
    public IdleInBaggageQueue(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, true);
    }
}

public class MovingToStairs : CustomerBaseState
{
    public MovingToStairs(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.IdleOnStairs);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, false);
    }
}

public class IdleOnStairs : CustomerBaseState
{
    public IdleOnStairs(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        CustomerSystemManager.Instance.AttachTrigger.InteractEnter(customer.gameObject);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, false);
    }
}

public class MovingToPlaneQueue : CustomerBaseState
{
    public MovingToPlaneQueue(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, false);
    }
}

public class IdleInPlaneQueue : CustomerBaseState
{
    public IdleInPlaneQueue(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, false);
    }
}

public class MovingToPlane : CustomerBaseState
{
    public MovingToPlane(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.Released);
        EventManager.Broadcast(GameEvent.OnCustomerBoard, customer.customerController);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, false);
    }
}

public class Released : CustomerBaseState
{
    public Released(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnCustomerEnterPlane);
        EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, false);
        Factory.ReleaseCustomer(customer.customerController);
    }
}