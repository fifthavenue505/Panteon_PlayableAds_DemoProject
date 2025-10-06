using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ElementsActivator : InteractableBase
{
	private GameManager gameManager;

	private SFXManager sfxManager;

	[Header("Fill Settings")]
	[SerializeField]
	private Image iconImage;

	[SerializeField]
	private Image fillImage;

	[SerializeField]
	private Image moneyImage;

	[SerializeField]
	private GameObject arrowMark;

	[SerializeField]
	private bool isReady;

	[Header("Open Sequence")]
	[SerializeField]
	private List<Transform> targets;

	[SerializeField]
	private float eachScaleDuration = 0.25f;

	[SerializeField]
	private float betweenDelay = 0.07f;

	private bool sequenceStarted;

	[Header("Money Settings")]
	[SerializeField]
	private int cost = 50;

	[SerializeField]
	private float payPerSecond = 10f;

	[SerializeField]
	private Collider interactCollider;

	[SerializeField]
	private int moneyValue;

	[SerializeField]
	private TextMeshProUGUI moneyValueText;

	[SerializeField]
	private bool setTargetsScaleZeroOnStart = true;

	[Header("Type")]
	[SerializeField]
	private ElementsActivatorType activatorType;

	[Header("Colors")]
	[SerializeField]
	private Color enabledColor = Color.white;

	[SerializeField]
	private Color disabledColor = new Color(1f, 1f, 1f, 0.4f);

	[SerializeField]
	private Transform playerMovePos;

	private void Awake()
	{
		gameManager = SingletonManager<GameManager>.Instance;
		sfxManager = SingletonManager<SFXManager>.Instance;
		if (fillImage != null)
		{
			fillImage.fillAmount = 0f;
		}
		moneyValue = cost;
		if (moneyValueText != null)
		{
			moneyValueText.text = moneyValue.ToString("0");
		}
		if (!setTargetsScaleZeroOnStart)
		{
			return;
		}
		foreach (Transform t in targets)
		{
			if (t != null)
			{
				t.localScale = Vector3.zero;
			}
		}
	}

	private void Start()
	{
		if (activatorType == ElementsActivatorType.Board)
		{
			ApplyState(false);
		}
	}

	public override void InteractStay(GameObject interactor)
	{
		if (gameManager.GetData().TotalMoney <= 0f || sequenceStarted || fillImage == null)
		{
			return;
		}
		int decrease = Mathf.CeilToInt(payPerSecond * Time.deltaTime);
		int actualDecrease = (int)Mathf.Min(decrease, gameManager.GetData().TotalMoney, moneyValue);
		gameManager.GetData().TotalMoney -= actualDecrease;
		moneyValue -= actualDecrease;
		if (moneyValueText != null)
		{
			moneyValueText.text = moneyValue.ToString("0");
		}
		fillImage.fillAmount = 1f - (float)moneyValue / (float)cost;
		if (actualDecrease > 0 && moneyValue % 10 == 0)
		{
			interactor.GetComponent<PlayerMoney>()?.SpawnMoney(base.transform);
		}
		EventManager.Broadcast(GameEvent.OnUpdateMoney);
		if (!sfxManager.IsAudioSourcePlaying())
		{
			sfxManager.Play(SFXType.MoneyThrow);
		}
		if (moneyValue <= 0)
		{
			moneyValue = 0;
			if (moneyValueText != null)
			{
				moneyValueText.text = "0";
			}
			sequenceStarted = true;
			StartCoroutine(OpenSequence(interactor));
			base.transform.DOScale(Vector3.zero, 1f).SetEase(Ease.InBack);
		}
	}

	public override void InteractExit(GameObject interactor)
	{
		base.InteractExit(interactor);
		if (sfxManager.IsAudioSourcePlaying())
		{
			sfxManager.Stop();
		}
	}

	private IEnumerator OpenSequence(GameObject interactor)
	{
		EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Waiting);
		switch (activatorType)
		{
		case ElementsActivatorType.Environment:
			EventManager.Broadcast(GameEvent.OnBringInCustomers);
			break;
		case ElementsActivatorType.Board:
		{
			EventManager.Broadcast(GameEvent.OnBoardActivated);
			interactor.transform.DOMove(playerMovePos.position, 1f).SetEase(Ease.Linear);
			Vector3 targetDir = targets[0].position - interactor.transform.position;
			targetDir.y = 0f;
			if (targetDir != Vector3.zero)
			{
				Quaternion targetRot = Quaternion.LookRotation(targetDir, Vector3.up);
				interactor.transform.DORotateQuaternion(targetRot, 1f).SetEase(Ease.Linear);
			}
			break;
		}
		}
		foreach (Transform t in targets)
		{
			if (!(t == null))
			{
				t.DOScale(Vector3.one, eachScaleDuration).SetEase(Ease.OutBack);
				yield return new WaitForSeconds(betweenDelay);
			}
		}
		EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);
		yield return new WaitForSeconds(1.5f);
		switch (activatorType)
		{
		case ElementsActivatorType.Environment:
			EventManager.Broadcast(GameEvent.OnEnvironmentElementsActivated);
			EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);
			break;
		}
	}

	private void OnMovePlane()
	{
		if (activatorType == ElementsActivatorType.Board && gameManager.GetData().TotalMoney >= (float)moneyValue)
		{
			ApplyState(true);
		}
		isReady = true;
	}

	private void OnUpdateMoney()
	{
		if (activatorType != ElementsActivatorType.Board)
		{
			bool hasEnough2 = gameManager.GetData().TotalMoney >= (float)moneyValue;
			ApplyState(hasEnough2);
		}
		else if (isReady)
		{
			bool hasEnough = gameManager.GetData().TotalMoney >= (float)moneyValue;
			ApplyState(hasEnough);
		}
	}

	private void ApplyState(bool enabled)
	{
		Color color = (enabled ? enabledColor : disabledColor);
		SetUIColor(iconImage, color);
		SetUIColor(moneyImage, color);
		SetTextColor(moneyValueText, color);
		SetGameObjectEnabled(arrowMark, enabled);
		interactCollider.enabled = enabled;
	}

	private void SetUIColor(Image image, Color color)
	{
		if (image != null)
		{
			image.DOKill();
			image.DOColor(color, 0.5f);
		}
	}

	private void SetTextColor(TMP_Text text, Color color)
	{
		if (text != null)
		{
			text.DOKill();
			text.DOColor(color, 0.5f);
		}
	}

	private void SetGameObjectEnabled(GameObject target, bool state)
	{
		if (target != null)
		{
			target.SetActive(state);
		}
	}

	private void OnEnable()
	{
		EventManager.AddHandler(GameEvent.OnUpdateMoney, OnUpdateMoney);
		EventManager.AddHandler(GameEvent.OnMovePlane, OnMovePlane);
	}

	private void OnDisable()
	{
		EventManager.RemoveHandler(GameEvent.OnUpdateMoney, OnUpdateMoney);
		EventManager.RemoveHandler(GameEvent.OnMovePlane, OnMovePlane);
	}
}
