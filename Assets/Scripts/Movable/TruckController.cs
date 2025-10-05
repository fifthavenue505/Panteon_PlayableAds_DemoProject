using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class TruckController : MonoBehaviour
{
    [SerializeField] private Transform stackPoint;
    [SerializeField] private int maxCapacity = 6;
    [SerializeField] private Transform moveTarget;
    [SerializeField] private Vector3 additionalRotation = new Vector3(0, 180, 0);
    private Vector3 startPos;
    [SerializeField] private float moveDuration = 3f;

    private readonly List<Baggage> baggageList = new();

    private void Start()
    {
        startPos = transform.position;
    }

    // Called when new baggage is loaded onto the truck
    public void AddBaggage(Baggage baggage)
    {
        baggage.transform.SetParent(stackPoint);

        var index = baggageList.Count;
        var targetPos = Vector3.zero + Vector3.up * (index * baggage.GetStackOffsetY());
        baggageList.Add(baggage);

        // Trigger truck movement if maximum capacity is reached
        if (baggageList.Count >= maxCapacity)
        {
            StartCoroutine(MoveTruck());
        }

        // Animate baggage placement with jump and rotation
        baggage.JumpTo(stackPoint, targetPos, additionalRotation);
    }

    // Moves the truck
    private IEnumerator MoveTruck()
    {
        yield return new WaitForSeconds(2f);
        transform.DOMove(moveTarget.position, moveDuration)
            .SetEase(Ease.InQuad)
            .OnComplete(() =>
            {
                // Once arrived, release all baggage
                foreach (var baggage in baggageList)
                {
                    Factory.ReleaseBaggage(baggage);
                }

                baggageList.Clear();
                EventManager.Broadcast(GameEvent.OnTruckArrive);
            });
    }

    void OnTruckArrive()
    {
        transform.DOMove(startPos, moveDuration)
            .SetEase(Ease.OutQuad);
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnTruckArrive, (Action)OnTruckArrive);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnTruckArrive, (Action)OnTruckArrive);
    }
}