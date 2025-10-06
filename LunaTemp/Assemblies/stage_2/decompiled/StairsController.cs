using System.Collections.Generic;
using UnityEngine;

public class StairsController : MonoBehaviour
{
	[Header("Stairs")]
	[SerializeField]
	private List<Transform> steps = new List<Transform>();

	[SerializeField]
	private Transform startPoint;

	[SerializeField]
	private Transform endPoint;

	[Header("Settings")]
	[SerializeField]
	private float stepSpeed = 3f;

	private Vector3 direction;

	private float totalDistance;

	private bool isActive = false;

	public List<Transform> Steps => steps;

	public Transform StartPoint => startPoint;

	private void OnEnable()
	{
		EventManager.AddHandler(GameEvent.OnEnvironmentElementsActivated, OnEnvironmentElementsActivated);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler(GameEvent.OnEnvironmentElementsActivated, OnEnvironmentElementsActivated);
	}

	private void Update()
	{
		if (!isActive)
		{
			return;
		}
		List<Transform> currentSteps = new List<Transform>(steps);
		foreach (Transform step in currentSteps)
		{
			step.position += direction * stepSpeed * Time.deltaTime;
			float distToEnd = Vector3.Dot(step.position - startPoint.position, direction);
			if (distToEnd > totalDistance)
			{
				HandleStepCompletion(step);
			}
		}
	}

	private void HandleStepCompletion(Transform step)
	{
		DetachChildrenAndUpdateStates(step);
		RecycleStep(step);
	}

	private void DetachChildrenAndUpdateStates(Transform step)
	{
		for (int i = step.childCount - 1; i >= 0; i--)
		{
			Transform child = step.GetChild(i);
			child.SetParent(null);
			CustomerStateMachine customer;
			if (child.TryGetComponent<PlayerStateMachine>(out var player))
			{
				PlayerStateType targetState = ((player.playerController._PlayerBaggage.BaggageCount > 0) ? PlayerStateType.CarryingIdle : PlayerStateType.Idle);
				EventManager.Broadcast(GameEvent.OnPlayerChangeState, targetState);
			}
			else if (child.TryGetComponent<CustomerStateMachine>(out customer))
			{
				EventManager.Broadcast(GameEvent.OnCustomerChangeState, customer.gameObject, CustomerStateType.MovingToPlaneQueue);
				customer.customerController.MoveThroughPositions(CustomerStateType.IdleInPlaneQueue);
			}
		}
	}

	private void RecycleStep(Transform step)
	{
		float overshoot = Vector3.Dot(step.position - endPoint.position, direction);
		step.position = startPoint.position + direction * overshoot;
		steps.Remove(step);
		steps.Insert(0, step);
		EventManager.Broadcast(GameEvent.OnStepRecycled, step);
	}

	private void OnEnvironmentElementsActivated()
	{
		AlignStepsEvenly();
		isActive = true;
		direction = (endPoint.position - startPoint.position).normalized;
		totalDistance = Vector3.Distance(startPoint.position, endPoint.position);
	}

	public void AlignStepsEvenly()
	{
		if (steps.Count >= 2)
		{
			Vector3 startPos = startPoint.position;
			Vector3 endPos = endPoint.position;
			float totalDist = Vector3.Distance(startPos, endPos);
			Vector3 dir = (endPos - startPos).normalized;
			for (int i = 0; i < steps.Count; i++)
			{
				float t = (float)i / (float)(steps.Count - 1);
				steps[i].position = startPos + dir * (totalDist * t);
			}
		}
	}

	public void ReverseSteps()
	{
		steps.Reverse();
		direction = -direction;
	}
}
