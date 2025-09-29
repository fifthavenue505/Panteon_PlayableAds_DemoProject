using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class Factory
{
    private static Pool<CustomerController> customerPool;
    private static Pool<Money> moneyPool;
    private static Pool<Baggage> baggagePool;
    
    public static void Initialize(CustomerController customerPrefab, Money moneyPrefab, Baggage baggagePrefab, Transform parent = null)
    {
        customerPool = new Pool<CustomerController>(customerPrefab, parent, 6);
        moneyPool = new Pool<Money>(moneyPrefab, parent, 20);
        baggagePool = new Pool<Baggage>(baggagePrefab, parent, 6);
    }
    
    // CUSTOMER
    public static CustomerController CreateCustomer(Vector3 position)
    {
        return customerPool.Spawn(position, Quaternion.identity);
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