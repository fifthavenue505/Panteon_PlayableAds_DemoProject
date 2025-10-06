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

        // Do not process if the lift is currently busy
        if (baggageLift.IsBusy()) return;

        // Attempt to take the next baggage from the input stack
        var baggage = xRayBaggageArea.RemoveBottomBaggage();
        if (baggage == null) return;

        baggageLift.SetBusy(true);

        Tween moveTween = baggage.transform.DOMove(outputPoint.position, baggageMoveDuration);
        SFXManager.Instance.Play(SFXType.ImpactPop, 0.1f);

        // Play the Xray light effect halfway through the baggage move
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