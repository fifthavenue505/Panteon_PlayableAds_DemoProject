using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using Sirenix.OdinInspector;
using TMPro;

public class LevelElementsActivator : MonoBehaviour, IInteractable
{
    [Title("Fill Settings")]
    [SerializeField] private Image fillImage;
    [SerializeField] private float fillPerSecond = 0.8f;

    [Title("Open Sequence")]
    [SerializeField] private List<Transform> targets;
    [SerializeField] private float eachScaleDuration = 0.25f;
    [SerializeField] private float betweenDelay = 0.07f;
    
    [Title("Money Settings")]
    [SerializeField] private float moneyValue = 50;
    [SerializeField] private TextMeshProUGUI moneyValueText;
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
        yield return new WaitForSeconds(1.5f);
        EventManager.Broadcast(GameEvent.OnLevelElementsActivated);
    }

    public void InteractEnter(GameObject interactor)
    {
    }

    public void InteractStay(GameObject interactor)
    {
        if (GameManager.Instance.Data.TotalMoney == 0) return;
            if (sequenceStarted || fillImage == null)
                return;

        fillImage.fillAmount += fillPerSecond * Time.deltaTime;

        moneyValue = Mathf.CeilToInt((1 - fillImage.fillAmount) * 50);
        moneyValueText.text = moneyValue.ToString("0");

        GameManager.Instance.Data.TotalMoney = moneyValue;

        if (moneyValue % 5 == 0)
            interactor.GetComponent<PlayerMoneyController>()?.SpawnMoney(transform);

        if (!(fillImage.fillAmount >= 1f)) return;

        fillImage.fillAmount = 1f;
        moneyValue = 0;
        moneyValueText.text = "0";
        sequenceStarted = true;

        StartCoroutine(OpenSequence());
        transform.DOScale(Vector3.zero, 1f).SetEase(Ease.InBack);
    }

    public void InteractExit(GameObject interactor)
    {
    }
}