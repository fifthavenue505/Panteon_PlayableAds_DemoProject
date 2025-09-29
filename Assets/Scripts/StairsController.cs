using System;
using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;

public class StairsController : MonoBehaviour
{
    [Title("Stairs")]
    [SerializeField]
    private List<Transform> steps = new();
    public List<Transform> Steps => steps;

    [HorizontalGroup("Points", Width = 0.5f)]
    [BoxGroup("Points/Start")] [HideLabel] [SerializeField] private Transform startPoint;
    [BoxGroup("Points/End")] [HideLabel] [SerializeField] private Transform endPoint;

    [Title("Settings")]
    [SerializeField, MinValue(0.1f)] private float stepSpeed = 3f;

    private void MoveStep(Transform step)
    {
        step.DOMove(endPoint.position, stepSpeed)
            .SetSpeedBased(true)
            .SetEase(Ease.Linear)
            .OnComplete(() =>
            {
                for (int i = step.childCount - 1; i >= 0; i--)
                {
                    var child = step.GetChild(i);
                    child.SetParent(null);
                    if (child.TryGetComponent<PlayerStateMachine>(out var player))
                    {
                        EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);
                    }
                    else if (child.TryGetComponent<CustomerStateMachine>(out var customer))
                    {
                        EventManager.Broadcast(GameEvent.OnCustomerChangeState, customer,
                            CustomerStateType.MovingToSecondLine);
                    }
                }

                steps.Remove(step);
                steps.Insert(0, step);

                step.position = startPoint.position;
                MoveStep(step);
            });
    }

    private void OnLevelElementsActivated()
    {
        foreach (var t in steps)
        {
            MoveStep(t);
        }
    }

    [Button]
    public void SetStairLayout()
    {
        if (steps == null || steps.Count == 0) return;

        Vector3 startPos = startPoint.position;
        Vector3 endPos = endPoint.position;

        int count = steps.Count;
        for (int i = 0; i < count; i++)
        {
            float t = (float)i / (count - 1);
            Vector3 targetPos = Vector3.Lerp(startPos, endPos, t);
            steps[i].position = targetPos;
        }
    }

    [Button]
    public void ReverseSteps()
    {
        if (steps == null || steps.Count == 0) return;

        steps.Reverse();
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnLevelElementsActivated, (Action)OnLevelElementsActivated);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnLevelElementsActivated, (Action)OnLevelElementsActivated);
    }
}