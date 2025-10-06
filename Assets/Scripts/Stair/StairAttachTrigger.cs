using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class StairAttachTrigger : InteractableBase
{
    [SerializeField] private StairsController stairsController;
    [SerializeField] private GameObject arrowObject;

    private readonly Queue<GameObject> currentInteractors = new Queue<GameObject>();
    private bool isMoving = false;

    public override void InteractEnter(GameObject interactor)
    {
        currentInteractors.Enqueue(interactor);

        if (isMoving) return;

        StartNextInteractor();
    }

    public override void InteractStay(GameObject interactor)
    {
    }

    // Starts The Next Interactor Movement
    private void StartNextInteractor()
    {
        if (currentInteractors.Count == 0) return;

        var interactor = currentInteractors.Peek();
        isMoving = true;

        BroadcastEnterEvent(interactor);

        if (interactor.GetComponent<PlayerController>())
        {
            interactor.transform.DOMove(stairsController.StartPoint().transform.position, 0.3f)
                .SetEase(Ease.Linear)
                .OnComplete(() => { isMoving = false; });
            var direction = (stairsController.transform.position - interactor.transform.position).normalized;
            direction.y = 0f;

            Quaternion targetRot = Quaternion.LookRotation(direction, Vector3.up);
            interactor.transform.DORotateQuaternion(targetRot, 0.3f);
        }
        else
        {
            isMoving = false;
        }
    }

    // Broadcasts Event When Interactor Enters The Stairs
    private void BroadcastEnterEvent(GameObject interactor)
    {
        if (interactor.TryGetComponent<PlayerStateMachine>(out var player))
        {
            EventManager.Broadcast(
                GameEvent.OnPlayerChangeState,
                player.playerController._PlayerBaggage().BaggageCount() > 0
                    ? PlayerStateType.CarryingOnStair
                    : PlayerStateType.IdleOnStair);

            if (TutorialManager.Instance.GetCurrentTarget() == arrowObject && arrowObject != null)
                EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);
        }
    }

    // Called When A Step Is Recycled
    private void OnStepRecycled(Transform recycledStep)
    {
        if (!isMoving &&
            recycledStep == stairsController.Steps()[0].transform &&
            currentInteractors.Count > 0)
        {
            var interactor = currentInteractors.Dequeue();
            interactor.transform.SetParent(recycledStep);
            interactor.transform.localPosition = Vector3.zero;

            BroadcastEnterEvent(interactor);

            StartNextInteractor();
        }
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnStepRecycled, (Action<Transform>)OnStepRecycled);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnStepRecycled, (Action<Transform>)OnStepRecycled);
    }
}