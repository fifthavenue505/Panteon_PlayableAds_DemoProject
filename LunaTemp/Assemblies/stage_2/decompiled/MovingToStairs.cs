public class MovingToStairs : CustomerBaseState
{
	public MovingToStairs(CustomerStateMachine customer)
		: base(customer)
	{
	}

	public override void EnterState()
	{
		customer.customerController.MoveThroughPositions(CustomerStateType.IdleOnStairs);
		EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, false);
	}
}
