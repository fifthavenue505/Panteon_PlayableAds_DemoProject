using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")] [SerializeField]
    private float moveSpeed = 5f;

    [Header("Obstacle Detection")] [SerializeField]
    private float rayDistance = 1f;

    [SerializeField] private LayerMask obstacleMask;

    [Header("References")] [SerializeField] private PlayerBaggage _playerBaggage;
    public PlayerBaggage _PlayerBaggage => _playerBaggage;
    [SerializeField] private Camera mainCamera;
    [SerializeField] private FloatingJoystick joystick;
    [SerializeField] private ParticleSystem trailParticle;

    public void SetTrailParticle(bool state)
    {
        if (state) trailParticle.Play();
        else trailParticle.Stop();
    }

    private void Awake()
    {
        _playerBaggage = GetComponent<PlayerBaggage>();
    }

    private void Start()
    {
        EventManager.Broadcast(GameEvent.OnPlayerChangeState, PlayerStateType.Idle);
        joystick = UIManager.Instance.GetJoystick();
    }

    public void HandleMovement()
    {
        var dir = GetJoystickDirection();
        if (!(dir.magnitude > 0.05f)) return;

        dir = dir.normalized;

        var camForward = mainCamera.transform.forward;
        var camRight = mainCamera.transform.right;

        camForward.y = 0f;
        camRight.y = 0f;

        camForward.Normalize();
        camRight.Normalize();

        var moveDir = camForward * dir.z + camRight * dir.x;

        if (!IsObstacleInFront(moveDir))
        {
            var delta = moveDir * (moveSpeed * Time.deltaTime);
            transform.position += delta;
        }

        transform.rotation = Quaternion.LookRotation(moveDir, Vector3.up);
    }

    public bool HasMovementInput()
    {
        return Mathf.Abs(joystick.Horizontal) >= 0.01f || Mathf.Abs(joystick.Vertical) >= 0.01f;
    }

    private Vector3 GetJoystickDirection()
    {
        return new Vector3(joystick.Horizontal, 0, joystick.Vertical);
    }

    private bool IsObstacleInFront(Vector3 moveDir)
    {
        Ray ray = new Ray(transform.position + Vector3.up * 0.5f, moveDir);
        return Physics.Raycast(ray, rayDistance, obstacleMask);
    }

    public void SetPlayerControlElements(bool state)
    {
        UIManager.Instance.SetJoystickEnabled(state);
        
        // Hide tutorial arrow
        if (TutorialManager.Instance.GetTutorialActive())
            TutorialManager.Instance.SetPlayerArrow(state);
        
        SetTrailParticle(state);
    }
}