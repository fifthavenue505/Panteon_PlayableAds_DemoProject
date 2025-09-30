using Sirenix.OdinInspector;
using UnityEngine;

public class SpawnController : MonoBehaviour
{
    [HorizontalGroup("Customer", Width = 0.33f)]
    [BoxGroup("Customer/Prefab")] [LabelText("Customer Prefab")]
    [SerializeField] private CustomerController customerPrefab;

    [BoxGroup("Customer/Parent")] [LabelText("Customer Parent")]
    [SerializeField] private Transform customerParent;

    [BoxGroup("Customer/Pool")] [LabelText("Pool Size")]
    [SerializeField] private int customerPoolSize = 6;


    [HorizontalGroup("Money", Width = 0.33f)]
    [BoxGroup("Money/Prefab")] [LabelText("Money Prefab")]
    [SerializeField] private Money moneyPrefab;

    [BoxGroup("Money/Parent")] [LabelText("Money Parent")]
    [SerializeField] private Transform moneyParent;

    [BoxGroup("Money/Pool")] [LabelText("Pool Size")]
    [SerializeField] private int moneyPoolSize = 20;


    [HorizontalGroup("Baggage", Width = 0.33f)]
    [BoxGroup("Baggage/Prefab")] [LabelText("Baggage Prefab")]
    [SerializeField] private Baggage baggagePrefab;

    [BoxGroup("Baggage/Parent")] [LabelText("Baggage Parent")]
    [SerializeField] private Transform baggageParent;

    [BoxGroup("Baggage/Pool")] [LabelText("Pool Size")]
    [SerializeField] private int baggagePoolSize = 6;


    private void Awake()
    {
        Factory.Initialize(
            customerPrefab, customerParent, customerPoolSize,
            moneyPrefab, moneyParent, moneyPoolSize,
            baggagePrefab, baggageParent, baggagePoolSize
        );
    }
}