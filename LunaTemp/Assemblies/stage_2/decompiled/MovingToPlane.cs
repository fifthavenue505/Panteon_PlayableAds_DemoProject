public class MovingToPlane : CustomerBaseState
{
	public MovingToPlane(CustomerStateMachine customer)
		: base(customer)
	{
	}

	public override void EnterState()
	{
		customer.customerController.MoveThroughPositions(CustomerStateType.Released);
		EventManager.Broadcast(GameEvent.OnCustomerBoard, customer.customerController);
		EventManager.Broadcast(GameEvent.OnSetCustomerAnimation, customer.gameObject, true, false);
	}
}
