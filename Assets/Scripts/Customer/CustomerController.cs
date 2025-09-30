using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;

public class CustomerController : MonoBehaviour
{
    private CustomerStateMachine stateMachine;

    [Title("Movement Settings")]
    [SerializeField] private float speed = 1f;
    [ReadOnly, SerializeField] private List<Transform> positionsToMove = new();
    
    [SerializeField] private Transform baggageHoldPoint;
    private Baggage baggage;
    public Baggage Baggage => baggage;

    public Transform BaggageHoldPoint => baggageHoldPoint;

    public void AssignBaggage(Baggage newBaggage)
    {
        baggage = newBaggage;
        baggage.transform.SetParent(baggageHoldPoint);
        baggage.transform.localPosition = Vector3.zero;
    }

    private void Awake()
    {
        stateMachine = GetComponent<CustomerStateMachine>();
    }

    public void MoveCustomer(Transform targetPos,
        List<CustomerQueueDataContainer> queueData,
        QueueType queueType)
    {
        if (targetPos == null) return;

        var distance = Vector3.Distance(transform.position, targetPos.position);
        var duration = distance / speed;

        transform.DOMove(targetPos.position, duration)
            .SetEase(Ease.Linear)
            .OnComplete(() =>
                CustomerSystemManager.Instance.OnCustomerReachedSpot(this, queueData, queueType));
    }

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

            currentPos = pos.position;
        }

        seq.OnComplete(() =>
        {
            EventManager.Broadcast(GameEvent.OnCustomerChangeState, stateMachine, newState);
        });
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
}