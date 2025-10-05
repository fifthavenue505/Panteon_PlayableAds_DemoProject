using System;
using UnityEngine;

public abstract class InteractableBase : MonoBehaviour
{
    public virtual void InteractEnter(GameObject interactor)
    {
        // If this object is the current tutorial target, hide the player arrow indicator
        if (TutorialManager.Instance.GetCurrentTarget() == gameObject)
            TutorialManager.Instance.SetPlayerArrow(false);
    }

    public abstract void InteractStay(GameObject interactor);

    public virtual void InteractExit(GameObject interactor)
    {
        // If this object is the current tutorial target, show the player arrow again
        if (TutorialManager.Instance.GetCurrentTarget() == gameObject)
            TutorialManager.Instance.SetPlayerArrow(true);
        
        SFXManager.Instance.ResetPitch();
    }
}