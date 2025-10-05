using System;
using UnityEngine;

public abstract class InteractableBase : MonoBehaviour
{
    TutorialManager tutorialManager;

    private void Start()
    {
        tutorialManager = TutorialManager.Instance;
    }

    public virtual void InteractEnter(GameObject interactor)
    {
        if (TutorialManager.Instance.GetCurrentTarget() == gameObject)
            TutorialManager.Instance.SetPlayerArrow(false);
    }

    public abstract void InteractStay(GameObject interactor);

    public virtual void InteractExit(GameObject interactor)
    {
        if (TutorialManager.Instance.GetCurrentTarget() == gameObject)
            TutorialManager.Instance.SetPlayerArrow(true);
        SFXManager.Instance.ResetPitch();
    }
}