using UnityEngine;

public abstract class InteractableBase : MonoBehaviour
{
	public virtual void InteractEnter(GameObject interactor)
	{
		if (SingletonManager<TutorialManager>.Instance.GetCurrentTarget() == base.gameObject)
		{
			SingletonManager<TutorialManager>.Instance.SetPlayerArrow(false);
		}
	}

	public abstract void InteractStay(GameObject interactor);

	public virtual void InteractExit(GameObject interactor)
	{
		if (SingletonManager<TutorialManager>.Instance.GetCurrentTarget() == base.gameObject)
		{
			SingletonManager<TutorialManager>.Instance.SetPlayerArrow(true);
		}
		SingletonManager<SFXManager>.Instance.ResetPitch();
	}
}
