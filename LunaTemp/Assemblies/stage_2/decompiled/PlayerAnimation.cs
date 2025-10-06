using UnityEngine;

public class PlayerAnimation : MonoBehaviour
{
	[SerializeField]
	private Animator _playerAnimator;

	private static readonly int IsWalking = Animator.StringToHash("isWalking");

	private static readonly int IsCarrying = Animator.StringToHash("isCarrying");

	private void Awake()
	{
		_playerAnimator = GetComponentInChildren<Animator>();
	}

	private void OnSetPlayerAnimation(bool isWalking, bool isCarrying)
	{
		_playerAnimator.SetBool(IsWalking, isWalking);
		_playerAnimator.SetBool(IsCarrying, isCarrying);
	}

	private void OnEnable()
	{
		EventManager.AddHandler<bool, bool>(GameEvent.OnSetPlayerAnimation, OnSetPlayerAnimation);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler<bool, bool>(GameEvent.OnSetPlayerAnimation, OnSetPlayerAnimation);
	}
}
