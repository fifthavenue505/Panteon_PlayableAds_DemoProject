using UnityEngine;

public static class Factory
{
    private static Pool<CustomerController> customerPool;
    private static Pool<Money> moneyPool;
    private static Pool<Baggage> baggagePool;

    public static void Initialize(
        CustomerController customerPrefab, Transform customerParent, int customerPoolSize,
        Money moneyPrefab, Transform moneyParent, int moneyPoolSize,
        Baggage baggagePrefab, Transform baggageParent, int baggagePoolSize
    )
    {
        customerPool = new Pool<CustomerController>(customerPrefab, customerParent, customerPoolSize);
        moneyPool = new Pool<Money>(moneyPrefab, moneyParent, moneyPoolSize);
        baggagePool = new Pool<Baggage>(baggagePrefab, baggageParent, baggagePoolSize);
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