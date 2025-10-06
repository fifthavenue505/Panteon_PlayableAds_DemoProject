public class PlayerCarryingWalkingState : PlayerBaseState
{
	public PlayerCarryingWalkingState(PlayerStateMachine player)
		: base(player)
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
