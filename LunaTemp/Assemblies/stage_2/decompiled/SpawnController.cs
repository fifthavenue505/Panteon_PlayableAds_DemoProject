using System.Collections.Generic;
using UnityEngine;

public class SpawnController : MonoBehaviour
{
	public List<PoolPrefabContainer> PoolPrefabContainers = new List<PoolPrefabContainer>();

	private void Awake()
	{
		List<PoolPrefabContainer> containerList = new List<PoolPrefabContainer>
		{
			GetPoolPrefabContainer(PoolPrefabType.Customer),
			GetPoolPrefabContainer(PoolPrefabType.Money),
			GetPoolPrefabContainer(PoolPrefabType.Baggage)
		};
		Factory.Initialize(containerList);
	}

	private PoolPrefabContainer GetPoolPrefabContainer(PoolPrefabType type)
	{
		return PoolPrefabContainers.Find((PoolPrefabContainer container) => container.PoolType == type);
	}
}
