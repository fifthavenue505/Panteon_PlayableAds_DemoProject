public class IdleInBaggageQueue : CustomerBaseState
{
	public IdleInBaggageQueue(CustomerStateMachine customer)
		: base(customer)
	{
	}

	public override void EnterState()
	{
		EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, true);
	}
}
