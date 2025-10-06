using UnityEngine;

public class GameManager : SingletonManager<GameManager>
{
	[SerializeField]
	private GameData gameData;

	private void Start()
	{
		Application.targetFrameRate = 60;
		GetData().ResetData();
	}

	public GameData GetData()
	{
		return gameData;
	}
}
