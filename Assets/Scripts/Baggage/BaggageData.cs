using UnityEngine;

[CreateAssetMenu(fileName = "BaggageData", menuName = "Game Data/Baggage Data", order = 1)]
public class BaggageData : ScriptableObject
{
    [Header("Baggage Settings")]
    [SerializeField] private float stackOffsetY = 0.42f; // Vertical offset used when stacking baggage objects

    [SerializeField] private float jumpPower = 1f;
    [SerializeField] private float jumpDuration = 0.5f;

    public float StackOffsetY => stackOffsetY;
    public float JumpPower => jumpPower;
    public float JumpDuration => jumpDuration;
}