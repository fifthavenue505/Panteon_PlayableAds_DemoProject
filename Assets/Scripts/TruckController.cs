using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TruckController : MonoBehaviour
{
    [SerializeField] private Transform stackPoint; 
    [SerializeField] private float stackOffsetY = 0.5f;
    [SerializeField] private int maxCapacity = 6;
    [SerializeField] private Transform moveTarget; 
    private Vector3 startPos; 
    [SerializeField] private float moveDuration = 3f;

    private readonly List<Baggage> baggageList = new();


    private void Start()
    {
        startPos = transform.position;
    }

    public void AddBaggage(Baggage baggage)
    {
        baggage.transform.SetParent(stackPoint);

        var index = baggageList.Count;
        var targetPos = stackPoint.position + Vector3.up * (index * stackOffsetY);

        baggage.transform.DOJump(targetPos, 2f, 1, 0.4f).OnComplete(() =>
        {
            baggageList.Add(baggage);

            if (baggageList.Count >= maxCapacity)
            {
                MoveTruck();
            }
        });
    }

    private void MoveTruck()
    {
        transform.DOMove(moveTarget.position, moveDuration)
            .SetEase(Ease.InQuad)
            .OnComplete(() =>
            {
                foreach (var baggage in baggageList)
                {
                    Factory.ReleaseBaggage(baggage);
                }
                baggageList.Clear();

                transform.DOMove(startPos, moveDuration)
                    .SetEase(Ease.OutQuad);
            });
    }
}