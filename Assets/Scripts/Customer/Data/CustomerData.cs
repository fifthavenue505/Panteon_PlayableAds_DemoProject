using UnityEngine;
using System.Collections.Generic;
using Sirenix.OdinInspector;

[CreateAssetMenu(fileName = "CustomerData", menuName = "Game Data/Customer Data", order = 0)]
public class CustomerData : ScriptableObject
{
    [Title("Movement Settings")]
    [Min(0.1f)] public float speed = 5f;

    [Title("Color Variants")]
    public List<Vector2> skinTilings = new();
    public List<Vector2> shirtTilings = new();
    public List<Vector2> pantTilings = new();
}