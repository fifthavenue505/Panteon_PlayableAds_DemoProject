using System.Collections;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

[CreateAssetMenu(fileName = "GameData", menuName = "GameData", order = 1)]
public class GameData : ScriptableObject
{
    [SerializeField] private float totalMoney;
    public float TotalMoney
    {
        get { return totalMoney; }

        set
        {
            if (value >= 0) totalMoney = value;
            if (value < 0) totalMoney = 0;
        }
    }

    [Button]
    public void ResetData()
    {
        totalMoney = 50;
    }
}