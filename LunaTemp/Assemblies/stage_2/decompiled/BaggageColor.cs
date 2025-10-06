using System.Collections.Generic;
using UnityEngine;

public class BaggageColor : MonoBehaviour
{
	[SerializeField]
	private Renderer rend;

	public List<Vector2> tilings = new List<Vector2>();

	private MaterialPropertyBlock mpb;

	private void Awake()
	{
		if (rend == null)
		{
			rend = GetComponentInChildren<Renderer>();
		}
		mpb = new MaterialPropertyBlock();
	}

	public void ApplyRandomColor()
	{
		if (tilings.Count != 0)
		{
			Vector2 tiling = tilings[Random.Range(0, tilings.Count)];
			rend.GetPropertyBlock(mpb);
			mpb.SetVector("_BaseMap_ST", new Vector4(tiling.x, tiling.y, 0f, 0f));
			rend.SetPropertyBlock(mpb);
		}
	}
}
