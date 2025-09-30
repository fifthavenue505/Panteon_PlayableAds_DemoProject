using UnityEngine;

public class BoardBaggageArea : MonoBehaviour, IInteractable
{
    public void InteractEnter(GameObject interactor)
    {
    }

    public void InteractStay(GameObject interactor)
    {
        var manager = CustomerSystemManager.Instance;
        var nextCustomer = manager.GetNextCustomerFromQueue(QueueType.Baggage);
        if (nextCustomer == null) return;

        var stateMachine = nextCustomer.GetComponent<CustomerStateMachine>();
        if (stateMachine == null) return;
        
        if (nextCustomer != null && nextCustomer.Baggage != null)
        {
            interactor.GetComponent<PlayerBaggage>().AddBaggage(nextCustomer.Baggage);
        }
        
        EventManager.Broadcast(GameEvent.OnCustomerChangeState, stateMachine, CustomerStateType.MovingToStairs);
    }

    public void InteractExit(GameObject interactor)
    {
    }
}