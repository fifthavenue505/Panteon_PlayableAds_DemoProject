using UnityEngine;
using DG.Tweening;

public class XRayMachine : MonoBehaviour, IInteractable
{
    [SerializeField] private XRayBaggageArea xRayBaggageArea;
    [SerializeField] private Transform outputPoint;
    [SerializeField] private float baggageMoveDuration = 1f;
    [SerializeField] private float interactCooldown = 0.5f;
    [SerializeField] private BaggageLift baggageLift;

    private float timer = 0f;

    public void InteractEnter(GameObject interactor)
    {
    }

    public void InteractStay(GameObject interactor)
    {
        timer += Time.deltaTime;
        if (timer < interactCooldown) return;

        if (baggageLift.IsBusy) return;

        var baggage = xRayBaggageArea.RemoveBottomBaggage();
        if (baggage == null) return;

        baggageLift.SetBusy(true);

        baggage.transform.DOMove(outputPoint.position, baggageMoveDuration).OnComplete(() =>
        {
            baggageLift.TakeBaggage(baggage);
        });
    
        timer = 0f;
    }

    public void InteractExit(GameObject interactor)
    {
        timer = 0f;
    }
}