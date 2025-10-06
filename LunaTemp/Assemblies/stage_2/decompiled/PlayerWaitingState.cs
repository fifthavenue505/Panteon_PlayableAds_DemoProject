public class PlayerWaitingState : PlayerBaseState
{
	public PlayerWaitingState(PlayerStateMachine player)
		: base(player)
	{
	}

	public override void EnterState()
	{
		EventManager.Broadcast(GameEvent.OnSetPlayerAnimation, false, false);
		SingletonManager<UIManager>.Instance.SetJoystickEnabled(false);
	}

	public override void ExitState()
	{
		SingletonManager<UIManager>.Instance.SetJoystickEnabled(true);
	}
}
