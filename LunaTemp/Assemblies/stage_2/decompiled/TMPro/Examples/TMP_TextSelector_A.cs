using UnityEngine;
using UnityEngine.EventSystems;

namespace TMPro.Examples
{
	public class TMP_TextSelector_A : MonoBehaviour, IPointerEnterHandler, IEventSystemHandler, IPointerExitHandler
	{
		private TextMeshPro m_TextMeshPro;

		private Camera m_Camera;

		private bool m_isHoveringObject;

		private int m_selectedLink = -1;

		private int m_lastCharIndex = -1;

		private int m_lastWordIndex = -1;

		private void Awake()
		{
			m_TextMeshPro = base.gameObject.GetComponent<TextMeshPro>();
			m_Camera = Camera.main;
			m_TextMeshPro.ForceMeshUpdate();
		}

		private void LateUpdate()
		{
			m_isHoveringObject = false;
			if (TMP_TextUtilities.IsIntersectingRectTransform(m_TextMeshPro.rectTransform, Input.mousePosition, Camera.main))
			{
				m_isHoveringObject = true;
			}
			if (!m_isHoveringObject)
			{
				return;
			}
			int charIndex = TMP_TextUtilities.FindIntersectingCharacter(m_TextMeshPro, Input.mousePosition, Camera.main, true);
			if (charIndex != -1 && charIndex != m_lastCharIndex && (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift)))
			{
				m_lastCharIndex = charIndex;
				int meshIndex = m_TextMeshPro.textInfo.characterInfo[charIndex].materialReferenceIndex;
				int vertexIndex2 = m_TextMeshPro.textInfo.characterInfo[charIndex].vertexIndex;
				Color32 c2 = new Color32((byte)Random.Range(0, 255), (byte)Random.Range(0, 255), (byte)Random.Range(0, 255), byte.MaxValue);
				Color32[] vertexColors2 = m_TextMeshPro.textInfo.meshInfo[meshIndex].colors32;
				vertexColors2[vertexIndex2] = c2;
				vertexColors2[vertexIndex2 + 1] = c2;
				vertexColors2[vertexIndex2 + 2] = c2;
				vertexColors2[vertexIndex2 + 3] = c2;
				m_TextMeshPro.textInfo.meshInfo[meshIndex].mesh.colors32 = vertexColors2;
			}
			int linkIndex = TMP_TextUtilities.FindIntersectingLink(m_TextMeshPro, Input.mousePosition, m_Camera);
			if ((linkIndex == -1 && m_selectedLink != -1) || linkIndex != m_selectedLink)
			{
				m_selectedLink = -1;
			}
			if (linkIndex != -1 && linkIndex != m_selectedLink)
			{
				m_selectedLink = linkIndex;
				TMP_LinkInfo linkInfo = m_TextMeshPro.textInfo.linkInfo[linkIndex];
				RectTransformUtility.ScreenPointToWorldPointInRectangle(m_TextMeshPro.rectTransform, Input.mousePosition, m_Camera, out var _);
				string linkID = linkInfo.GetLinkID();
				string text = linkID;
				if (!(text == "id_01") && text == "id_02")
				{
				}
			}
			int wordIndex = TMP_TextUtilities.FindIntersectingWord(m_TextMeshPro, Input.mousePosition, Camera.main);
			if (wordIndex != -1 && wordIndex != m_lastWordIndex)
			{
				m_lastWordIndex = wordIndex;
				TMP_WordInfo wInfo = m_TextMeshPro.textInfo.wordInfo[wordIndex];
				Vector3 wordPOS = m_TextMeshPro.transform.TransformPoint(m_TextMeshPro.textInfo.characterInfo[wInfo.firstCharacterIndex].bottomLeft);
				wordPOS = Camera.main.WorldToScreenPoint(wordPOS);
				Color32[] vertexColors = m_TextMeshPro.textInfo.meshInfo[0].colors32;
				Color32 c = new Color32((byte)Random.Range(0, 255), (byte)Random.Range(0, 255), (byte)Random.Range(0, 255), byte.MaxValue);
				for (int i = 0; i < wInfo.characterCount; i++)
				{
					int vertexIndex = m_TextMeshPro.textInfo.characterInfo[wInfo.firstCharacterIndex + i].vertexIndex;
					vertexColors[vertexIndex] = c;
					vertexColors[vertexIndex + 1] = c;
					vertexColors[vertexIndex + 2] = c;
					vertexColors[vertexIndex + 3] = c;
				}
				m_TextMeshPro.mesh.colors32 = vertexColors;
			}
		}

		public void OnPointerEnter(PointerEventData eventData)
		{
			Debug.Log("OnPointerEnter()");
			m_isHoveringObject = true;
		}

		public void OnPointerExit(PointerEventData eventData)
		{
			Debug.Log("OnPointerExit()");
			m_isHoveringObject = false;
		}
	}
}
