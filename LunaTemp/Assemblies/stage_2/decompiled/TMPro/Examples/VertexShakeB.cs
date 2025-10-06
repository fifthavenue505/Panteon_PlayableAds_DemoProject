using System.Collections;
using UnityEngine;

namespace TMPro.Examples
{
	public class VertexShakeB : MonoBehaviour
	{
		public float AngleMultiplier = 1f;

		public float SpeedMultiplier = 1f;

		public float CurveScale = 1f;

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
				for (int j = 0; j < lineCount; j++)
				{
					int first = textInfo.lineInfo[j].firstCharacterIndex;
					int last = textInfo.lineInfo[j].lastCharacterIndex;
					Vector3 centerOfLine = (textInfo.characterInfo[first].bottomLeft + textInfo.characterInfo[last].topRight) / 2f;
					Quaternion rotation = Quaternion.Euler(0f, 0f, Random.Range(-0.25f, 0.25f));
					for (int l = first; l <= last; l++)
					{
						if (textInfo.characterInfo[l].isVisible)
						{
							int materialIndex = textInfo.characterInfo[l].materialReferenceIndex;
							int vertexIndex = textInfo.characterInfo[l].vertexIndex;
							Vector3[] sourceVertices = textInfo.meshInfo[materialIndex].vertices;
							Vector3 charCenter = (sourceVertices[vertexIndex] + sourceVertices[vertexIndex + 2]) / 2f;
							copyOfVertices[materialIndex][vertexIndex] = sourceVertices[vertexIndex] - charCenter;
							copyOfVertices[materialIndex][vertexIndex + 1] = sourceVertices[vertexIndex + 1] - charCenter;
							copyOfVertices[materialIndex][vertexIndex + 2] = sourceVertices[vertexIndex + 2] - charCenter;
							copyOfVertices[materialIndex][vertexIndex + 3] = sourceVertices[vertexIndex + 3] - charCenter;
							float randomScale = Random.Range(0.95f, 1.05f);
							Matrix4x4 matrix2 = Matrix4x4.TRS(Vector3.one, Quaternion.identity, Vector3.one * randomScale);
							copyOfVertices[materialIndex][vertexIndex] = matrix2.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex]);
							copyOfVertices[materialIndex][vertexIndex + 1] = matrix2.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex + 1]);
							copyOfVertices[materialIndex][vertexIndex + 2] = matrix2.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex + 2]);
							copyOfVertices[materialIndex][vertexIndex + 3] = matrix2.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex + 3]);
							copyOfVertices[materialIndex][vertexIndex] += charCenter;
							copyOfVertices[materialIndex][vertexIndex + 1] += charCenter;
							copyOfVertices[materialIndex][vertexIndex + 2] += charCenter;
							copyOfVertices[materialIndex][vertexIndex + 3] += charCenter;
							copyOfVertices[materialIndex][vertexIndex] -= centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 1] -= centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 2] -= centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 3] -= centerOfLine;
							matrix2 = Matrix4x4.TRS(Vector3.one, rotation, Vector3.one);
							copyOfVertices[materialIndex][vertexIndex] = matrix2.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex]);
							copyOfVertices[materialIndex][vertexIndex + 1] = matrix2.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex + 1]);
							copyOfVertices[materialIndex][vertexIndex + 2] = matrix2.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex + 2]);
							copyOfVertices[materialIndex][vertexIndex + 3] = matrix2.MultiplyPoint3x4(copyOfVertices[materialIndex][vertexIndex + 3]);
							copyOfVertices[materialIndex][vertexIndex] += centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 1] += centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 2] += centerOfLine;
							copyOfVertices[materialIndex][vertexIndex + 3] += centerOfLine;
						}
					}
				}
				for (int k = 0; k < textInfo.meshInfo.Length; k++)
				{
					textInfo.meshInfo[k].mesh.vertices = copyOfVertices[k];
					m_TextComponent.UpdateGeometry(textInfo.meshInfo[k].mesh, k);
				}
				yield return new WaitForSeconds(0.1f);
			}
		}
	}
}
