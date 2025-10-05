using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;

public class PlayerBaggage : MonoBehaviour
{
    [Title("Baggage Stack")]
    [SerializeField] private Transform playerHandPoint;

    [ReadOnly, SerializeField] private List<Baggage> baggageStack = new();
    public int BaggageCount => baggageStack.Count;

    [SerializeField] private Vector3 additionalRotation = Vector3.zero;

    [Title("Baggage Movement")]
    [SerializeField] private float baseMoveOffset = 0.05f;
    [SerializeField] private float moveDuration = 0.15f;

    private PlayerController playerController;
    private bool wasMoving;

    private void Start()
    {
        playerController = GetComponent<PlayerController>();
    }

    private void Update()
    {
        if (baggageStack.Count == 0) return;

        bool isMoving = playerController.HasMovementInput();

        if (isMoving && !wasMoving)
            OnStartMoving();
        else if (!isMoving && wasMoving)
            OnStopMoving();

        wasMoving = isMoving;
    }

    private void OnStartMoving()
    {
        var moveDirWorld = -playerController.transform.forward;
        var moveDirLocal = playerHandPoint.InverseTransformDirection(moveDirWorld);

        var count = baggageStack.Count;
        for (int i = 0; i < count; i++)
        {
            var baggage = baggageStack[i];
            if (baggage == null) continue;

            var t = (float)(i + 1) / count;
            var strength = baseMoveOffset * Mathf.Pow(t, 2f);

            var restPos = Vector3.up * (i * baggage.GetStackOffsetY());
            var targetLocalPos = restPos + moveDirLocal * strength;

            baggage.transform.DOKill();
            baggage.transform.DOLocalMove(targetLocalPos, moveDuration)
                .SetEase(Ease.InCubic);
        }
    }

    private void OnStopMoving()
    {
        for (int i = 0; i < baggageStack.Count; i++)
        {
            var baggage = baggageStack[i];
            if (baggage == null) continue;

            Vector3 restPos = Vector3.up * (i * baggage.GetStackOffsetY());

            baggage.transform.DOKill();
            baggage.transform.DOLocalMove(restPos, moveDuration)
                .SetEase(Ease.OutQuad);
        }
    }

    public void AddBaggage(Baggage baggage)
    {
        if (baggage == null) return;

        baggageStack.Add(baggage);

        if (baggageStack.Count == 1)
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.CarryingIdle);

        var targetLocalPos = Vector3.up * (baggageStack.Count - 1) * baggage.GetStackOffsetY();
        baggage.JumpTo(playerHandPoint, targetLocalPos, additionalRotation);
        SFXManager.Instance.Play(SFXType.ImpactPop, 0.1f);
    }

    public Baggage RemoveTopBaggage()
    {
        if (baggageStack.Count == 0) return null;

        var top = baggageStack[^1];
        baggageStack.RemoveAt(baggageStack.Count - 1);

        if (baggageStack.Count == 0)
            EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);

        return top;
    }
}