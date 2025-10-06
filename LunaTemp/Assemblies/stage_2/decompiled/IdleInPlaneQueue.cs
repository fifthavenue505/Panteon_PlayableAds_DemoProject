public class IdleInPlaneQueue : CustomerBaseState
{
	public IdleInPlaneQueue(CustomerStateMachine customer)
		: base(customer)
	{
	}

	public override void EnterState()
	{
		EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, false);
	}
}
