using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using TMPro;
using UnityEngine;

public class Plane : MonoBehaviour
{
    [SerializeField] private int maxCustomerCapacity = 6;
    [SerializeField] private int currentCustomerCount = 0;
    [SerializeField] private TextMeshProUGUI customerText;

    [SerializeField] private Transform backTarget;
    [SerializeField] private Transform forwardTarget;
    [SerializeField] private Transform planeModel;
    [SerializeField] private ParticleSystem smokeEffect;

    [SerializeField] private bool isReady;

    [Title("Settings")] [SerializeField] private float backDuration = 1.2f;
    [SerializeField] private float rotateDuration = 0.5f;
    [SerializeField] private float forwardDuration = 2f;

    private Sequence seq;

    private void OnCustomerEnterPlane()
    {
        currentCustomerCount++;
        customerText.text = currentCustomerCount + "/" + maxCustomerCapacity;
        smokeEffect.Play();
        transform.DOPunchScale(transform.localScale * .1f, 0.2f);
        if (currentCustomerCount >= maxCustomerCapacity)
        {
            if (isReady)
                EventManager.Broadcast(GameEvent.OnMovePlane);
            else
            {
                isReady = true;
            }
        }
    }

    [Button]
    private void OnMovePlane()
    {
        if (seq != null && seq.IsActive()) seq.Kill();

        seq = DOTween.Sequence();

        seq.Append(transform.DOMove(backTarget.position, backDuration).SetEase(Ease.InOutCubic));
        var rot = transform.eulerAngles + new Vector3(0f, -90f, 0f);
        seq.Join(
            transform.DORotate(rot, rotateDuration).SetEase(Ease.InOutCubic)
        );
        seq.AppendCallback(() => { customerText.enabled = false; });

        seq.Append(
            transform.DOMove(forwardTarget.position, forwardDuration).SetEase(Ease.InCubic)
        );
    }

    private void OnTruckArrive()
    {
        if (isReady)
            EventManager.Broadcast(GameEvent.OnMovePlane);
        else
        {
            isReady = true;
        }
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnCustomerEnterPlane, (Action)OnCustomerEnterPlane);
        EventManager.AddHandler(GameEvent.OnMovePlane, (Action)OnMovePlane);
        EventManager.AddHandler(GameEvent.OnTruckArrive, (Action)OnTruckArrive);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnCustomerEnterPlane, (Action)OnCustomerEnterPlane);
        EventManager.RemoveHandler(GameEvent.OnMovePlane, (Action)OnMovePlane);
        EventManager.RemoveHandler(GameEvent.OnTruckArrive, (Action)OnTruckArrive);
    }
}