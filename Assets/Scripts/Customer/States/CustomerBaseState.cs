public abstract class CustomerBaseState : BaseState<CustomerStateType, CustomerStateMachine>
{
    protected CustomerStateMachine customer;

    protected CustomerBaseState(CustomerStateMachine customer)
    {
        this.customer = customer;
    }
}