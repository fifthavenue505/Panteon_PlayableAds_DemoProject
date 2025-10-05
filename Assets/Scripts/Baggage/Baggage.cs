using System;
using DG.Tweening;
using Sirenix.OdinInspector;
using UnityEngine;

public class Baggage : MonoBehaviour, IPoolable
{
    [Title("Data")] [SerializeField] private BaggageData data;
    [SerializeField] private BaggageColor _baggageColor;
    [SerializeField] private TrailRenderer _baggageTrail;

    public void JumpTo(Transform parent, Vector3 localOffset, Vector3 rotationOffset)
    {
        SetParticlePlay(true);
        transform.SetParent(parent);
        transform.localRotation = Quaternion.identity;
        
        transform.DOLocalJump(localOffset, data.JumpPower, 1, data.JumpDuration).OnComplete(() => SetParticlePlay(false));
        transform.DOPunchScale(transform.localScale * 0.2f, data.JumpDuration);
        transform.DOLocalRotate(Vector3.zero + rotationOffset, data.JumpDuration);
    }

    public void SetParticlePlay(bool state)
    {
        _baggageTrail.enabled = state;
        _baggageTrail.Clear();
    }

    public void OnObjectSpawn()
    {
        _baggageColor.ApplyRandomColor();
    }

    public void OnObjectDespawn()
    {
    }

    public float GetStackOffsetY()
    {
        return data.StackOffsetY;
    }
}