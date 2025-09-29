using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : SingletonManager<GameManager>
{
    [SerializeField] private GameData gameData;
    public GameData Data => gameData;
    
    // Start is called before the first frame update
    void Start()
    {
        Data.ResetData();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
