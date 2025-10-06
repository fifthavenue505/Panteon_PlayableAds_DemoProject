using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class TruckController : MonoBehaviour
{
	[SerializeField]
	private Transform stackPoint;

	[SerializeField]
	private int maxCapacity = 6;

	[SerializeField]
	private Transform moveTarget;

	[SerializeField]
	private Vector3 additionalRotation = new Vector3(0f, 180f, 0f);

	private Vector3 startPos;

	[SerializeField]
	private float moveDuration = 3f;

	private readonly List<Baggage> baggageList = new List<Baggage>();

	private void Start()
	{
		startPos = base.transform.position;
	}

	public void AddBaggage(Baggage baggage)
	{
		baggage.transform.SetParent(stackPoint);
		int index = baggageList.Count;
		Vector3 targetPos = Vector3.zero + Vector3.up * ((float)index * baggage.GetStackOffsetY());
		baggageList.Add(baggage);
		if (baggageList.Count >= maxCapacity)
		{
			StartCoroutine(MoveTruck());
		}
		baggage.JumpTo(stackPoint, targetPos, additionalRotation);
	}

	private IEnumerator MoveTruck()
	{
		yield return new WaitForSeconds(2f);
		base.transform.DOMove(moveTarget.position, moveDuration).SetEase(Ease.InQuad).OnComplete(delegate
		{
			foreach (Baggage current in baggageList)
			{
				Factory.ReleaseBaggage(current);
			}
			baggageList.Clear();
			EventManager.Broadcast(GameEvent.OnTruckArrive);
		});
	}

	private void OnTruckArrive()
	{
		base.transform.DOMove(startPos, moveDuration).SetEase(Ease.OutQuad);
	}

	private void OnEnable()
	{
		EventManager.AddHandler(GameEvent.OnTruckArrive, OnTruckArrive);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler(GameEvent.OnTruckArrive, OnTruckArrive);
	}
}
