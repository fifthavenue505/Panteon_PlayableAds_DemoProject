using System;
using DG.Tweening;
using UnityEngine;

public class Baggage : MonoBehaviour, IPoolable
{
    [Header("Data")] [SerializeField] private BaggageData data;
    [SerializeField] private BaggageColor _baggageColor;
    [SerializeField] private TrailRenderer _baggageTrail;

    // Makes the baggage jump to a target position
    public void JumpTo(Transform parent, Vector3 localOffset, Vector3 rotationOffset)
    {
        SetParticlePlay(true);
        transform.SetParent(parent);
        transform.localRotation = Quaternion.identity;
        
        transform.DOLocalJump(localOffset, data.JumpPower, 1, data.JumpDuration).OnComplete(() => SetParticlePlay(false));
        transform.DOPunchScale(transform.localScale * 0.2f, data.JumpDuration);
        transform.DOLocalRotate(Vector3.zero + rotationOffset, data.JumpDuration);
    }

    // Enables or disables the trail effect
    public void SetParticlePlay(bool state)
    {
        _baggageTrail.enabled = state;
        _baggageTrail.Clear();
    }

    // Called when the object is spawned from the pool
    public void OnObjectSpawn()
    {
        _baggageColor.ApplyRandomColor();
    }

    // Called when the object is returned to the pool
    public void OnObjectDespawn()
    {
    }

    public float GetStackOffsetY()
    {
        return data.StackOffsetY;
    }
}