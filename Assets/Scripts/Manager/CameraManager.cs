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
        EventManager.AddHandler<Action>(GameEvent.OnBringInCustomers, OnBringInCustomers);
        EventManager.AddHandler<Action>(GameEvent.OnBoardActivated, OnBoardActivated);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler<Action>(GameEvent.OnBringInCustomers, OnBringInCustomers);
        EventManager.RemoveHandler<Action>(GameEvent.OnBoardActivated, OnBoardActivated);
    }

    private void OnBringInCustomers()
    {
        StartCoroutine(SwitchCameraAndReturn(2f));
    }

    private void OnBoardActivated()
    {
        SwitchCameraStay();
    }

    private IEnumerator SwitchCameraAndReturn(float waitTime)
    {
        environmentCam.Priority = 20;
        mainCam.Priority = 10;
        
        yield return new WaitForSeconds(waitTime);

        mainCam.Priority = 20;
        environmentCam.Priority = 10;
    }

    private void SwitchCameraStay()
    {
        boardCam.Priority = 20;
        mainCam.Priority = 10;
    }
}