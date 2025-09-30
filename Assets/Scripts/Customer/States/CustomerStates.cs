using UnityEngine;

public class MovingToBaggageQueue : CustomerBaseState
{
    public MovingToBaggageQueue(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.IdleInBaggageQueue);
    }
}

public class IdleInBaggageQueue : CustomerBaseState
{
    public IdleInBaggageQueue(CustomerStateMachine customer) : base(customer) { }
}

public class MovingToStairs : CustomerBaseState
{
    public MovingToStairs(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.IdleOnStairs);
    }
}

public class IdleOnStairs : CustomerBaseState
{
    public IdleOnStairs(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        CustomerSystemManager.Instance.AttachTrigger.StairStepEnter(customer.gameObject);
    }
}

public class MovingToPlaneQueue : CustomerBaseState
{
    public MovingToPlaneQueue(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.IdleInPlaneQueue);
    }
}

public class IdleInPlaneQueue : CustomerBaseState
{
    public IdleInPlaneQueue(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        CustomerSystemManager.Instance.TryAssignCustomerToQueue(customer.customerController, QueueType.Plane);
    }
}

public class MovingToPlane : CustomerBaseState
{
    public MovingToPlane(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.Released);
    }
}

public class Released : CustomerBaseState
{
    public Released(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
        Factory.ReleaseCustomer(customer.customerController);
    }
}