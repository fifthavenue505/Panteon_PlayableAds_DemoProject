public class PlayerIdleOnStairState : PlayerBaseState
{
	public PlayerIdleOnStairState(PlayerStateMachine player)
		: base(player)
	{
	}

	public override void EnterState()
	{
		EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, false);
		player.playerController.SetPlayerControlElements(false);
	}

	public override void ExitState()
	{
		player.playerController.SetPlayerControlElements(true);
	}
}
