using DG.Tweening;
using TMPro;
using UnityEngine;

public class Plane : MonoBehaviour
{
	[SerializeField]
	private int maxCustomerCapacity = 6;

	[SerializeField]
	private int currentCustomerCount = 0;

	[SerializeField]
	private TextMeshProUGUI customerText;

	[SerializeField]
	private Transform backTarget;

	[SerializeField]
	private Transform forwardTarget;

	[SerializeField]
	private ParticleSystem smokeEffect;

	[SerializeField]
	private bool isReady;

	[Header("Settings")]
	[SerializeField]
	private float backDuration = 1.2f;

	[SerializeField]
	private float rotateDuration = 0.5f;

	[SerializeField]
	private float forwardDuration = 2f;

	private Sequence seq;

	private void OnCustomerEnterPlane()
	{
		currentCustomerCount++;
		customerText.text = currentCustomerCount + "/" + maxCustomerCapacity;
		smokeEffect.Play();
		base.transform.DOPunchScale(base.transform.localScale * 0.1f, 0.2f);
		if (currentCustomerCount >= maxCustomerCapacity)
		{
			if (isReady)
			{
				EventManager.Broadcast(GameEvent.OnMovePlane);
			}
			else
			{
				isReady = true;
			}
		}
	}

	private void OnMovePlane()
	{
		if (seq != null && seq.IsActive())
		{
			seq.Kill();
		}
		seq = DOTween.Sequence();
		seq.Append(base.transform.DOMove(backTarget.position, backDuration).SetEase(Ease.InOutCubic));
		Vector3 rot = base.transform.eulerAngles + new Vector3(0f, -90f, 0f);
		seq.Join(base.transform.DORotate(rot, rotateDuration).SetEase(Ease.InOutCubic));
		seq.Join(customerText.transform.DOScale(Vector3.zero, 0.2f).SetEase(Ease.InExpo).SetDelay(0.5f));
		seq.Append(base.transform.DOMove(forwardTarget.position, forwardDuration).SetEase(Ease.InCubic));
	}

	private void OnTruckArrive()
	{
		if (isReady)
		{
			EventManager.Broadcast(GameEvent.OnMovePlane);
		}
		else
		{
			isReady = true;
		}
	}

	private void OnEnable()
	{
		EventManager.AddHandler(GameEvent.OnCustomerEnterPlane, OnCustomerEnterPlane);
		EventManager.AddHandler(GameEvent.OnMovePlane, OnMovePlane);
		EventManager.AddHandler(GameEvent.OnTruckArrive, OnTruckArrive);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler(GameEvent.OnCustomerEnterPlane, OnCustomerEnterPlane);
		EventManager.RemoveHandler(GameEvent.OnMovePlane, OnMovePlane);
		EventManager.RemoveHandler(GameEvent.OnTruckArrive, OnTruckArrive);
	}
}
