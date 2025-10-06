using UnityEngine;

public class CustomerAnimation : MonoBehaviour
{
	[SerializeField]
	private Animator _customerAnimator;

	private static readonly int IsWalking = Animator.StringToHash("isWalking");

	private static readonly int IsCarrying = Animator.StringToHash("isCarrying");

	private void Awake()
	{
		_customerAnimator = GetComponentInChildren<Animator>();
	}

	private void OnSetCustomerAnimation(GameObject target, bool isWalking, bool isCarrying)
	{
		if (!(target != base.gameObject))
		{
			_customerAnimator.SetBool(IsWalking, isWalking);
			_customerAnimator.SetBool(IsCarrying, isCarrying);
		}
	}

	private void OnEnable()
	{
		EventManager.AddHandler<GameObject, bool, bool>(GameEvent.OnSetCustomerAnimation, OnSetCustomerAnimation);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler<GameObject, bool, bool>(GameEvent.OnSetCustomerAnimation, OnSetCustomerAnimation);
	}
}
