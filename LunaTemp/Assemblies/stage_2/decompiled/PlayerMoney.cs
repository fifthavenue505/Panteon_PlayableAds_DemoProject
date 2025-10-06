using DG.Tweening;
using UnityEngine;

public class PlayerMoney : MonoBehaviour
{
	[SerializeField]
	private float jumpDuration = 0.5f;

	public void SpawnMoney(Transform t)
	{
		Money money = Factory.CreateMoney(base.transform.position + new Vector3(0f, 1.75f, 0f));
		money.transform.SetParent(t);
		money.transform.DOPunchScale(money.transform.localScale * 1.1f, jumpDuration, 1, 0.5f);
		money.transform.DORotate(360f * Vector3.up, jumpDuration * 2f / 3f, RotateMode.FastBeyond360);
		money.transform.DOLocalJump(Vector3.zero, 0.8f, 1, jumpDuration).OnComplete(delegate
		{
			Factory.ReleaseMoney(money);
		});
	}
}
