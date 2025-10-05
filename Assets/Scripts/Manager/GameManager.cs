using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : SingletonManager<GameManager>
{
    [SerializeField] private GameData gameData;
    
    void Start()
    {
        Application.targetFrameRate = 60;
        GetData().ResetData();
    }
    
    public GameData GetData()
    {
        return gameData;
    }
}
