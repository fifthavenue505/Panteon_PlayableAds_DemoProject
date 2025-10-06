using UnityEngine;

public class BoardPlaneArea : InteractableBase
{
    private float stayTimer;
    [SerializeField] private float stayInterval = 0.5f;

    [Header("Tutorial")] [SerializeField] private int customerBoarded = 0;
    [SerializeField] private int maxCustomer = 6;

    public override void InteractStay(GameObject interactor)
    {
        stayTimer += Time.deltaTime;

        if (stayTimer < stayInterval) return;
        stayTimer = 0f;

        var manager = CustomerSystemManager.Instance;
        
        // Retrieve the next customer waiting in the plane queue
        var nextCustomer = manager.GetNextCustomerFromQueue(QueueType.Plane);
        if (nextCustomer == null) return;

        var stateMachine = nextCustomer.GetComponent<CustomerStateMachine>();
        if (stateMachine == null) return;

        customerBoarded++;

        SFXManager.Instance.Play(SFXType.ImpactPop, 0.1f);
        if (customerBoarded == maxCustomer)
            EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);

        EventManager.Broadcast(GameEvent.OnCustomerChangeState, stateMachine.gameObject,
            CustomerStateType.MovingToPlane);
    }

    public override void InteractExit(GameObject interactor)
    {
        base.InteractExit(interactor);
        stayTimer = 0f;
    }
}