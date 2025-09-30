using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Baggage : MonoBehaviour,IPoolable
{
    public void JumpTo(Transform parent, Vector3 localOffset)
    {
        transform.SetParent(parent);
        transform.localRotation = Quaternion.identity;

        transform.DOLocalJump(localOffset, 1f, 1, 0.5f) .SetEase(Ease.OutBack)
            .OnComplete(() =>
            {
                transform.localRotation = Quaternion.identity;
            });
    }
    
    public void PassThroughXRay(Transform exitPoint)
    {
        transform.DOMove(exitPoint.position, 1f).SetEase(Ease.Linear)
            .OnComplete(() =>
            {
            });
    }
    
    public void OnObjectSpawn()
    {
        
    }

    public void OnObjectDespawn()
    {
        
    }
}
