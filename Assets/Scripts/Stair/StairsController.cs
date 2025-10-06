using System;
using System.Collections.Generic;
using UnityEngine;

public class StairsController : MonoBehaviour
{
    [Header("Stairs")]
    [SerializeField] private List<Transform> steps = new List<Transform>();
    public List<Transform> Steps => steps;

    [SerializeField] private Transform startPoint;
    public Transform StartPoint => startPoint;

    [SerializeField] private Transform endPoint;

    [Header("Settings")]
    [SerializeField] private float stepSpeed = 3f;

    private Vector3 direction;
    private float totalDistance;
    private bool isActive = false;

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnEnvironmentElementsActivated, (Action)OnEnvironmentElementsActivated);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnEnvironmentElementsActivated, (Action)OnEnvironmentElementsActivated);
    }

    // Update Steps Movement
    private void Update()
    {
        if (!isActive) return;

        var currentSteps = new List<Transform>(steps);

        foreach (var step in currentSteps)
        {
            step.position += direction * stepSpeed * Time.deltaTime;

            var distToEnd = Vector3.Dot(step.position - startPoint.position, direction);

            if (distToEnd > totalDistance)
            {
                HandleStepCompletion(step);
            }
        }
    }

    // Step Completion Logic
    private void HandleStepCompletion(Transform step)
    {
        DetachChildrenAndUpdateStates(step);
        RecycleStep(step);
    }

    // Detach any children and update their states accordingly
    private void DetachChildrenAndUpdateStates(Transform step)
    {
        for (int i = step.childCount - 1; i >= 0; i--)
        {
            var child = step.GetChild(i);
            child.SetParent(null);

            if (child.TryGetComponent<PlayerStateMachine>(out var player))
            {
                var hasBaggage = player.playerController._PlayerBaggage.BaggageCount > 0;
                var targetState = hasBaggage ? PlayerStateType.CarryingIdle : PlayerStateType.Idle;
                EventManager.Broadcast(GameEvent.OnPlayerChangeState, targetState);
            }
            else if (child.TryGetComponent<CustomerStateMachine>(out var customer))
            {
                EventManager.Broadcast(GameEvent.OnCustomerChangeState, customer.gameObject, CustomerStateType.MovingToPlaneQueue);
                customer.customerController.MoveThroughPositions(CustomerStateType.IdleInPlaneQueue);
            }
        }
    }

    // Recycle the step to the start position
    private void RecycleStep(Transform step)
    {
        var overshoot = Vector3.Dot(step.position - endPoint.position, direction);
        step.position = startPoint.position + direction * overshoot;

        steps.Remove(step);
        steps.Insert(0, step);

        EventManager.Broadcast(GameEvent.OnStepRecycled, step);
    }

    // Initialize stairs when environment elements are activated
    private void OnEnvironmentElementsActivated()
    {
        AlignStepsEvenly();
        isActive = true;
        direction = (endPoint.position - startPoint.position).normalized;
        totalDistance = Vector3.Distance(startPoint.position, endPoint.position);
    }

    // Align steps evenly between start and end points
    public void AlignStepsEvenly()
    {
        if (steps.Count < 2) return;

        var startPos = startPoint.position;
        var endPos = endPoint.position;
        var totalDist = Vector3.Distance(startPos, endPos);
        var dir = (endPos - startPos).normalized;

        for (int i = 0; i < steps.Count; i++)
        {
            float t = (float)i / (steps.Count - 1);
            steps[i].position = startPos + dir * (totalDist * t);
        }
    }

    public void ReverseSteps()
    {
        steps.Reverse();
        direction = -direction;
    }
}