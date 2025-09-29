using System;
using System.Collections;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

[Serializable]
public struct CustomerQueueDataContainer
{
    [HorizontalGroup("Queue")] [HideLabel] public Transform QueuePoint;
    [HorizontalGroup("Queue")] [HideLabel] public CustomerController CustomerInQueue;
    [HorizontalGroup("Queue")] public bool IsInCorrectSpot;
}

public class CustomerSystemManager : SingletonManager<CustomerSystemManager>
{
    [Title("Queue Data")] 
    [SerializeField] private List<CustomerQueueDataContainer> baggageQueueData;
    [SerializeField] private List<CustomerQueueDataContainer> planeQueueData;
    public List<CustomerQueueDataContainer> BaggageQueueData => baggageQueueData;
    public List<CustomerQueueDataContainer> PlaneQueueData => planeQueueData;

    [Title("Customer Settings")] 
    [SerializeField] private List<CustomerController> customers;
    [SerializeField] private Transform customerSpawnTransform;
    [SerializeField] private int customerCount = 5;
    [SerializeField] private float spawnDelay = 1f;

    [Title("References")] 
    [SerializeField] private StairAttachTrigger attachTrigger;
    public StairAttachTrigger AttachTrigger => attachTrigger;

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnLevelElementsActivated, (Action)OnLevelElementsActivated);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnLevelElementsActivated, (Action)OnLevelElementsActivated);
    }

    private void OnLevelElementsActivated()
    {
        StartCoroutine(BringInCustomers());
    }

    private IEnumerator BringInCustomers()
    {
        for (int i = 0; i < customerCount; i++)
        {
            var customer = Factory.CreateCustomer(customerSpawnTransform.position);
            customers.Add(customer);

            var success = TryAssignCustomerToQueue(customer, baggageQueueData);

            if (!success) yield break;

            yield return new WaitForSeconds(spawnDelay);
        }
    }

    public bool TryAssignCustomerToQueue(CustomerController customer, List<CustomerQueueDataContainer> queueData)
    {
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

    private void AssignCustomerToQueue(CustomerController customer, List<CustomerQueueDataContainer> queueData,
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
                break;
            }
        }
    }

    public CustomerController GetNextCustomerFromQueue(List<CustomerQueueDataContainer> queueData)
    {
        for (int i = 0; i < queueData.Count; i++)
        {
            var data = queueData[i];

            if (data.CustomerInQueue == null || !data.IsInCorrectSpot) continue;
            
            var customer = data.CustomerInQueue;

            data.CustomerInQueue = null;
            data.IsInCorrectSpot = false;
            queueData[i] = data;

            AdvanceQueue(i, queueData);

            return customer;
        }

        return null;
    }

    private void AdvanceQueue(int emptiedIndex, List<CustomerQueueDataContainer> queueData)
    {
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