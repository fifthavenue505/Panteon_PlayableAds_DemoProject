using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class UIManager : SingletonManager<UIManager>
{
    [SerializeField] private TextMeshProUGUI moneyText;

    private void Start()
    {
        OnUpdateMoneyText();
    }

    private void OnUpdateMoneyText()
    {
        moneyText.text = GameManager.Instance.Data.TotalMoney.ToString();
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnUpdateMoneyText, (Action)OnUpdateMoneyText);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnUpdateMoneyText, (Action)OnUpdateMoneyText);
    }
}
