using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class MoneyArea : InteractableBase
{
	[SerializeField]
	private List<Transform> slotPoints;

	[SerializeField]
	private float jumpPower = 1f;

	[SerializeField]
	private float jumpDuration = 0.5f;

	[SerializeField]
	private float layerHeight = 0.5f;

	[SerializeField]
	private Vector3 newMoneyScale = new Vector3(1.75f, 6f, 1.75f);

	[Header("Tutorial")]
	[SerializeField]
	private int collectedMoneyCount = 0;

	[SerializeField]
	private int maxMoneyCount = 12;

	private List<GameObject> activeMoney = new List<GameObject>();

	private int currentIndex = 0;

	public override void InteractEnter(GameObject interactor)
	{
		base.InteractEnter(interactor);
		if (activeMoney.Count == 0)
		{
			return;
		}
		Transform player = interactor.transform;
		Vector3 center = base.transform.position;
		foreach (GameObject money in activeMoney)
		{
			if (money == null)
			{
				continue;
			}
			Vector3 dir = (money.transform.position - center).normalized;
			Vector3 outwardPos = money.transform.position + dir;
			money.transform.DOMove(outwardPos, 0.3f).OnComplete(delegate
			{
				money.transform.SetParent(player, true);
				money.transform.DOLocalJump(Vector3.zero, 2.5f, 1, 0.5f).SetEase(Ease.OutQuad).OnComplete(delegate
				{
					Money component = money.GetComponent<Money>();
					if (component != null)
					{
						SingletonManager<GameManager>.Instance.GetData().TotalMoney += component.Value;
						EventManager.Broadcast(GameEvent.OnUpdateMoney);
					}
					Factory.ReleaseMoney(component);
				});
			});
			collectedMoneyCount++;
		}
		SingletonManager<SFXManager>.Instance.Play(SFXType.MoneyCollect);
		activeMoney.Clear();
		if (collectedMoneyCount == maxMoneyCount)
		{
			EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);
		}
		currentIndex = 0;
	}

	public override void InteractStay(GameObject interactor)
	{
	}

	private void OnCustomerBoard(CustomerController customer)
	{
		for (int i = 0; i < 2; i++)
		{
			int slotIndex = currentIndex % slotPoints.Count;
			int layer = currentIndex / slotPoints.Count;
			currentIndex++;
			Transform slot = slotPoints[slotIndex];
			Money money = Factory.CreateMoney(customer.transform.position);
			money.transform.localScale = Vector3.Scale(money.transform.localScale, newMoneyScale);
			money.transform.SetParent(base.transform, true);
			Vector3 targetLocalPos = slot.localPosition + Vector3.up * ((float)layer * layerHeight);
			Sequence seq = DOTween.Sequence();
			seq.Join(money.transform.DOLocalJump(targetLocalPos, jumpPower, 1, jumpDuration).SetEase(Ease.OutQuad));
			seq.Join(money.transform.DOLocalRotate(slot.rotation.eulerAngles, jumpDuration));
			activeMoney.Add(money.gameObject);
		}
	}

	private void OnEnable()
	{
		EventManager.AddHandler<CustomerController>(GameEvent.OnCustomerBoard, OnCustomerBoard);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler<CustomerController>(GameEvent.OnCustomerBoard, OnCustomerBoard);
	}
}
