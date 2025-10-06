public class PlayerWalkingState : PlayerBaseState
{
	public PlayerWalkingState(PlayerStateMachine player)
		: base(player)
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
