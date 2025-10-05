using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CustomerAnimation : MonoBehaviour
{
    [SerializeField] private Animator _customerAnimator;

    // Parameter IDs for performance instead of using string every time
    private static readonly int IsWalking = Animator.StringToHash("isWalking");
    private static readonly int IsCarrying = Animator.StringToHash("isCarrying");

    private void Awake()
    {
        _customerAnimator = GetComponentInChildren<Animator>();
    }

    // Updates the animation parameters
    private void OnSetCustomerAnimation(GameObject target, bool isWalking, bool isCarrying)
    {
        if (target != gameObject) return;
        
        _customerAnimator.SetBool(IsWalking, isWalking);
        _customerAnimator.SetBool(IsCarrying, isCarrying);
    }
    
    private void OnEnable()
    {
        EventManager.AddHandler<Action<GameObject, bool, bool>>(GameEvent.OnSetCustomerAnimation, OnSetCustomerAnimation);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler<Action<GameObject, bool, bool>>(GameEvent.OnSetCustomerAnimation, OnSetCustomerAnimation);
    }
}