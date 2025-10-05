using System;
using System.Collections;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

public enum QueueType
{
    Baggage,
    Plane
}

[Serializable]
public struct CustomerQueueDataContainer
{
    [HorizontalGroup("Queue")] [HideLabel] public Transform QueuePoint;
    [HorizontalGroup("Queue")] [HideLabel] public CustomerController CustomerInQueue;
    [HorizontalGroup("Queue")] public bool IsInCorrectSpot;
}

public class CustomerSystemManager : SingletonManager<CustomerSystemManager>
{
    [Title("Queue Data")] [SerializeField] private List<CustomerQueueDataContainer> baggageQueueData;
    [SerializeField] private List<CustomerQueueDataContainer> planeQueueData;

    [Title("Customer Settings")] [SerializeField]
    private List<CustomerController> customers;

    [SerializeField] private Transform customerSpawnTransform;
    [SerializeField] private int customerCount = 6;
    [SerializeField] private float spawnDelay = 1f;

    [Title("References")] [SerializeField] private StairAttachTrigger attachTrigger;
    public StairAttachTrigger AttachTrigger => attachTrigger;

    private Dictionary<QueueType, List<CustomerQueueDataContainer>> queues;

    public List<CustomerController> GetCustomerList()
    {
        return customers;
    }

    protected override void Awake()
    {
        base.Awake();

        queues = new Dictionary<QueueType, List<CustomerQueueDataContainer>>
        {
            { QueueType.Baggage, baggageQueueData },
            { QueueType.Plane, planeQueueData }
        };
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnBringInCustomers, (Action)OnBringInCustomers);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnBringInCustomers, (Action)OnBringInCustomers);
    }

    private void OnBringInCustomers()
    {
        StartCoroutine(BringInCustomers());
    }

    private IEnumerator BringInCustomers()
    {
        for (int i = 0; i < customerCount; i++)
        {
            var customer = Factory.CreateCustomer(customerSpawnTransform.position, customerSpawnTransform.rotation);
            var baggage = Factory.CreateBaggage(Vector3.zero);

            customers.Add(customer);

            baggage.transform.SetParent(customer.BaggageHoldPoint);
            baggage.transform.localPosition = Vector3.zero;

            customer.AssignBaggage(baggage);

            var success = TryAssignCustomerToQueue(customer, QueueType.Baggage);

            if (!success) yield break;

            yield return new WaitForSeconds(spawnDelay);
        }
    }

    public bool TryAssignCustomerToQueue(CustomerController customer, QueueType queueType)
    {
        var queueData = queues[queueType];
        int spotIndex = GetFirstAvailableSpotIndex(queueData);
        if (spotIndex == -1) return false;

        AssignCustomerToQueue(customer, queueData, spotIndex);
        return true;
    }

    private int GetFirstAvailableSpotIndex(List<CustomerQueueDataContainer> queueData)
    {
        for (int i = 0; i < queueData.Count; i++)
        {
            if (queueData[i].CustomerInQueue == null)
                return i;
        }

        return -1;
    }

    private void AssignCustomerToQueue(CustomerController customer,
        List<CustomerQueueDataContainer> queueData,
        int spotIndex)
    {
        var data = queueData[spotIndex];
        data.CustomerInQueue = customer;
        data.IsInCorrectSpot = false;
        queueData[spotIndex] = data;

        customer.MoveCustomer(data.QueuePoint, queueData);
    }

    public void OnCustomerReachedSpot(CustomerController customer, List<CustomerQueueDataContainer> queueData)
    {
        for (int i = 0; i < queueData.Count; i++)
        {
            if (queueData[i].CustomerInQueue == customer)
            {
                var data = queueData[i];
                data.IsInCorrectSpot = true;
                queueData[i] = data;
                EventManager.Broadcast(GameEvent.OnCustomerChangeState, customer.gameObject,
                    customer.GetIdleState(customer.HasBaggage));
                break;
            }
        }
    }

    public CustomerController GetNextCustomerFromQueue(QueueType queueType)
    {
        var queueData = queues[queueType];
        for (int i = 0; i < queueData.Count; i++)
        {
            var data = queueData[i];
            if (data.CustomerInQueue == null || !data.IsInCorrectSpot) continue;

            var customer = data.CustomerInQueue;

            data.CustomerInQueue = null;
            data.IsInCorrectSpot = false;
            queueData[i] = data;

            AdvanceQueue(i, queueType);
            return customer;
        }

        return null;
    }

    private void AdvanceQueue(int emptiedIndex, QueueType queueType)
    {
        var queueData = queues[queueType];

        for (int i = emptiedIndex + 1; i < queueData.Count; i++)
        {
            var currentData = queueData[i];
            if (currentData.CustomerInQueue == null) continue;

            var customer = currentData.CustomerInQueue;
            var newTarget = queueData[i - 1].QueuePoint;

            currentData.CustomerInQueue = null;
            currentData.IsInCorrectSpot = false;
            queueData[i] = currentData;

            var newData = queueData[i - 1];
            newData.CustomerInQueue = customer;
            newData.IsInCorrectSpot = false;
            queueData[i - 1] = newData;
            customer.MoveCustomer(newTarget, queueData);
        }
    }
}