using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;

public class PlayerBaggage : MonoBehaviour
{
    [SerializeField] private Transform playerHandPoint;
    [SerializeField] private float stackOffsetY = 0.5f;

    [ReadOnly, SerializeField] private List<Baggage> baggageStack = new();

    public void AddBaggage(Baggage baggage)
    {
        if (baggage == null) return;

        baggageStack.Add(baggage);

        Vector3 targetLocalPos = Vector3.up * (baggageStack.Count - 1) * stackOffsetY;

        baggage.JumpTo(playerHandPoint, targetLocalPos);
    }

    public Baggage RemoveTopBaggage()
    {
        if (baggageStack.Count == 0) return null;

        var top = baggageStack[^1];
        baggageStack.RemoveAt(baggageStack.Count - 1);
        return top;
    }
}