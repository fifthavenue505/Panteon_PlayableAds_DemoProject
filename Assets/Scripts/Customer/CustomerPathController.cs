using System;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

public class CustomerPathController : SingletonManager<CustomerPathController>
{
    [Serializable]
    public struct CustomerPathData
    {
        [HorizontalGroup("CustomerData")] public CustomerStateType customerState;
        [HorizontalGroup("CustomerData")] public List<Transform> PathPoints;
    }
    
    public List<CustomerPathData> customerPathData;
}