using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.AI;

public class CustomerWalkingToFirstLine : CustomerBaseState
{
    public CustomerWalkingToFirstLine(CustomerStateMachine customer) : base(customer) {}

    public override void EnterState()
    {
    }

    public override void UpdateState()
    {
    }

    public override void ExitState()
    {
    }
}

public class CustomerIdleInFirstLine : CustomerBaseState
{
    public CustomerIdleInFirstLine(CustomerStateMachine customer) : base(customer) { }

    public override void EnterState()
    {
    }

    public override void UpdateState()
    {
        
    }

    public override void ExitState()
    {
        
    }
}

public class CustomerMovingToStairs : CustomerBaseState
{
    public CustomerMovingToStairs(CustomerStateMachine customer) : base(customer)
    {
    }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.IdleOnStairs);
    }

    public override void UpdateState()
    {
    }

    public override void ExitState()
    {
    }
}

public class CustomerIdleOnStairs : CustomerBaseState
{
    public CustomerIdleOnStairs(CustomerStateMachine customer) : base(customer)
    {
        
    }

    public override void EnterState()
    {
        CustomerSystemManager.Instance.AttachTrigger.StairStepEnter(customer.gameObject);
    }

    public override void UpdateState()
    {
    }

    public override void ExitState()
    {
    }
}


public class CustomerMovingToSecondLine : CustomerBaseState
{
    public CustomerMovingToSecondLine(CustomerStateMachine customer) : base(customer)
    {
    }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.WaitingInSecondLine);
    }

    public override void UpdateState()
    {
    }

    public override void ExitState()
    {
    }
}

public class CustomerWaitingInSecondLine : CustomerBaseState
{
    public CustomerWaitingInSecondLine(CustomerStateMachine customer) : base(customer)
    {
    }


    public override void EnterState()
    {
        CustomerSystemManager.Instance.TryAssignCustomerToQueue(customer.customerController, CustomerSystemManager.Instance.PlaneQueueData);
    }

    public override void UpdateState()
    {
    }

    public override void ExitState()
    {
    }
}

public class CustomerMovingToPlane : CustomerBaseState
{
    public CustomerMovingToPlane(CustomerStateMachine customer) : base(customer)
    {
    }

    public override void EnterState()
    {
        customer.customerController.MoveThroughPositions(CustomerStateType.Released);
    }

    public override void UpdateState()
    {
    }

    public override void ExitState()
    {
    }
}

public class CustomerReleased : CustomerBaseState
{
    public CustomerReleased(CustomerStateMachine customer) : base(customer) {}

    public override void EnterState()
    {
        Factory.ReleaseCustomer(customer.customerController);
    }

    public override void UpdateState()
    {
    }

    public override void ExitState()
    {
    }
}