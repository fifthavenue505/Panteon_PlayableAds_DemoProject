using System;
using UnityEngine;

[Serializable]
public struct CustomerQueueDataContainer
{
	public Transform QueuePoint;

	public CustomerController CustomerInQueue;

	public bool IsInCorrectSpot;
}
