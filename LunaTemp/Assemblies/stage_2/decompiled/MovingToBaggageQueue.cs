public class MovingToBaggageQueue : CustomerBaseState
{
	public MovingToBaggageQueue(CustomerStateMachine customer)
		: base(customer)
	{
	}

	public override void EnterState()
	{
		customer.customerController.MoveThroughPositions(CustomerStateType.IdleInBaggageQueue);
		EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, true);
	}
}
