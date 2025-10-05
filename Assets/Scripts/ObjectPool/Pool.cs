using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IPoolable
{
    void OnObjectSpawn();
    void OnObjectDespawn();
}

// Generic object pooling system
public class Pool<T> where T : Component
{
    private T prefab;
    private Transform parent;
    private Stack<T> pool = new Stack<T>();

    // Constructor to initialize the pool with a prefab
    public Pool(T prefab, Transform parent=null, int initialSize=0)
    {
        this.prefab = prefab;
        this.parent = parent;

        for (int i = 0; i < initialSize; i++)
        {
            pool.Push(CreateNew());
        }
    }
    
    // Instantiates a new object, disables it
    private T CreateNew()
    {
        var obj = GameObject.Instantiate(prefab, parent);
        obj.gameObject.SetActive(false);
        return obj;
    }

    // Get an available object from the pool or creates a new one
    public T Spawn(Vector3 position, Quaternion rotation)
    {
        var item = pool.Count > 0 ? pool.Pop() : CreateNew();
        item.transform.SetPositionAndRotation(position, rotation);
        item.gameObject.SetActive(true);
        (item as IPoolable)?.OnObjectSpawn();
        return item;
    }

    // Returns an object to the pool
    public void Despawn(T item)
    {
        (item as IPoolable)?.OnObjectDespawn();
        item.gameObject.SetActive(false);
        pool.Push(item);
    }
}