public class IdleOnStairs : CustomerBaseState
{
	public IdleOnStairs(CustomerStateMachine customer)
		: base(customer)
	{
	}

	public override void EnterState()
	{
		SingletonManager<CustomerSystemManager>.Instance.AttachTrigger.InteractEnter(customer.gameObject);
		EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, false, false);
	}
}
