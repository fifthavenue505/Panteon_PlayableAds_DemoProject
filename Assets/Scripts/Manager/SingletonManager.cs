using UnityEngine;

public abstract class SingletonManager<T> : MonoBehaviour where T : MonoBehaviour
{
    private static T _instance;

    public static T Instance
    {
        get
        {
            if (_instance == null)
            {
                // Try to find an existing instance in the current scene
                _instance = FindObjectOfType<T>();

                // If no instance exists, create a new one
                if (_instance == null)
                {
                    GameObject singletonGameObject = new GameObject(typeof(T).Name);
                    _instance = singletonGameObject.AddComponent<T>();
                }
            }

            return _instance;
        }
    }

    protected virtual void Awake()
    {
        if (_instance == null)
        {
            _instance = this as T;
        }
        else if (_instance != this)
        {
            // Destroy duplicate manager instances
            Destroy(gameObject);
        }
    }
}