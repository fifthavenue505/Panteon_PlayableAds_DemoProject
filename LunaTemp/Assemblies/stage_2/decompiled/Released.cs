public class Released : CustomerBaseState
{
	public Released(CustomerStateMachine customer)
		: base(customer)
	{
	}

	public override void EnterState()
	{
		EventManager.Broadcast(GameEvent.OnCustomerEnterPlane);
		EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, false);
		Factory.ReleaseCustomer(customer.customerController);
	}
}
