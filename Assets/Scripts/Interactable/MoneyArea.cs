using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;
using Random = UnityEngine.Random;

public class MoneyArea : InteractableBase
{
    [SerializeField] private List<Transform> slotPoints; // Points where money objects will land
    [SerializeField] private float jumpPower = 1f;
    [SerializeField] private float jumpDuration = 0.5f;
    [SerializeField] private float layerHeight = 0.5f;
    [SerializeField] private Vector3 newMoneyScale = new Vector3(1.75f, 6f, 1.75f);

    [Title("Tutorial")] [SerializeField] private int collectedMoneyCount = 0;
    [SerializeField] private int maxMoneyCount = 12;


    private List<GameObject> activeMoney = new List<GameObject>();
    private int currentIndex = 0;

    public override void InteractEnter(GameObject interactor)
    {
        base.InteractEnter(interactor);

        if (activeMoney.Count == 0) return;

        var player = interactor.transform;

        var center = transform.position;

        foreach (var money in activeMoney)
        {
            if (money == null) continue;

            // Calculate outward direction for a small pop-out effect
            var dir = (money.transform.position - center).normalized;
            var outwardPos = money.transform.position + dir;

            money.transform
                .DOMove(outwardPos, 0.3f)
                .OnComplete(() =>
                {
                    money.transform.SetParent(player, true);

                    money.transform
                        .DOLocalJump(Vector3.zero, 2.5f, 1, 0.5f)
                        .SetEase(Ease.OutQuad)
                        .OnComplete(() =>
                        {
                            var moneyComp = money.GetComponent<Money>();
                            if (moneyComp != null)
                            {
                                GameManager.Instance.GetData().TotalMoney += moneyComp.Value;
                                EventManager.Broadcast(GameEvent.OnUpdateMoney);
                            }

                            Factory.ReleaseMoney(moneyComp);
                        });
                });
            collectedMoneyCount++;
        }

        SFXManager.Instance.Play(SFXType.MoneyCollect, 0f);
        
        // Clear all active money
        activeMoney.Clear();
        
        // Trigger tutorial progress when all money has been collected
        if (collectedMoneyCount == maxMoneyCount)
            EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);
        
        currentIndex = 0;
    }

    public override void InteractStay(GameObject interactor)
    {
    }

    private void OnCustomerBoard(CustomerController customer)
    {
        // Each customer spawns two money
        for (int i = 0; i < 2; i++)
        {
            var slotIndex = currentIndex % slotPoints.Count;
            var layer = currentIndex / slotPoints.Count;
            currentIndex++;

            var slot = slotPoints[slotIndex];

            // Spawn a new money object at the customer's position
            var money = Factory.CreateMoney(customer.transform.position);
            
            money.transform.localScale = Vector3.Scale(money.transform.localScale, newMoneyScale);
            money.transform.SetParent(transform, true);

            var targetLocalPos = slot.localPosition + Vector3.up * (layer * layerHeight);

            var seq = DOTween.Sequence();

            seq.Join(money.transform.DOLocalJump(targetLocalPos, jumpPower, 1, jumpDuration)
                .SetEase(Ease.OutQuad));

            seq.Join(money.transform.DOLocalRotate(slot.rotation.eulerAngles, jumpDuration));

            activeMoney.Add(money.gameObject);
        }
    }

    private void OnEnable()
    {
        EventManager.AddHandler<Action<CustomerController>>(GameEvent.OnCustomerBoard, OnCustomerBoard);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler<Action<CustomerController>>(GameEvent.OnCustomerBoard, OnCustomerBoard);
    }
}