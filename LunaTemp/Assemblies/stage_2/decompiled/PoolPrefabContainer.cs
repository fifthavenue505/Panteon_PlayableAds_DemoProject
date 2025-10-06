using System;
using UnityEngine;

[Serializable]
public struct PoolPrefabContainer
{
	public PoolPrefabType PoolType;

	public GameObject Prefab;

	public Transform Parent;

	public int PoolSize;
}
