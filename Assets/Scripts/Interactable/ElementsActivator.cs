using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using TMPro;

enum ElementsActivatorType
{
    Environment,
    Board,
}

public class ElementsActivator : InteractableBase
{
    private GameManager gameManager;
    private SFXManager sfxManager;

    [Header("Fill Settings")] 
    [SerializeField] private Image iconImage;
    [SerializeField] private Image fillImage;
    [SerializeField] private Image moneyImage;
    [SerializeField] private GameObject arrowMark;
    [SerializeField] private bool isReady;
    
    [Header("Open Sequence")] 
    [SerializeField] private List<Transform> targets;
    [SerializeField] private float eachScaleDuration = 0.25f;
    [SerializeField] private float betweenDelay = 0.07f;
    private bool sequenceStarted;

    [Header("Money Settings")] 
    [SerializeField] private int cost = 50;
    [SerializeField] private float payPerSecond = 10f;
    [SerializeField] private Collider interactCollider;
    [SerializeField] private int moneyValue;
    [SerializeField] private TextMeshProUGUI moneyValueText;
    [SerializeField] private bool setTargetsScaleZeroOnStart = true;

    [Header("Type")] 
    [SerializeField] private ElementsActivatorType activatorType;

    [Header("Colors")] 
    [SerializeField] private Color enabledColor = Color.white;
    [SerializeField] private Color disabledColor = new Color(1f, 1f, 1f, 0.4f);
    [SerializeField] private Transform playerMovePos;

    private void Awake()
    {
        gameManager = GameManager.Instance;
        sfxManager= SFXManager.Instance;

        if (fillImage != null)
            fillImage.fillAmount = 0f;

        moneyValue = cost;
        if (moneyValueText != null)
            moneyValueText.text = moneyValue.ToString("0");

        // Optionally hide all target objects
        if (setTargetsScaleZeroOnStart)
        {
            foreach (var t in targets)
            {
                if (t != null)
                    t.localScale = Vector3.zero;
            }
        }
    }

    private void Start()
    {
        // If this activator controls the boarding area, disable it at the start
        if (activatorType == ElementsActivatorType.Board)
        {
            ApplyState(false);
        }
    }
    

    public override void InteractStay(GameObject interactor)
    {
        if (gameManager.GetData().TotalMoney <= 0) return;
        if (sequenceStarted || fillImage == null) return;

        // Calculate how much money
        int decrease = Mathf.CeilToInt(payPerSecond * Time.deltaTime);
        int actualDecrease = (int)Mathf.Min(decrease, gameManager.GetData().TotalMoney, moneyValue);

        gameManager.GetData().TotalMoney -= actualDecrease;
        moneyValue -= actualDecrease;

        // Update UI text and progress bar
        if (moneyValueText != null)
            moneyValueText.text = moneyValue.ToString("0");

        fillImage.fillAmount = 1f - (moneyValue / (float)cost);

        if (actualDecrease > 0 && moneyValue % 10 == 0)
            interactor.GetComponent<PlayerMoney>()?.SpawnMoney(transform);

        EventManager.Broadcast(GameEvent.OnUpdateMoney);
        
        // Play money sound
        if(!sfxManager.IsAudioSourcePlaying())
            sfxManager.Play(SFXType.MoneyThrow);

        // If payment is complete, start the activation
        if (moneyValue <= 0)
        {
            moneyValue = 0;
            if (moneyValueText != null)
                moneyValueText.text = "0";
            sequenceStarted = true;

            StartCoroutine(OpenSequence(interactor));
            transform.DOScale(Vector3.zero, 1f).SetEase(Ease.InBack);
        }
    }

    public override void InteractExit(GameObject interactor)
    {
        base.InteractExit(interactor);
        if(sfxManager.IsAudioSourcePlaying())
            sfxManager.Stop();
    }

    // Plays the activation sequence
    private IEnumerator OpenSequence(GameObject interactor)
    {
        EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Waiting);
        
         // Choose the behavior depending on the activator type
        switch (activatorType)
        {
            case ElementsActivatorType.Environment:
                EventManager.Broadcast(GameEvent.OnBringInCustomers);
                break;
            case ElementsActivatorType.Board:
                EventManager.Broadcast(GameEvent.OnBoardActivated);
                interactor.transform.DOMove(playerMovePos.position, 1f).SetEase(Ease.Linear);
                var targetDir = targets[0].position - interactor.transform.position;
                targetDir.y = 0f;

                if (targetDir != Vector3.zero)
                {
                    Quaternion targetRot = Quaternion.LookRotation(targetDir, Vector3.up);
                    interactor.transform
                        .DORotateQuaternion(targetRot, 1f)
                        .SetEase(Ease.Linear);
                }
                break;
        }

        // Animate each target appearing one by one
        foreach (var t in targets)
        {
            if (t == null) continue;

            t.DOScale(Vector3.one, eachScaleDuration).SetEase(Ease.OutBack);
            yield return new WaitForSeconds(betweenDelay);
        }

        EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);

        yield return new WaitForSeconds(1.5f);
        switch (activatorType)
        {
            case ElementsActivatorType.Environment:
                EventManager.Broadcast(GameEvent.OnEnvironmentElementsActivated);
                EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);
                break;

            case ElementsActivatorType.Board:
                break;
        }
        
    }

    private void OnMovePlane()
    {
        if (activatorType == ElementsActivatorType.Board && gameManager.GetData().TotalMoney >= moneyValue)
        {
            ApplyState(true);
        }

        isReady = true;
    }

    // Called whenever the player's total money changes
    private void OnUpdateMoney()
    {
        if (activatorType != ElementsActivatorType.Board)
        {
            var hasEnough = gameManager.GetData().TotalMoney >= moneyValue;

            ApplyState(hasEnough);
        }
        else if (isReady)
        {
            var hasEnough = gameManager.GetData().TotalMoney >= moneyValue;

            ApplyState(hasEnough);
        }
    }

    // Updates the visual and collider states of the activator
    private void ApplyState(bool enabled)
    {
        Color color = enabled ? enabledColor : disabledColor;

        SetUIColor(iconImage, color);
        SetUIColor(moneyImage, color);
        SetTextColor(moneyValueText, color);
        SetGameObjectEnabled(arrowMark, enabled);

        interactCollider.enabled = enabled;
    }

    // Smoothly updates the color of image
    private void SetUIColor(Image image, Color color)
    {
        if (image != null)
        {
            image.DOKill();
            image.DOColor(color, 0.5f);
        }
    }

    // Smoothly updates the color of text
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
        if (target != null) target.SetActive(state);
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnUpdateMoney, (Action)OnUpdateMoney);
        EventManager.AddHandler(GameEvent.OnMovePlane, (Action)OnMovePlane);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnUpdateMoney, (Action)OnUpdateMoney);
        EventManager.RemoveHandler(GameEvent.OnMovePlane, (Action)OnMovePlane);
    }
}