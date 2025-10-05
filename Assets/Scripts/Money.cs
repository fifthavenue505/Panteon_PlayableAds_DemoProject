using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Money : MonoBehaviour, IPoolable
{
    [SerializeField] private int value = 5;
    public int Value => value;
    private Vector3 initialScale;
    
    private void Awake()
    {
        initialScale = transform.localScale;
    }

    public void OnObjectSpawn()
    {
        transform.localScale = initialScale;
    }

    public void OnObjectDespawn()
    {
    }
}
