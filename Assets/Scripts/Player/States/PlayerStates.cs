using UnityEngine;

public class PlayerIdleState : PlayerBaseState
{
    public PlayerIdleState(PlayerStateMachine player) : base(player)
    {
    }

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
    public PlayerWalkingState(PlayerStateMachine player) : base(player)
    {
    }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, true, false);
    }

    public override void UpdateState()
    {
        player.playerController.HandleMovement();
        if (!player.playerController.HasMovementInput())
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);
        }
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
    public PlayerCarryingWalkingState(PlayerStateMachine player) : base(player)
    {
    }

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
    public PlayerCarryingOnStairState(PlayerStateMachine player) : base(player)
    {
    }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, true);
        UIManager.Instance.SetJoystickEnabled(false);
        if (TutorialManager.Instance.GetTutorialActive())
            TutorialManager.Instance.SetPlayerArrow(false);
        player.playerController.SetTrailParticle(false);
    }

    public override void ExitState()
    {
        UIManager.Instance.SetJoystickEnabled(true);
        if (TutorialManager.Instance.GetTutorialActive())
            TutorialManager.Instance.SetPlayerArrow(true);
        player.playerController.SetTrailParticle(true);
    }
}

public class PlayerIdleOnStairState : PlayerBaseState
{
    public PlayerIdleOnStairState(PlayerStateMachine player) : base(player)
    {
    }

    public override void EnterState()
    {
        EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, false);
        UIManager.Instance.SetJoystickEnabled(false);
        if (TutorialManager.Instance.GetTutorialActive())
            TutorialManager.Instance.SetPlayerArrow(false);

        player.playerController.SetTrailParticle(false);
    }

    public override void ExitState()
    {
        UIManager.Instance.SetJoystickEnabled(true);
        if (TutorialManager.Instance.GetTutorialActive())
            TutorialManager.Instance.SetPlayerArrow(true);

        player.playerController.SetTrailParticle(true);
    }
}

public class PlayerWaitingState : PlayerBaseState
{
    public PlayerWaitingState(PlayerStateMachine player) : base(player)
    {
    }

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