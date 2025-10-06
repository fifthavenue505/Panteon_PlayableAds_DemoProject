using System;
using System.Collections;
using UnityEngine;
using Cinemachine;

public class CameraManager : MonoBehaviour
{
    [SerializeField] private CinemachineVirtualCamera mainCam;
    [SerializeField] private CinemachineVirtualCamera environmentCam;
    [SerializeField] private CinemachineVirtualCamera boardCam;

    private void Start()
    {
        mainCam.Priority = 20;
        environmentCam.Priority = 10;
        boardCam.Priority = 10;
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnBringInCustomers, OnBringInCustomers);
        EventManager.AddHandler(GameEvent.OnBoardActivated, OnBoardActivated);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnBringInCustomers, OnBringInCustomers);
        EventManager.RemoveHandler(GameEvent.OnBoardActivated, OnBoardActivated);
    }

    private void OnBringInCustomers()
    {
        StartCoroutine(SwitchCameraAndReturn(2f));
    }

    private void OnBoardActivated()
    {
        SwitchCameraStay();
    }

    // Switches to the environment camera, waits for a given time, then returns to the main camera
    private IEnumerator SwitchCameraAndReturn(float waitTime)
    {
        environmentCam.Priority = 20;
        mainCam.Priority = 10;
        
        yield return new WaitForSeconds(waitTime);

        mainCam.Priority = 20;
        environmentCam.Priority = 10;
    }

    // Permanently switches to the board camera
    private void SwitchCameraStay()
    {
        boardCam.Priority = 20;
        mainCam.Priority = 10;
    }
}