using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class PlayerBaggage : MonoBehaviour
{
	[Header("Baggage Stack")]
	[SerializeField]
	private Transform playerHandPoint;

	[SerializeField]
	private List<Baggage> baggageStack = new List<Baggage>();

	[SerializeField]
	private Vector3 additionalRotation = Vector3.zero;

	[Header("Baggage Movement")]
	[SerializeField]
	private float baseMoveOffset = 0.05f;

	[SerializeField]
	private float moveDuration = 0.15f;

	private PlayerController playerController;

	private bool wasMoving;

	public int BaggageCount => baggageStack.Count;

	private void Start()
	{
		playerController = GetComponent<PlayerController>();
	}

	private void Update()
	{
		if (baggageStack.Count != 0)
		{
			bool isMoving = playerController.HasMovementInput();
			if (isMoving && !wasMoving)
			{
				OnStartMoving();
			}
			else if (!isMoving && wasMoving)
			{
				OnStopMoving();
			}
			wasMoving = isMoving;
		}
	}

	private void OnStartMoving()
	{
		Vector3 moveDirWorld = -playerController.transform.forward;
		Vector3 moveDirLocal = playerHandPoint.InverseTransformDirection(moveDirWorld);
		int count = baggageStack.Count;
		for (int i = 0; i < count; i++)
		{
			Baggage baggage = baggageStack[i];
			if (!(baggage == null))
			{
				float t = (float)(i + 1) / (float)count;
				float strength = baseMoveOffset * Mathf.Pow(t, 2f);
				Vector3 restPos = Vector3.up * ((float)i * baggage.GetStackOffsetY());
				Vector3 targetLocalPos = restPos + moveDirLocal * strength;
				baggage.transform.DOKill();
				baggage.transform.DOLocalMove(targetLocalPos, moveDuration).SetEase(Ease.InCubic);
			}
		}
	}

	private void OnStopMoving()
	{
		for (int i = 0; i < baggageStack.Count; i++)
		{
			Baggage baggage = baggageStack[i];
			if (!(baggage == null))
			{
				Vector3 restPos = Vector3.up * ((float)i * baggage.GetStackOffsetY());
				baggage.transform.DOKill();
				baggage.transform.DOLocalMove(restPos, moveDuration).SetEase(Ease.OutQuad);
			}
		}
	}

	public void AddBaggage(Baggage baggage)
	{
		if (!(baggage == null))
		{
			baggageStack.Add(baggage);
			if (baggageStack.Count == 1)
			{
				EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.CarryingIdle);
			}
			Vector3 targetLocalPos = Vector3.up * (baggageStack.Count - 1) * baggage.GetStackOffsetY();
			baggage.JumpTo(playerHandPoint, targetLocalPos, additionalRotation);
			SingletonManager<SFXManager>.Instance.Play(SFXType.ImpactPop, 0.1f);
		}
	}

	public Baggage RemoveTopBaggage()
	{
		if (baggageStack.Count == 0)
		{
			return null;
		}
		List<Baggage> list = baggageStack;
		Baggage top = list[list.Count - 1];
		baggageStack.RemoveAt(baggageStack.Count - 1);
		if (baggageStack.Count == 0)
		{
			EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);
		}
		return top;
	}
}
