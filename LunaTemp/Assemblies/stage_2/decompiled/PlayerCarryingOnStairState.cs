public class PlayerCarryingOnStairState : PlayerBaseState
{
	public PlayerCarryingOnStairState(PlayerStateMachine player)
		: base(player)
	{
	}

	public override void EnterState()
	{
		EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, true);
		player.playerController.SetPlayerControlElements(false);
	}

	public override void ExitState()
	{
		player.playerController.SetPlayerControlElements(true);
	}
}
