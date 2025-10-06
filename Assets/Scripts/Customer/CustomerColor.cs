using UnityEngine;

public class CustomerColor : MonoBehaviour
{
    [SerializeField] private Renderer rend;
    private MaterialPropertyBlock mpb; // Used to modify material properties

    private void Awake()
    {
        if (rend == null)
            rend = GetComponentInChildren<Renderer>();
        mpb = new MaterialPropertyBlock();
    }

    // Randomly assigns UV tiling offsets for each material layer using data
    public void ApplyRandomColors(CustomerData data)
    {
        if (data == null) return;

        ApplyUV(0, data.skinTilings[Random.Range(0, data.skinTilings.Count)]);
        ApplyUV(1, data.shirtTilings[Random.Range(0, data.shirtTilings.Count)]);
        ApplyUV(2, data.pantTilings[Random.Range(0, data.pantTilings.Count)]);
    }

    // Apply only the tiling (scale) part and leave offset as zero
    private void ApplyUV(int materialIndex, Vector2 tiling)
    {
        rend.GetPropertyBlock(mpb, materialIndex);
        mpb.SetVector("_BaseMap_ST", new Vector4(tiling.x, tiling.y, 0f, 0f));
        rend.SetPropertyBlock(mpb, materialIndex);
    }
}