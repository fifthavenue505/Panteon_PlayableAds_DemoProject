using UnityEngine;
using System.Collections.Generic;

public class BaggageColor : MonoBehaviour
{
    [SerializeField] private Renderer rend;

    public List<Vector2> tilings = new List<Vector2>();

    private MaterialPropertyBlock mpb; // Used to modify material properties

    private void Awake()
    {
        if (rend == null) rend = GetComponentInChildren<Renderer>();
        mpb = new MaterialPropertyBlock();
    }

    // Applies a random texture tiling offset to the baggage
    public void ApplyRandomColor()
    {
        if (tilings.Count == 0) return;

        var tiling = tilings[Random.Range(0, tilings.Count)];

        rend.GetPropertyBlock(mpb);

        // Offset (0,0)
        mpb.SetVector("_BaseMap_ST", new Vector4(tiling.x, tiling.y, 0f, 0f));

        rend.SetPropertyBlock(mpb);
    }
}