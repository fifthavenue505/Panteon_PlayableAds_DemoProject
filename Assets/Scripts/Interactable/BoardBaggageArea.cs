using UnityEngine;

public class BoardBaggageArea : InteractableBase
{
    private float stayTimer;
    [SerializeField] private float stayInterval = 0.5f;
    
    [Header("Tutorial")]
    [SerializeField] private int customerBoarded = 0;
    [SerializeField] private int maxCustomer = 6;

    public override void InteractStay(GameObject interactor)
    {
        stayTimer += Time.deltaTime;

        if (stayTimer < stayInterval) return;
        stayTimer = 0f;

        var manager = CustomerSystemManager.Instance;

        var nextCustomer = manager.GetNextCustomerFromQueue(QueueType.Baggage);
        customerBoarded++;

        if (nextCustomer == null) return;

        // Trigger tutorial progress event when the maximum number of customers is reached
        if (customerBoarded == maxCustomer)
            EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);

        if (nextCustomer.Baggage != null)
        {
            interactor.GetComponent<PlayerBaggage>().AddBaggage(nextCustomer.Baggage);
            nextCustomer.HasBaggage = false;
        }

        // Change the customer’s state
        EventManager.Broadcast(GameEvent.OnCustomerChangeState, nextCustomer.gameObject,
            CustomerStateType.MovingToStairs);
    }

    public override void InteractExit(GameObject interactor)
    {
        base.InteractExit(interactor);
        stayTimer = 0f;
    }
}