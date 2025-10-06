using System;
using System.Collections.Generic;
using UnityEngine;

public class CustomerPathController : SingletonManager<CustomerPathController>
{
	[Serializable]
	public struct CustomerPathData
	{
		public CustomerStateType customerState;

		public List<Transform> PathPoints;
	}

	public List<CustomerPathData> customerPathData;
}
