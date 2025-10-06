using UnityEngine;

public abstract class SingletonManager<T> : MonoBehaviour where T : MonoBehaviour
{
	private static T _instance;

	public static T Instance
	{
		get
		{
			if ((Object)_instance == (Object)null)
			{
				_instance = Object.FindObjectOfType<T>();
				if ((Object)_instance == (Object)null)
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
		if ((Object)_instance == (Object)null)
		{
			_instance = this as T;
		}
		else if (_instance != this)
		{
			Object.Destroy(base.gameObject);
		}
	}
}
