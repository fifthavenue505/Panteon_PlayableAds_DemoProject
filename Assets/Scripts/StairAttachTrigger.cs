using UnityEngine;

public class StairAttachTrigger : MonoBehaviour, IInteractable
{
    [SerializeField] private StairsController stairsController;

    public void InteractEnter(GameObject interactor)
    {
        StairStepEnter(interactor);
    }
    
    public void InteractStay(GameObject interactor)
    {
    }

    public void InteractExit(GameObject interactor)
    {
    }
    
    public void StairStepEnter(GameObject interactor)
    {
        var firstStep = stairsController.Steps[0];
        interactor.transform.SetParent(firstStep);
        interactor.transform.localPosition = Vector3.zero;

        BroadcastEnterEvent(interactor);
    }
    
    private void BroadcastEnterEvent(GameObject interactor)
    {
        if (interactor.TryGetComponent<PlayerStateMachine>(out var player))
        {
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.IdleOnStair);
        }
    }
}