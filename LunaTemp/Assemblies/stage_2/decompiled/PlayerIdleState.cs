public class PlayerIdleState : PlayerBaseState
{
	public PlayerIdleState(PlayerStateMachine player)
		: base(player)
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
