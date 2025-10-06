using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum QueueType
{
    Baggage,
    Plane
}

// Holds data for each queue point
[Serializable]
public struct CustomerQueueDataContainer
{
    public Transform QueuePoint;
    public CustomerController CustomerInQueue;
    public bool IsInCorrectSpot;
}

public class CustomerSystemManager : SingletonManager<CustomerSystemManager>
{
    [Header("Queue Data")] [SerializeField] private List<CustomerQueueDataContainer> baggageQueueData;
    [SerializeField] private List<CustomerQueueDataContainer> planeQueueData;

    [Header("Customer Settings")] [SerializeField]
    private List<CustomerController> customers;

    [SerializeField] private Transform customerSpawnTransform;
    [SerializeField] private int customerCount = 6; // Number of customers to spawn
    [SerializeField] private float spawnDelay = 1f; // Delay between spawning

    [Header("References")] [SerializeField] private StairAttachTrigger attachTrigger;
    public StairAttachTrigger AttachTrigger => attachTrigger;

    private Dictionary<QueueType, List<CustomerQueueDataContainer>> queues;

    public List<CustomerController> GetCustomerList()
    {
        return customers;
    }

    protected override void Awake()
    {
        base.Awake();

        // Initialize dictionary to access queue lists by queue type
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

    // Spawns and initializes customers
    private IEnumerator BringInCustomers()
    {
        for (int i = 0; i < customerCount; i++)
        {
            // Create a new customer and baggage object from the factory
            var customer = Factory.CreateCustomer(customerSpawnTransform.position, customerSpawnTransform.rotation);
            var baggage = Factory.CreateBaggage(Vector3.zero);

            customers.Add(customer);

            baggage.transform.SetParent(customer.BaggageHoldPoint);
            baggage.transform.localPosition = Vector3.zero;

            customer.AssignBaggage(baggage);

            // Try to assign the customer to the baggage queue
            var success = TryAssignCustomerToQueue(customer, QueueType.Baggage);

            if (!success) yield break;

            yield return new WaitForSeconds(spawnDelay);
        }
    }

    // Tries to find an available queue spot and assigns the customer
    public bool TryAssignCustomerToQueue(CustomerController customer, QueueType queueType)
    {
        var queueData = queues[queueType];
        int spotIndex = GetFirstAvailableSpotIndex(queueData);
        if (spotIndex == -1) return false;

        AssignCustomerToQueue(customer, queueData, spotIndex);
        return true;
    }

    // Finds the first unoccupied spot in a given queue list
    private int GetFirstAvailableSpotIndex(List<CustomerQueueDataContainer> queueData)
    {
        for (int i = 0; i < queueData.Count; i++)
        {
            if (queueData[i].CustomerInQueue == null)
                return i;
        }

        return -1;
    }

    // Assigns a customer to a specific queue spot
    private void AssignCustomerToQueue(CustomerController customer,
        List<CustomerQueueDataContainer> queueData,
        int spotIndex)
    {
        var data = queueData[spotIndex];
        data.CustomerInQueue = customer;
        data.IsInCorrectSpot = false;
        queueData[spotIndex] = data;

        // Start the movement toward the assigned queue position
        customer.MoveCustomer(data.QueuePoint, queueData);
    }

    // Called when a customer reaches their assigned queue spot
    public void OnCustomerReachedSpot(CustomerController customer, List<CustomerQueueDataContainer> queueData)
    {
        for (int i = 0; i < queueData.Count; i++)
        {
            if (queueData[i].CustomerInQueue == customer)
            {
                var data = queueData[i];
                data.IsInCorrectSpot = true;
                queueData[i] = data;
                
                // Switch to idle state
                EventManager.Broadcast(GameEvent.OnCustomerChangeState, customer.gameObject,
                    customer.GetIdleState(customer.HasBaggage));
                break;
            }
        }
    }

    // Returns the next customer from a queue
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

    // Shifts customers forward
    private void AdvanceQueue(int emptiedIndex, QueueType queueType)
    {
        var queueData = queues[queueType];

        for (int i = emptiedIndex + 1; i < queueData.Count; i++)
        {
            var currentData = queueData[i];
            if (currentData.CustomerInQueue == null) continue;

            var customer = currentData.CustomerInQueue;
            var newTarget = queueData[i - 1].QueuePoint;

            // Clear the current queue entry
            currentData.CustomerInQueue = null;
            currentData.IsInCorrectSpot = false;
            queueData[i] = currentData;

            // Move the customer to the new spot and update queue data
            var newData = queueData[i - 1];
            newData.CustomerInQueue = customer;
            newData.IsInCorrectSpot = false;
            queueData[i - 1] = newData;
            customer.MoveCustomer(newTarget, queueData);
        }
    }
}