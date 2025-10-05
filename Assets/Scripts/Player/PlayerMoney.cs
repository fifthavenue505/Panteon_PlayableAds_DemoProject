using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class PlayerMoney : MonoBehaviour
{
    [SerializeField] private float jumpDuration = 0.5f;

    public void SpawnMoney(Transform t)
    {
        var money = Factory.CreateMoney(transform.position + new Vector3(0, 1.75f, 0));
        money.transform.SetParent(t);
        money.transform.DOPunchScale(money.transform.localScale * 1.1f, jumpDuration, 1, 0.5f);
        money.transform.DORotate(360 * Vector3.up, jumpDuration * 2 / 3, RotateMode.FastBeyond360);
        money.transform.DOLocalJump(Vector3.zero, .8f, 1, jumpDuration).OnComplete(() =>
        {
            Factory.ReleaseMoney(money);
        });
    }
}