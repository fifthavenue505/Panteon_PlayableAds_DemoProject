using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TutorialManager : SingletonManager<TutorialManager>
{
    [Serializable]
    public struct TutorialStep
    {
        public Transform target;
        public Transform posTarget;
        public bool shouldHighlight;
    }

    [Header("Tutorial Settings")] [SerializeField]
    private List<TutorialStep> steps = new List<TutorialStep>();

    [SerializeField] private Transform playerArrow;
    [SerializeField] private GameObject currentTarget;
    [SerializeField] private Color highlightColor = Color.green;
    [SerializeField] private float highlightScale = 1.2f;
    [SerializeField] private float tweenDuration = 0.35f;

    [SerializeField] private int currentIndex = -1;
    [SerializeField] private bool tutorialActive;

    private Vector3 originalScale;
    private Color originalColor;
    private SpriteRenderer currentImage;

    // Enables or disables the player guidance arrow
    public void SetPlayerArrow(bool state)
    {
        playerArrow.gameObject.SetActive(state);
    }

    public GameObject GetCurrentTarget()
    {
        return currentTarget;
    }
    
    public bool GetTutorialActive()
    {
        return tutorialActive;
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnTutorialStepCompleted, (Action)OnTutorialStepCompleted);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnTutorialStepCompleted, (Action)OnTutorialStepCompleted);
    }

    private void Start()
    {
        MoveToNextStep();
    }

    // Rotates the arrow to current target
    private void Update()
    {
        if (!tutorialActive || currentIndex < 0 || currentIndex >= steps.Count)
            return;

        var step = steps[currentIndex];
        if (playerArrow == null) return;

        var targetTransform = step.posTarget != null ? step.posTarget : step.target;
        if (targetTransform == null) return;

        Vector3 dir = targetTransform.position - playerArrow.position;
        dir.y = 0f;

        if (dir.sqrMagnitude > 0.0001f)
            playerArrow.forward = dir.normalized;
    }

    // Advances to the next tutorial
    private void MoveToNextStep()
    {
        if (currentIndex >= 0 && currentIndex < steps.Count)
            ResetCurrentVisual();

        currentIndex++;

        if (currentIndex >= steps.Count)
        {
            tutorialActive = false;
            playerArrow.gameObject.SetActive(false);
            playerArrow.DOScale(Vector3.zero, 1f).SetEase(Ease.InBack);
            steps[^1].target?.DOScale(Vector3.zero, 1f).SetEase(Ease.InBack);
            return;
        }

        ApplyCurrentVisual();
        tutorialActive = true;
    }

    // Applies highlight and scale effects
    private void ApplyCurrentVisual()
    {
        var step = steps[currentIndex];
        if (step.target == null) return;

        step.target.DOKill();

        originalScale = step.target.localScale;
        currentTarget = step.target.gameObject;

        currentImage = step.target.GetComponent<SpriteRenderer>();
        if (currentImage != null)
        {
            currentImage.DOKill();
            originalColor = currentImage.color;
        }

        // Apply visual highlighting effects
        if (step.shouldHighlight)
        {
            step.target.DOScale(originalScale * highlightScale, tweenDuration)
                .SetEase(Ease.OutQuad);

            if (currentImage != null)
                currentImage.DOColor(highlightColor, tweenDuration)
                    .SetEase(Ease.OutQuad);
        }
    }

    // Resets the previous step
    private void ResetCurrentVisual()
    {
        var prevStep = steps[currentIndex];
        if (prevStep.target == null) return;

        prevStep.target.DOKill();
        if (currentImage != null)
            currentImage.DOKill();

        if (prevStep.shouldHighlight)
        {
            prevStep.target.DOScale(originalScale, tweenDuration)
                .SetEase(Ease.OutQuad);

            if (currentImage != null)
                currentImage.DOColor(originalColor, tweenDuration)
                    .SetEase(Ease.OutQuad);
        }
    }

    // Called when a tutorial step is completed
    private void OnTutorialStepCompleted()
    {
        playerArrow.gameObject.SetActive(true);
        MoveToNextStep();
    }
}