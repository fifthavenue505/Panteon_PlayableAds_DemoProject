using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class CustomerController : MonoBehaviour, IPoolable
{
	[SerializeField]
	private CustomerData data;

	[SerializeField]
	private float speed;

	private CustomerStateMachine stateMachine;

	private CustomerColor customerColor;

	[Header("Movement Settings")]
	[SerializeField]
	private List<Transform> positionsToMove = new List<Transform>();

	[Header("Baggage Settings")]
	[SerializeField]
	private Transform baggageHoldPoint;

	private Baggage baggage;

	[SerializeField]
	private bool hasBaggage = true;

	public Baggage Baggage => baggage;

	public bool HasBaggage
	{
		get
		{
			return hasBaggage;
		}
		set
		{
			hasBaggage = value;
		}
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
		EventManager.Broadcast(GameEvent.OnCustomerChangeState, base.gameObject, CustomerStateType.MovingToBaggageQueue);
		stateMachine = GetComponent<CustomerStateMachine>();
		customerColor = GetComponent<CustomerColor>();
	}

	public void MoveCustomer(Transform targetPos, List<CustomerQueueDataContainer> queueData)
	{
		if (!(targetPos == null))
		{
			float distance = Vector3.Distance(base.transform.position, targetPos.position);
			float duration = distance / speed;
			EventManager.Broadcast(GameEvent.OnCustomerChangeState, base.gameObject, GetMoveState(hasBaggage));
			base.transform.DORotateQuaternion(Quaternion.LookRotation(GetDirection(targetPos.position, base.transform.position)), 0.15f);
			base.transform.DOMove(targetPos.position, duration).SetEase(Ease.Linear).OnComplete(delegate
			{
				SingletonManager<CustomerSystemManager>.Instance.OnCustomerReachedSpot(this, queueData);
			});
		}
	}

	public CustomerStateType GetMoveState(bool hasBaggage)
	{
		return (!hasBaggage) ? CustomerStateType.MovingToPlaneQueue : CustomerStateType.MovingToBaggageQueue;
	}

	public CustomerStateType GetIdleState(bool hasBaggage)
	{
		return hasBaggage ? CustomerStateType.IdleInBaggageQueue : CustomerStateType.IdleInPlaneQueue;
	}

	public void MoveThroughPositions(CustomerStateType newState)
	{
		UpdatePositions();
		if (positionsToMove.Count == 0)
		{
			return;
		}
		Sequence seq = DOTween.Sequence();
		Vector3 currentPos = base.transform.position;
		foreach (Transform pos in positionsToMove)
		{
			float distance = Vector3.Distance(currentPos, pos.position);
			float duration = distance / speed;
			seq.Append(base.transform.DOMove(pos.position, duration).SetEase(Ease.Linear));
			seq.Join(base.transform.DORotateQuaternion(Quaternion.LookRotation(GetDirection(pos.position, base.transform.position)), 0.15f));
			currentPos = pos.position;
		}
		seq.OnComplete(delegate
		{
			if (CustomerStateType.IdleInPlaneQueue != newState)
			{
				EventManager.Broadcast(GameEvent.OnCustomerChangeState, base.gameObject, newState);
			}
			else
			{
				SingletonManager<CustomerSystemManager>.Instance.TryAssignCustomerToQueue(this, QueueType.Plane);
			}
		});
	}

	private Vector3 GetDirection(Vector3 to, Vector3 from)
	{
		Vector3 dir = (to - from).normalized;
		dir.y = 0f;
		return dir;
	}

	private void UpdatePositions()
	{
		positionsToMove.Clear();
		foreach (CustomerPathController.CustomerPathData data in SingletonManager<CustomerPathController>.Instance.customerPathData)
		{
			if (data.customerState == stateMachine.CurrentStateType)
			{
				if (data.PathPoints != null && data.PathPoints.Count > 0)
				{
					positionsToMove.AddRange(data.PathPoints);
				}
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
