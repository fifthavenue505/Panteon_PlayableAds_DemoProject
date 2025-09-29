using UnityEngine;

public class GetCustomerArea : MonoBehaviour, IInteractable
{
    public void InteractEnter(GameObject interactor)
    {
    }

    public void InteractStay(GameObject interactor)
    {
        var nextCustomer = CustomerSystemManager.Instance.GetNextCustomerFromQueue(CustomerSystemManager.Instance.BaggageQueueData);
        if (nextCustomer == null) return;

        var stateMachine = nextCustomer.GetComponent<CustomerStateMachine>();
        if (stateMachine != null)
        {
            EventManager.Broadcast(GameEvent.OnCustomerChangeState, stateMachine, CustomerStateType.MovingToStairs);
        }
    }

    public void InteractExit(GameObject interactor)
    {
    }
}