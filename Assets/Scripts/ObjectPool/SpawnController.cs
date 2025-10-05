using System;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

[Serializable]
public struct PoolPrefabContainer
{
    [HorizontalGroup("PoolPrefab")] [HideLabel] public PoolPrefabType PoolType;
    [HorizontalGroup("PoolPrefab")] [HideLabel] public GameObject Prefab;
    [HorizontalGroup("PoolPrefab")] [HideLabel] public Transform Parent;
    [HorizontalGroup("PoolPrefab")] [HideLabel] public int PoolSize;
}

public enum PoolPrefabType
{
    Customer,
    Money,
    Baggage
}

public class SpawnController : MonoBehaviour
{
    public List<PoolPrefabContainer> PoolPrefabContainers = new List<PoolPrefabContainer>();
    
    private void Awake()
    {
        var containerList = new List<PoolPrefabContainer>()
        {
            GetPoolPrefabContainer(PoolPrefabType.Customer),
            GetPoolPrefabContainer(PoolPrefabType.Money),
            GetPoolPrefabContainer(PoolPrefabType.Baggage)
        };
        
        Factory.Initialize(containerList);
    }
    
    private PoolPrefabContainer GetPoolPrefabContainer(PoolPrefabType type)
    {
        return PoolPrefabContainers.Find(container => container.PoolType == type);
    }
}

