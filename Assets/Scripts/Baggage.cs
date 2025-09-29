using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Baggage : MonoBehaviour,IPoolable
{
    public void OnObjectSpawn()
    {
        Debug.Log("Baggage Spawned");
    }

    public void OnObjectDespawn()
    {
        Debug.Log("Baggage Despawned");
    }
}
