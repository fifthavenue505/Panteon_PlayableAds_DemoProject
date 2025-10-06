using UnityEngine;

[CreateAssetMenu(fileName = "GameData", menuName = "GameData", order = 1)]
public class GameData : ScriptableObject
{
	[SerializeField]
	private float totalMoney;

	public float TotalMoney
	{
		get
		{
			return totalMoney;
		}
		set
		{
			if (value >= 0f)
			{
				totalMoney = value;
			}
			if (value < 0f)
			{
				totalMoney = 0f;
			}
		}
	}

	public void ResetData()
	{
		totalMoney = 50f;
	}
}
