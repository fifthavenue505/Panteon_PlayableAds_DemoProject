using System;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;

public class CustomerController : MonoBehaviour, IPoolable
{
    [SerializeField] private CustomerData data;
    
    [SerializeField, ReadOnly] private float speed;
    private CustomerStateMachine stateMachine;
    private CustomerColor customerColor;

    [Title("Movement Settings")]
    [ReadOnly, SerializeField] private List<Transform> positionsToMove = new();

    [Title("Baggage Settings")]
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
    
    public void MoveCustomer(Transform targetPos,
        List<CustomerQueueDataContainer> queueData)
    {
        if (targetPos == null) return;

        var distance = Vector3.Distance(transform.position, targetPos.position);
        var duration = distance / speed;
        EventManager.Broadcast(GameEvent.OnCustomerChangeState, gameObject, GetMoveState(hasBaggage));

        transform.DORotateQuaternion(Quaternion.LookRotation(GetDirection(targetPos.position, transform.position)),
            0.15f);
        transform.DOMove(targetPos.position, duration)
            .SetEase(Ease.Linear)
            .OnComplete(() => { CustomerSystemManager.Instance.OnCustomerReachedSpot(this, queueData); });
    }

    public CustomerStateType GetMoveState(bool hasBaggage) =>
        hasBaggage ? CustomerStateType.MovingToBaggageQueue : CustomerStateType.MovingToPlaneQueue;

    public CustomerStateType GetIdleState(bool hasBaggage) =>
        hasBaggage ? CustomerStateType.IdleInBaggageQueue : CustomerStateType.IdleInPlaneQueue;

    public void MoveThroughPositions(CustomerStateType newState)
    {
        UpdatePositions();

        if (positionsToMove.Count == 0) return;

        var seq = DOTween.Sequence();
        var currentPos = transform.position;

        foreach (var pos in positionsToMove)
        {
            var distance = Vector3.Distance(currentPos, pos.position);
            var duration = distance / speed;

            seq.Append(transform.DOMove(pos.position, duration).SetEase(Ease.Linear));
            seq.Join(transform.DORotateQuaternion(
                Quaternion.LookRotation(GetDirection(pos.position, transform.position)), 0.15f));

            currentPos = pos.position;
        }

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

    private Vector3 GetDirection(Vector3 to, Vector3 from)
    {
        var dir = (to - from).normalized;
        dir.y = 0f;
        return dir;
    }

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

    public void OnObjectSpawn()
    {
        customerColor.ApplyRandomColors(data);
    }

    public void OnObjectDespawn()
    {
    }
}