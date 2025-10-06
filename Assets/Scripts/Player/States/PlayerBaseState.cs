public abstract class PlayerBaseState : BaseState<PlayerStateType, PlayerStateMachine>
{
    protected PlayerStateMachine player;

    protected PlayerBaseState(PlayerStateMachine player)
    {
        this.player = player;
    }
}