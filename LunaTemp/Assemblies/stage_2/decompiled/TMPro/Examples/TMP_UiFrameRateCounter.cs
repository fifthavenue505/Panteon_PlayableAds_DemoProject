using UnityEngine;

namespace TMPro.Examples
{
	public class TMP_UiFrameRateCounter : MonoBehaviour
	{
		public enum FpsCounterAnchorPositions
		{
			TopLeft,
			BottomLeft,
			TopRight,
			BottomRight
		}

		public float UpdateInterval = 5f;

		private float m_LastInterval = 0f;

		private int m_Frames = 0;

		public FpsCounterAnchorPositions AnchorPosition = FpsCounterAnchorPositions.TopRight;

		private string htmlColorTag;

		private const string fpsLabel = "{0:2}</color> <#8080ff>FPS \n<#FF8000>{1:2} <#8080ff>MS";

		private TextMeshProUGUI m_TextMeshPro;

		private RectTransform m_frameCounter_transform;

		private FpsCounterAnchorPositions last_AnchorPosition;

		private void Awake()
		{
			if (base.enabled)
			{
				Application.targetFrameRate = 1000;
				GameObject frameCounter = new GameObject("Frame Counter");
				m_frameCounter_transform = frameCounter.AddComponent<RectTransform>();
				m_frameCounter_transform.SetParent(base.transform, false);
				m_TextMeshPro = frameCounter.AddComponent<TextMeshProUGUI>();
				m_TextMeshPro.font = Resources.Load<TMP_FontAsset>("Fonts & Materials/LiberationSans SDF");
				m_TextMeshPro.fontSharedMaterial = Resources.Load<Material>("Fonts & Materials/LiberationSans SDF - Overlay");
				m_TextMeshPro.enableWordWrapping = false;
				m_TextMeshPro.fontSize = 36f;
				m_TextMeshPro.isOverlay = true;
				Set_FrameCounter_Position(AnchorPosition);
				last_AnchorPosition = AnchorPosition;
			}
		}

		private void Start()
		{
			m_LastInterval = Time.realtimeSinceStartup;
			m_Frames = 0;
		}

		private void Update()
		{
			if (AnchorPosition != last_AnchorPosition)
			{
				Set_FrameCounter_Position(AnchorPosition);
			}
			last_AnchorPosition = AnchorPosition;
			m_Frames++;
			float timeNow = Time.realtimeSinceStartup;
			if (timeNow > m_LastInterval + UpdateInterval)
			{
				float fps = (float)m_Frames / (timeNow - m_LastInterval);
				float ms = 1000f / Mathf.Max(fps, 1E-05f);
				if (fps < 30f)
				{
					htmlColorTag = "<color=yellow>";
				}
				else if (fps < 10f)
				{
					htmlColorTag = "<color=red>";
				}
				else
				{
					htmlColorTag = "<color=green>";
				}
				m_TextMeshPro.SetText(htmlColorTag + "{0:2}</color> <#8080ff>FPS \n<#FF8000>{1:2} <#8080ff>MS", fps, ms);
				m_Frames = 0;
				m_LastInterval = timeNow;
			}
		}

		private void Set_FrameCounter_Position(FpsCounterAnchorPositions anchor_position)
		{
			switch (anchor_position)
			{
			case FpsCounterAnchorPositions.TopLeft:
				m_TextMeshPro.alignment = TextAlignmentOptions.TopLeft;
				m_frameCounter_transform.pivot = new Vector2(0f, 1f);
				m_frameCounter_transform.anchorMin = new Vector2(0.01f, 0.99f);
				m_frameCounter_transform.anchorMax = new Vector2(0.01f, 0.99f);
				m_frameCounter_transform.anchoredPosition = new Vector2(0f, 1f);
				break;
			case FpsCounterAnchorPositions.BottomLeft:
				m_TextMeshPro.alignment = TextAlignmentOptions.BottomLeft;
				m_frameCounter_transform.pivot = new Vector2(0f, 0f);
				m_frameCounter_transform.anchorMin = new Vector2(0.01f, 0.01f);
				m_frameCounter_transform.anchorMax = new Vector2(0.01f, 0.01f);
				m_frameCounter_transform.anchoredPosition = new Vector2(0f, 0f);
				break;
			case FpsCounterAnchorPositions.TopRight:
				m_TextMeshPro.alignment = TextAlignmentOptions.TopRight;
				m_frameCounter_transform.pivot = new Vector2(1f, 1f);
				m_frameCounter_transform.anchorMin = new Vector2(0.99f, 0.99f);
				m_frameCounter_transform.anchorMax = new Vector2(0.99f, 0.99f);
				m_frameCounter_transform.anchoredPosition = new Vector2(1f, 1f);
				break;
			case FpsCounterAnchorPositions.BottomRight:
				m_TextMeshPro.alignment = TextAlignmentOptions.BottomRight;
				m_frameCounter_transform.pivot = new Vector2(1f, 0f);
				m_frameCounter_transform.anchorMin = new Vector2(0.99f, 0.01f);
				m_frameCounter_transform.anchorMax = new Vector2(0.99f, 0.01f);
				m_frameCounter_transform.anchoredPosition = new Vector2(1f, 0f);
				break;
			}
		}
	}
}
