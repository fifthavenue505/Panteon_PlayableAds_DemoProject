using UnityEngine;

public class Money : MonoBehaviour, IPoolable
{
	[SerializeField]
	private int value = 5;

	private Vector3 initialScale;

	public int Value => value;

	private void Awake()
	{
		initialScale = base.transform.localScale;
	}

	public void OnObjectSpawn()
	{
		base.transform.localScale = initialScale;
	}

	public void OnObjectDespawn()
	{
	}
}
