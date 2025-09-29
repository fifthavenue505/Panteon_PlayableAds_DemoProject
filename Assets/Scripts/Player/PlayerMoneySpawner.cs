using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class PlayerMoneyController : MonoBehaviour
{
    [SerializeField] private float jumpDuration = 0.5f;

    public void SpawnMoney(Transform t)
    {
        var money = Factory.CreateMoney(transform.position);
        money.transform.SetParent(t);
        money.transform.DOPunchScale(money.transform.localScale * 1.5f, jumpDuration, 1, 0.5f);
        money.transform.DORotate(360 * Vector3.up, jumpDuration*2/3, RotateMode.FastBeyond360);
        money.transform.DOLocalJump(Vector3.zero, 1.5f, 1, jumpDuration).OnComplete(() =>
        {
            Factory.ReleaseMoney(money);
        });
        GameManager.Instance.Data.TotalMoney -= 2f;
        EventManager.Broadcast(GameEvent.OnUpdateMoneyText);
    }
}