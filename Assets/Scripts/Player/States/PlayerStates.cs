using UnityEngine;

public class PlayerWalkingState : PlayerBaseState
{
    public PlayerWalkingState(PlayerStateMachine player) : base(player)
    {
    }

    public override void EnterState()
    {
    }

    public override void UpdateState()
    {
        player.playerController.HandleMovement();
        if (!player.playerController.HasMovementInput())
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);
        }
    }

    public override void ExitState()
    {
    }
}

public class PlayerCarryingIdleState : PlayerBaseState
{
    public PlayerCarryingIdleState(PlayerStateMachine player) : base(player)
    {
        if (!player.playerController.HasMovementInput())
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.CarryingIdle);
        }
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

public class PlayerCarryingOnStairState : PlayerBaseState
{
    public PlayerCarryingOnStairState(PlayerStateMachine player) : base(player)
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

public class PlayerCarryingWalkingState : PlayerBaseState
{
    public PlayerCarryingWalkingState(PlayerStateMachine player) : base(player)
    {
    }



    public override void EnterState()
    {
    }

    public override void UpdateState()
    {
        player.playerController.HandleMovement();
        if (!player.playerController.HasMovementInput())
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.CarryingIdle);
        }
    }

    public override void ExitState()
    {
    }
}

public class PlayerIdleState : PlayerBaseState
{
    public PlayerIdleState(PlayerStateMachine player) : base(player)
    {
    }


    public override void EnterState()
    {
        base.EnterState();
    }

    public override void UpdateState()
    {
        if (player.playerController.HasMovementInput())
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Walking);
        }

        
    }
}

public class PlayerIdleOnStairState : PlayerBaseState
{
    // Start is called before the first frame update
    public PlayerIdleOnStairState(PlayerStateMachine player) : base(player)
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