using System.Collections;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

public class SpawnController : MonoBehaviour
{
    [Title("Prefabs")]
    [SerializeField] private CustomerController customerPrefab;
    [SerializeField] private Money moneyPrefab;
    [SerializeField] private Baggage baggagePrefab;
    
    private void Awake()
    {
        // Factory
        Factory.Initialize(customerPrefab, moneyPrefab,baggagePrefab, transform);
    }
}
