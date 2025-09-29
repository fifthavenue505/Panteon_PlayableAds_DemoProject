using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BoardPlaneArea : MonoBehaviour, IInteractable
{
    public void InteractEnter(GameObject interactor)
    {
    }

    public void InteractStay(GameObject interactor)
    {
        var nextCustomer = CustomerSystemManager.Instance.GetNextCustomerFromQueue(CustomerSystemManager.Instance.PlaneQueueData);
        if (nextCustomer == null) return;

        var stateMachine = nextCustomer.GetComponent<CustomerStateMachine>();
        if (stateMachine != null)
        {
            EventManager.Broadcast(GameEvent.OnCustomerChangeState, stateMachine, CustomerStateType.MovingToPlane);
        }
    }

    public void InteractExit(GameObject interactor)
    {
    }
}
