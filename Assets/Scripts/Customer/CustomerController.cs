using System;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEngine;

public class CustomerController : MonoBehaviour, IPoolable
{
    [SerializeField] private CustomerData data; // ScriptableObject that stores base stats
    
    [SerializeField] private float speed;
    private CustomerStateMachine stateMachine;
    private CustomerColor customerColor;

    [Header("Movement Settings")]
    [SerializeField] private List<Transform> positionsToMove = new();

    [Header("Baggage Settings")]
    [SerializeField] private Transform baggageHoldPoint;
    private Baggage baggage;
    public Baggage Baggage => baggage;

    [SerializeField] private bool hasBaggage = true;

    public bool HasBaggage
    {
        get => hasBaggage;
        set => hasBaggage = value;
    }

    public Transform BaggageHoldPoint => baggageHoldPoint;

    // Assigns a new baggage object to the customer
    public void AssignBaggage(Baggage newBaggage)
    {
        baggage = newBaggage;
        baggage.transform.SetParent(baggageHoldPoint);
        baggage.transform.localPosition = Vector3.zero;
    }

    private void Awake()
    {
        speed = data.speed;
        EventManager.Broadcast(GameEvent.OnCustomerChangeState, gameObject, CustomerStateType.MovingToBaggageQueue);
        stateMachine = GetComponent<CustomerStateMachine>();
        customerColor = GetComponent<CustomerColor>();
    }
    
    // Moves the customer to a specific target position
    public void MoveCustomer(Transform targetPos,
        List<CustomerQueueDataContainer> queueData)
    {
        if (targetPos == null) return;

        // Calculate travel duration
        var distance = Vector3.Distance(transform.position, targetPos.position);
        var duration = distance / speed;
        
        // Update state
        EventManager.Broadcast(GameEvent.OnCustomerChangeState, gameObject, GetMoveState(hasBaggage));

        // Rotate toward the target smoothly
        transform.DORotateQuaternion(Quaternion.LookRotation(GetDirection(targetPos.position, transform.position)),
            0.15f);
        
        // Move to the target position
        transform.DOMove(targetPos.position, duration)
            .SetEase(Ease.Linear)
            .OnComplete(() => { CustomerSystemManager.Instance.OnCustomerReachedSpot(this, queueData); });
    }

    // Returns the correct movement state based on baggage
    public CustomerStateType GetMoveState(bool hasBaggage) =>
        hasBaggage ? CustomerStateType.MovingToBaggageQueue : CustomerStateType.MovingToPlaneQueue;

    // Returns the correct idle state based on baggage
    public CustomerStateType GetIdleState(bool hasBaggage) =>
        hasBaggage ? CustomerStateType.IdleInBaggageQueue : CustomerStateType.IdleInPlaneQueue;

    // Moves the customer through positions
    public void MoveThroughPositions(CustomerStateType newState)
    {
        UpdatePositions();

        if (positionsToMove.Count == 0) return;

        var seq = DOTween.Sequence();
        var currentPos = transform.position;

        // Append a movement tween for each position
        foreach (var pos in positionsToMove)
        {
            var distance = Vector3.Distance(currentPos, pos.position);
            var duration = distance / speed;

            seq.Append(transform.DOMove(pos.position, duration).SetEase(Ease.Linear));
            seq.Join(transform.DORotateQuaternion(
                Quaternion.LookRotation(GetDirection(pos.position, transform.position)), 0.15f));

            currentPos = pos.position;
        }

        // When finished moving through all positions, change to the next state
        seq.OnComplete(() =>
        {
            if (CustomerStateType.IdleInPlaneQueue != newState)
                EventManager.Broadcast(GameEvent.OnCustomerChangeState, gameObject, newState);
            else
            {
                CustomerSystemManager.Instance.TryAssignCustomerToQueue(this, QueueType.Plane);
            }
        });
    }

    // Calculates the direction vector
    private Vector3 GetDirection(Vector3 to, Vector3 from)
    {
        var dir = (to - from).normalized;
        dir.y = 0f;
        return dir;
    }

    // Updates the movement path based on the current state type
    private void UpdatePositions()
    {
        positionsToMove.Clear();

        foreach (var data in CustomerPathController.Instance.customerPathData)
        {
            if (data.customerState == stateMachine.CurrentStateType)
            {
                if (data.PathPoints != null && data.PathPoints.Count > 0)
                    positionsToMove.AddRange(data.PathPoints);
                break;
            }
        }
    }

    // Called when the object is spawned
    public void OnObjectSpawn()
    {
        customerColor.ApplyRandomColors(data);
    }

    // Called when the object is despawned
    public void OnObjectDespawn()
    {
    }
}