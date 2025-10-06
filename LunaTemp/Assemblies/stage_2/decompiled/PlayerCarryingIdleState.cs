public class PlayerCarryingIdleState : PlayerBaseState
{
	public PlayerCarryingIdleState(PlayerStateMachine player)
		: base(player)
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
