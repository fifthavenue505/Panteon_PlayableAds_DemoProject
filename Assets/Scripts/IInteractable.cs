using UnityEngine;

public interface IInteractable
{
    void InteractEnter(GameObject interactor);
    void InteractStay(GameObject interactor);
    void InteractExit(GameObject interactor);
}