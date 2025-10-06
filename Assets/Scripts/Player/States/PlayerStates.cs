using UnityEngine;

public class PlayerIdleState : PlayerBaseState
{
    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, false);
    }

    public override void UpdateState()
    {
        if (player.playerController.HasMovementInput())
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Walking);
        }
    }
}

public class PlayerWalkingState : PlayerBaseState
{
    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, true, false);
    }

    public override void UpdateState()
    {
        player.playerController.HandleMovement();
        
        // Transition to idle if no movement input
        if (!player.playerController.HasMovementInput())
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);
        }
    }
}

public class PlayerCarryingIdleState : PlayerBaseState
{
    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, true);
    }

    public override void UpdateState()
    {
        if (player.playerController.HasMovementInput())
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.CarryingWalking);
        }
    }
}

public class PlayerCarryingWalkingState : PlayerBaseState
{
    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, true, true);
    }

    public override void UpdateState()
    {
        player.playerController.HandleMovement();
        if (!player.playerController.HasMovementInput())
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.CarryingIdle);
        }
    }
}

public class PlayerCarryingOnStairState : PlayerBaseState
{
    public override void EnterState()
    {
        // Set animation and disable player control during stair sequence
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, true);
        player.playerController.SetPlayerControlElements(false);
    }

    public override void ExitState()
    {
        // Restore joystick and effects after leaving the stairs
        player.playerController.SetPlayerControlElements(true);
    }
}

public class PlayerIdleOnStairState : PlayerBaseState
{
    public override void EnterState()
    {
        // Set animation and disable controls while on stairs
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, false);
        player.playerController.SetPlayerControlElements(false);
    }

    public override void ExitState()
    {
        // Restore joystick and effects after leaving the stairs
        player.playerController.SetPlayerControlElements(true);
    }
}

public class PlayerWaitingState : PlayerBaseState
{
    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, false);
        UIManager.Instance.SetJoystickEnabled(false);
    }

    public override void ExitState()
    {
        UIManager.Instance.SetJoystickEnabled(true);
    }
}