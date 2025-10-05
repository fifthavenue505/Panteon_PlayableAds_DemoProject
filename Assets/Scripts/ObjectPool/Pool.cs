using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IPoolable
{
    void OnObjectSpawn();
    void OnObjectDespawn();
}

public class Pool<T> where T : Component
{
    private T prefab;
    private Transform parent;
    private Stack<T> pool = new Stack<T>();

    public Pool(T prefab, Transform parent=null, int initialSize=0)
    {
        this.prefab = prefab;
        this.parent = parent;

        for (int i = 0; i < initialSize; i++)
        {
            pool.Push(CreateNew());
        }
    }
    
    private T CreateNew()
    {
        var obj = GameObject.Instantiate(prefab, parent);
        obj.gameObject.SetActive(false);
        return obj;
    }

    public T Spawn(Vector3 position, Quaternion rotation)
    {
        var item = pool.Count > 0 ? pool.Pop() : CreateNew();
        item.transform.SetPositionAndRotation(position, rotation);
        item.gameObject.SetActive(true);
        (item as IPoolable)?.OnObjectSpawn();
        return item;
    }

    public void Despawn(T item)
    {
        (item as IPoolable)?.OnObjectDespawn();
        item.gameObject.SetActive(false);
        pool.Push(item);
    }
}