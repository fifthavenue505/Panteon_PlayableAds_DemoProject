public abstract class BaseState<TStateType,TStateMachine>
    where TStateMachine : class
{
    
    public virtual void EnterState(){}
    public virtual void UpdateState(){}
    public virtual void ExitState(){}
}