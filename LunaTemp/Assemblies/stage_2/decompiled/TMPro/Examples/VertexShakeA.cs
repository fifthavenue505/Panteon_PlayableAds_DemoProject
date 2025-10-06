using System.Collections;
using UnityEngine;

namespace TMPro.Examples
{
	public class VertexShakeA : MonoBehaviour
	{
		public float AngleMultiplier = 1f;

		public float SpeedMultiplier = 1f;

		public float ScaleMultiplier = 1f;

		public float RotationMultiplier = 1f;

		private TMP_Text m_TextComponent;

		private bool hasTextChanged;

		private void Awake()
		{
			m_TextComponent = GetComponent<TMP_Text>();
		}

		private void OnEnable()
		{
			TMPro_EventManager.TEXT_CHANGED_EVENT.Add(ON_TEXT_CHANGED);
		}

		private void OnDisable()
		{
			TMPro_EventManager.TEXT_CHANGED_EVENT.Remove(ON_TEXT_CHANGED);
		}

		private void Start()
		{
			StartCoroutine(AnimateVertexColors());
		}

		private void ON_TEXT_CHANGED(Object obj)
		{
			if ((bool)(obj = m_TextComponent))
			{
				hasTextChanged = true;
			}
		}

		private IEnumerator AnimateVertexColors()
		{
			m_TextComponent.ForceMeshUpdate();
			TMP_TextInfo textInfo = m_TextComponent.textInfo;
			Vector3[][] copyOfVertices = new Vector3[0][];
			hasTextChanged = true;
			while (true)
			{
				if (hasTextChanged)
				{
					if (copyOfVertices.Length < textInfo.meshInfo.Length)
					{
						copyOfVertices = new Vector3[textInfo.meshInfo.Length][];
					}
					for (int i = 0; i < textInfo.meshInfo.Length; i++)
					{
						int length = textInfo.meshInfo[i].vertices.Length;
						copyOfVertices[i] = new Vector3[length];
					}
					hasTextChanged = false;
				}
				if (textInfo.characterCount == 0)
				{
					yield return new WaitForSeconds(0.25f);
					continue;
				}
				int lineCount = textInfo.lineCount;
				for (int k = 0; k < lineCount; k++)
				{
					int first = textInfo.lineInfo[k].firstCharacterIndex;
					int last = textInfo.lineInfo[k].lastCharacterIndex;
					Vector3 centerOfLine = (textInfo.characterInfo[first].bottomLeft + textInfo.characterInfo[last].topRight) / 2f;
					Quaternion rotation = Quaternion.Euler(0f, 0f, Random.Range(-0.25f, 0.25f) * RotationMultiplier);
					for (int l = first; l <= last; l++)
					{
						if (textInfo.characterInfo[l].isVisible)
						{
							int materialIndex = textInfo.characterInfo[l].materialReferenceIndex;
							int vertexIndex = textInfo.characterInfo[l].vertexIndex;
							Vector3[] sourceVertices = textInfo.meshInfo[materialIndex].vertices;
							copyOfVertices[materialIndex][vertexIndex] = sourceVertices[vertexIndex] - centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 1] = sourceVertices[vertexIndex + 1] - centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 2] = sourceVertices[vertexIndex + 2] - centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 3] = sourceVertices[vertexIndex + 3] - centerOfLine;
							float randomScale = Random.Range(0.995f - 0.001f * ScaleMultiplier, 1.005f + 0.001f * ScaleMultiplier);
							Matrix4x4 matrix = Matrix4x4.TRS(Vector3.one, rotation, Vector3.one * randomScale);
							copyOfVertices[materialIndex][vertexIndex] = matrix.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex]);
							copyOfVertices[materialIndex][vertexIndex + 1] = matrix.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex + 1]);
							copyOfVertices[materialIndex][vertexIndex + 2] = matrix.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex + 2]);
							copyOfVertices[materialIndex][vertexIndex + 3] = matrix.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex + 3]);
							copyOfVertices[materialIndex][vertexIndex] += centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 1] += centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 2] += centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 3] += centerOfLine;
						}
					}
				}
				for (int j = 0; j < textInfo.meshInfo.Length; j++)
				{
					textInfo.meshInfo[j].mesh.vertices = copyOfVertices[j];
					m_TextComponent.UpdateGeometry(textInfo.meshInfo[j].mesh, j);
				}
				yield return new WaitForSeconds(0.1f);
			}
		}
	}
}
