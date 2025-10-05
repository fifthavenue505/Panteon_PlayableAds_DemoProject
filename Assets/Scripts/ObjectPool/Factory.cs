using System;
using System.Collections.Generic;
using UnityEngine;

public static class Factory
{
    private static Pool<CustomerController> customerPool;
    private static Pool<Money> moneyPool;
    private static Pool<Baggage> baggagePool;

    public static void Initialize(List<PoolPrefabContainer> poolPrefabContainers)
    {
        foreach (var container in poolPrefabContainers)
        {
            switch (container.PoolType)
            {
                case PoolPrefabType.Customer:
                    customerPool = new Pool<CustomerController>(container.Prefab.GetComponent<CustomerController>(), container.Parent, container.PoolSize);
                    break;
                
                case PoolPrefabType.Money:
                    moneyPool = new Pool<Money>(container.Prefab.GetComponent<Money>(), container.Parent, container.PoolSize);
                    break;
                
                case PoolPrefabType.Baggage:
                    baggagePool = new Pool<Baggage>(container.Prefab.GetComponent<Baggage>(), container.Parent, container.PoolSize);
                    break;
            }
        }
    }

    // CUSTOMER
    public static CustomerController CreateCustomer(Vector3 position, Quaternion rotation)
    {
        return customerPool.Spawn(position, rotation);
    }

    public static void ReleaseCustomer(CustomerController customer)
    {
        customerPool.Despawn(customer);
    }

    // MONEY
    public static Money CreateMoney(Vector3 position)
    {
        return moneyPool.Spawn(position, Quaternion.identity);
    }

    public static void ReleaseMoney(Money money)
    {
        money.transform.SetParent(null);
        moneyPool.Despawn(money);
    }

    // BAGGAGE
    public static Baggage CreateBaggage(Vector3 position)
    {
        return baggagePool.Spawn(position, Quaternion.identity);
    }

    public static void ReleaseBaggage(Baggage baggage)
    {
        baggagePool.Despawn(baggage);
    }
}