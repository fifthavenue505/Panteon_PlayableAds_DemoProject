using System;
using UnityEngine;
using DG.Tweening;

public class BaggageLift : MonoBehaviour
{
    [SerializeField] private Transform baggagePoint;
    [SerializeField] private Transform topPoint;
    private Vector3 startPos;
    [SerializeField] private TruckController truck;
    [SerializeField] private float liftDuration = 1.5f;

    private bool isBusy = false;
    public bool IsBusy => isBusy;

    private void Start()
    {
        startPos = transform.position;
    }

    public void TakeBaggage(Baggage baggage)
    {
        baggage.transform.SetParent(transform);
        
        baggage.transform.DOJump(baggagePoint.position, 2f, 1, 0.3f)
            .OnComplete(() =>
            {
                transform.DOMove(topPoint.position, liftDuration).OnComplete(() =>
                {
                    truck.AddBaggage(baggage);

                    transform.DOMove(startPos, liftDuration).OnComplete(() => { isBusy = false; });
                });
            });
    }
    
    public void SetBusy(bool value)
    {
        isBusy = value;
    }
}