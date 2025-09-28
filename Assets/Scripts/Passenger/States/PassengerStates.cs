using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.AI;

public class PassengerWalkingToFirstLine : PassengerBaseState
{
    public PassengerWalkingToFirstLine(PassengerStateMachine passenger) : base(passenger) {}

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

public class PassengerIdleInFirstLine : PassengerBaseState
{
    public PassengerIdleInFirstLine(PassengerStateMachine passenger) : base(passenger) { }

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

public class PassengerMovingToStairs : PassengerBaseState
{
    public PassengerMovingToStairs(PassengerStateMachine passenger) : base(passenger)
    {
    }

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

public class PassengerIdleOnStairs : PassengerBaseState
{
    public PassengerIdleOnStairs(PassengerStateMachine passenger) : base(passenger)
    {
    }

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


public class PassengerMovingToSecondLine : PassengerBaseState
{
    public PassengerMovingToSecondLine(PassengerStateMachine passenger) : base(passenger)
    {
    }

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

public class PassengerWaitingInSecondLine : PassengerBaseState
{
    public PassengerWaitingInSecondLine(PassengerStateMachine passenger) : base(passenger)
    {
    }


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

public class PassengerMovingToPlane : PassengerBaseState
{
    public PassengerMovingToPlane(PassengerStateMachine passenger) : base(passenger)
    {
    }

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