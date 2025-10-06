public class MovingToPlaneQueue : CustomerBaseState
{
	public MovingToPlaneQueue(CustomerStateMachine customer)
		: base(customer)
	{
	}

	public override void EnterState()
	{
		EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, false);
	}
}
