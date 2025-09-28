using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;

public class LevelElementsActivator : MonoBehaviour, IInteractable
{
    [Header("Fill Settings")] [SerializeField]
    private Image fillImage;

    [SerializeField] private float fillPerSecond = 0.8f;

    [Header("Open Sequence (DOTween)")] 
    [SerializeField] private List<Transform> targets;

    [SerializeField] private float eachScaleDuration = 0.25f;
    [SerializeField] private float betweenDelay = 0.07f;
    [SerializeField] private bool setTargetsScaleZeroOnStart = true;

    private bool sequenceStarted;

    private void Awake()
    {
        if (fillImage != null) fillImage.fillAmount = 0f;

        foreach (var t in targets.Where(t => t != null))
        {
            if (setTargetsScaleZeroOnStart) t.localScale = Vector3.zero;
        }
    }

    private IEnumerator OpenSequence()
    {
        foreach (var t in targets.Where(t => t != null))
        {
            t.DOScale(Vector3.one, eachScaleDuration).SetEase(Ease.OutBack);

            yield return new WaitForSeconds(betweenDelay);
        }
    }

    public void InteractEnter(GameObject interactor)
    {
    }

    public void InteractStay(GameObject interactor)
    {
        if (sequenceStarted || fillImage == null) return;

        fillImage.fillAmount += fillPerSecond * Time.deltaTime;
        if (!(fillImage.fillAmount >= 1f)) return;

        fillImage.fillAmount = 1f;
        StartCoroutine(OpenSequence());
        transform.DOScale(Vector3.zero, 1f).SetEase(Ease.InBack)
            .OnComplete(() => gameObject.SetActive(false));
        sequenceStarted = true;
    }

    public void InteractExit(GameObject interactor)
    {
        fillImage.DOFillAmount(0f, fillImage.fillAmount / fillPerSecond);
    }
}