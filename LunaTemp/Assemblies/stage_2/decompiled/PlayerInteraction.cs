using UnityEngine;

public class PlayerInteraction : MonoBehaviour
{
	private void OnTriggerEnter(Collider other)
	{
		if (other.TryGetComponent<InteractableBase>(out var interactable))
		{
			interactable.InteractEnter(base.gameObject);
		}
	}

	private void OnTriggerStay(Collider other)
	{
		if (other.TryGetComponent<InteractableBase>(out var interactable))
		{
			interactable.InteractStay(base.gameObject);
		}
	}

	private void OnTriggerExit(Collider other)
	{
		if (other.TryGetComponent<InteractableBase>(out var interactable))
		{
			interactable.InteractExit(base.gameObject);
		}
	}
}
