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
    [SerializeField] private List<Transform> positionsToMove = new List<Transform>();

    private void Awake()
    {
        stateMachine = GetComponent<CustomerStateMachine>();
    }

    public void MoveCustomer(Transform targetPos, List<CustomerQueueDataContainer> queueData)
    {
        if (targetPos == null) return;

        float distance = Vector3.Distance(transform.position, targetPos.position);
        float duration = distance / speed;

        transform.DOMove(targetPos.position, duration)
            .SetEase(Ease.Linear)
            .OnComplete(() => CustomerSystemManager.Instance.OnCustomerReachedSpot(this,queueData));
    }

    public void MoveThroughPositions(CustomerStateType newState)
    {
        UpdatePositions();

        if (positionsToMove.Count == 0) return;

        var seq = DOTween.Sequence();
        var currentPos = transform.position;

        foreach (var pos in positionsToMove)
        {
            float distance = Vector3.Distance(currentPos, pos.position);
            float duration = distance / speed;

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

        var pathData = CustomerPathController.Instance.customerPathData
            .FirstOrDefault(d => d.customerState == stateMachine.CurrentStateType);

        if (pathData.PathPoints != null && pathData.PathPoints.Count > 0)
            positionsToMove.AddRange(pathData.PathPoints);
    }
}