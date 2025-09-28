public abstract class PassengerBaseState : BaseState<PassengerStateType, PassengerStateMachine>
{
    protected PassengerStateMachine passenger;

    protected PassengerBaseState(PassengerStateMachine customer)
    {
        this.passenger= passenger;
    }
}