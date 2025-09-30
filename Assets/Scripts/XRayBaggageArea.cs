using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;
using DG.Tweening;

public class XRayBaggageArea : MonoBehaviour, IInteractable
{
    [SerializeField] private Transform stackPoint;
    [SerializeField] private float stackOffsetY = 0.5f;
    [SerializeField] private float interactCooldown = 0.5f;

    [ReadOnly, SerializeField] private List<Baggage> baggageList = new(); 

    private float timer = 0f;

    public void InteractEnter(GameObject interactor) { }

    public void InteractStay(GameObject interactor)
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

    public void InteractExit(GameObject interactor)
    {
        timer = 0f;
    }

    public void AddBaggage(Baggage baggage)
    {
        baggageList.Add(baggage);

        int index = baggageList.Count - 1;
        Vector3 targetPos = stackPoint.position + Vector3.up * (index * stackOffsetY);

        baggage.transform.SetParent(stackPoint);
        baggage.transform.DOLocalJump(
            targetPos - stackPoint.position,
            1.5f, 1, 0.3f
        );
    }

    public Baggage RemoveBottomBaggage()
    {
        if (baggageList.Count == 0) return null;

        var baggage = baggageList[0];
        baggageList.RemoveAt(0);

        for (int i = 0; i < baggageList.Count; i++)
        {
            Vector3 targetPos = stackPoint.position + Vector3.up * (i * stackOffsetY);
            baggageList[i].transform.DOLocalMove(targetPos - stackPoint.position, 0.3f);
        }

        return baggage;
    }
}