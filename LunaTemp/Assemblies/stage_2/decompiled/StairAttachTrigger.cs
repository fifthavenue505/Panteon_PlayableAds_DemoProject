using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class StairAttachTrigger : InteractableBase
{
	[SerializeField]
	private StairsController stairsController;

	[SerializeField]
	private GameObject arrowObject;

	private readonly Queue<GameObject> currentInteractors = new Queue<GameObject>();

	private bool isMoving = false;

	public override void InteractEnter(GameObject interactor)
	{
		currentInteractors.Enqueue(interactor);
		if (!isMoving)
		{
			StartNextInteractor();
		}
	}

	public override void InteractStay(GameObject interactor)
	{
	}

	private void StartNextInteractor()
	{
		if (currentInteractors.Count == 0)
		{
			return;
		}
		GameObject interactor = currentInteractors.Peek();
		isMoving = true;
		BroadcastEnterEvent(interactor);
		if ((bool)interactor.GetComponent<PlayerController>())
		{
			interactor.transform.DOMove(stairsController.StartPoint.transform.position, 0.3f).SetEase(Ease.Linear).OnComplete(delegate
			{
				isMoving = false;
			});
			Vector3 direction = (stairsController.transform.position - interactor.transform.position).normalized;
			direction.y = 0f;
			Quaternion targetRot = Quaternion.LookRotation(direction, Vector3.up);
			interactor.transform.DORotateQuaternion(targetRot, 0.3f);
		}
		else
		{
			isMoving = false;
		}
	}

	private void BroadcastEnterEvent(GameObject interactor)
	{
		if (interactor.TryGetComponent<PlayerStateMachine>(out var player))
		{
			EventManager.Broadcast(GameEvent.OnPlayerChangeState, (player.playerController._PlayerBaggage.BaggageCount > 0) ? PlayerStateType.CarryingOnStair : PlayerStateType.IdleOnStair);
			if (SingletonManager<TutorialManager>.Instance.GetCurrentTarget() == arrowObject && arrowObject != null)
			{
				EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);
			}
		}
	}

	private void OnStepRecycled(Transform recycledStep)
	{
		if (!isMoving && recycledStep == stairsController.Steps[0].transform && currentInteractors.Count > 0)
		{
			GameObject interactor = currentInteractors.Dequeue();
			interactor.transform.SetParent(recycledStep);
			interactor.transform.localPosition = Vector3.zero;
			BroadcastEnterEvent(interactor);
			StartNextInteractor();
		}
	}

	private void OnEnable()
	{
		EventManager.AddHandler<Transform>(GameEvent.OnStepRecycled, OnStepRecycled);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler<Transform>(GameEvent.OnStepRecycled, OnStepRecycled);
	}
}
