using DG.Tweening;
using UnityEngine;

public class BaggageLift : MonoBehaviour
{
	[SerializeField]
	private Transform baggagePoint;

	[SerializeField]
	private Transform topPoint;

	private Vector3 startPos;

	[SerializeField]
	private TruckController truck;

	[SerializeField]
	private float liftDuration = 1.5f;

	[SerializeField]
	private Vector3 additionalRotation;

	private bool isBusy = false;

	public bool IsBusy => isBusy;

	private void Start()
	{
		startPos = base.transform.position;
	}

	public void TakeBaggage(Baggage baggage)
	{
		baggage.SetParticlePlay(true);
		baggage.transform.SetParent(baggagePoint);
		baggage.transform.DOLocalRotate(Vector3.zero + additionalRotation, 0.3f);
		baggage.transform.DOPunchScale(base.transform.localScale * 0.2f, 0.3f);
		baggage.transform.DOJump(baggagePoint.position, 2f, 1, 0.3f).OnComplete(delegate
		{
			baggage.SetParticlePlay(true);
			base.transform.DOMove(topPoint.position, liftDuration).SetEase(Ease.InOutCubic).OnComplete(delegate
			{
				truck.AddBaggage(baggage);
				base.transform.DOMove(startPos, liftDuration).SetEase(Ease.InOutCubic).OnComplete(delegate
				{
					isBusy = false;
				});
			});
		});
	}

	public void SetBusy(bool value)
	{
		isBusy = value;
	}
}
