using UnityEngine;
using DG.Tweening;

public class XRayMachine : InteractableBase
{
    [SerializeField] private XRayBaggageArea xRayBaggageArea;
    [SerializeField] private Transform outputPoint;
    [SerializeField] private float baggageMoveDuration = 1f;
    [SerializeField] private float interactCooldown = 0.5f;
    [SerializeField] private BaggageLift baggageLift;
    [SerializeField] private ParticleSystem xRayLightParticle;

    private float timer = 0f;

    public override void InteractStay(GameObject interactor)
    {
        timer += Time.deltaTime;
        if (timer < interactCooldown) return;

        if (baggageLift.IsBusy) return;

        var baggage = xRayBaggageArea.RemoveBottomBaggage();
        if (baggage == null) return;

        baggageLift.SetBusy(true);

        Tween moveTween = baggage.transform.DOMove(outputPoint.position, baggageMoveDuration);
        SFXManager.Instance.Play(SFXType.ImpactPop, 0.1f);

        DOVirtual.DelayedCall(baggageMoveDuration / 2f, () => { xRayLightParticle.Play(); });

        moveTween.OnComplete(() => { baggageLift.TakeBaggage(baggage); });

        timer = 0f;
    }

    public override void InteractExit(GameObject interactor)
    {
        base.InteractExit(interactor);
        timer = 0f;
    }
}