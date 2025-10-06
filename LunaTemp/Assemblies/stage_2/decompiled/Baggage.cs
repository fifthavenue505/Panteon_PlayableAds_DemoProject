using DG.Tweening;
using UnityEngine;

public class Baggage : MonoBehaviour, IPoolable
{
	[Header("Data")]
	[SerializeField]
	private BaggageData data;

	[SerializeField]
	private BaggageColor _baggageColor;

	[SerializeField]
	private TrailRenderer _baggageTrail;

	public void JumpTo(Transform parent, Vector3 localOffset, Vector3 rotationOffset)
	{
		SetParticlePlay(true);
		base.transform.SetParent(parent);
		base.transform.localRotation = Quaternion.identity;
		base.transform.DOLocalJump(localOffset, data.JumpPower, 1, data.JumpDuration).OnComplete(delegate
		{
			SetParticlePlay(false);
		});
		base.transform.DOPunchScale(base.transform.localScale * 0.2f, data.JumpDuration);
		base.transform.DOLocalRotate(Vector3.zero + rotationOffset, data.JumpDuration);
	}

	public void SetParticlePlay(bool state)
	{
		_baggageTrail.enabled = state;
		_baggageTrail.Clear();
	}

	public void OnObjectSpawn()
	{
		_baggageColor.ApplyRandomColor();
	}

	public void OnObjectDespawn()
	{
	}

	public float GetStackOffsetY()
	{
		return data.StackOffsetY;
	}
}
