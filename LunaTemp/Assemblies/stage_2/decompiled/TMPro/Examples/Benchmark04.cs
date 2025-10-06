using UnityEngine;

namespace TMPro.Examples
{
	public class Benchmark04 : MonoBehaviour
	{
		public int SpawnType = 0;

		public int MinPointSize = 12;

		public int MaxPointSize = 64;

		public int Steps = 4;

		private Transform m_Transform;

		private void Start()
		{
			m_Transform = base.transform;
			float lineHeight = 0f;
			float num2 = (Camera.main.orthographicSize = Screen.height / 2);
			float orthoSize = num2;
			float ratio = (float)Screen.width / (float)Screen.height;
			for (int i = MinPointSize; i <= MaxPointSize; i += Steps)
			{
				if (SpawnType == 0)
				{
					GameObject go = new GameObject("Text - " + i + " Pts");
					if (lineHeight > orthoSize * 2f)
					{
						break;
					}
					go.transform.position = m_Transform.position + new Vector3(ratio * (0f - orthoSize) * 0.975f, orthoSize * 0.975f - lineHeight, 0f);
					TextMeshPro textMeshPro = go.AddComponent<TextMeshPro>();
					textMeshPro.rectTransform.pivot = new Vector2(0f, 0.5f);
					textMeshPro.enableWordWrapping = false;
					textMeshPro.extraPadding = true;
					textMeshPro.isOrthographic = true;
					textMeshPro.fontSize = i;
					textMeshPro.text = i + " pts - Lorem ipsum dolor sit...";
					textMeshPro.color = new Color32(byte.MaxValue, byte.MaxValue, byte.MaxValue, byte.MaxValue);
					lineHeight += (float)i;
				}
			}
		}
	}
}
