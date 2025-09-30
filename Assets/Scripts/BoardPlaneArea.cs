using UnityEngine;

public class BoardPlaneArea : MonoBehaviour, IInteractable
{
    public void InteractEnter(GameObject interactor) { }

    public void InteractStay(GameObject interactor)
    {
        var manager = CustomerSystemManager.Instance;
        var nextCustomer = manager.GetNextCustomerFromQueue(QueueType.Plane);
        if (nextCustomer == null) return;

        var stateMachine = nextCustomer.GetComponent<CustomerStateMachine>();
        if (stateMachine == null) return;

        EventManager.Broadcast(GameEvent.OnCustomerChangeState, stateMachine, CustomerStateType.MovingToPlane);
    }

    public void InteractExit(GameObject interactor) { }
}
