using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;
using DG.Tweening;

public class XRayBaggageArea : InteractableBase
{
    [SerializeField] private Transform stackPoint;
    [SerializeField] private float interactCooldown = 0.5f;
    [SerializeField] private Vector3 additionalRotation = new Vector3(0, 180, 0); // Extra rotation applied to baggage for alignment

    [ReadOnly, SerializeField] private List<Baggage> baggageList = new();

    private float timer = 0f;
    [SerializeField] private int passedBaggageCount;
    
    [Title("Tutorial")]
    private int maxBaggageCount = 6;

    public override void InteractStay(GameObject interactor)
    {
        timer += Time.deltaTime;
        if (timer < interactCooldown) return;

        var stack = interactor.GetComponent<PlayerBaggage>();
        if (stack == null) return;

        var baggage = stack.RemoveTopBaggage();
        if (baggage == null) return;

        AddBaggage(baggage);
        timer = 0f;
    }

    public override void InteractExit(GameObject interactor)
    {
        base.InteractExit(interactor);
        timer = 0f;
    }

    // Adds a baggage object to the stack
    public void AddBaggage(Baggage baggage)
    {
        baggageList.Add(baggage);

        int index = baggageList.Count - 1;
        Vector3 targetPos = Vector3.zero + Vector3.up * (index * baggage.GetStackOffsetY());

        SFXManager.Instance.Play(SFXType.ImpactPop, 0.1f);
        
        baggage.JumpTo(stackPoint, targetPos, additionalRotation);
        
        if (baggageList.Count == maxBaggageCount)
            EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);
    }

    // Removes the bottom baggage from the stack and repositions the remaining ones
    public Baggage RemoveBottomBaggage()
    {
        if (baggageList.Count == 0) return null;

        var baggage = baggageList[0];
        baggageList.RemoveAt(0);

        for (int i = 0; i < baggageList.Count; i++)
        {
            Vector3 targetPos = stackPoint.position + Vector3.up * (i * baggage.GetStackOffsetY());
            baggageList[i].transform.DOLocalMove(targetPos - stackPoint.position, 0.3f).SetEase(Ease.OutBounce);
        }
        
        passedBaggageCount++;
        
        // Check for tutorial completion
        if (passedBaggageCount == 6)
            EventManager.Broadcast(GameEvent.OnTutorialStepCompleted);

        return baggage;
    }
}