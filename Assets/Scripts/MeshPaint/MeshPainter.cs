using System;
using Sirenix.OdinInspector;
using UnityEngine;
using UnityEngine.EventSystems;

public class MeshPainter : MonoBehaviour
{
    [Title("References")] [SerializeField]
    private Camera cam;

    [SerializeField] private Material paintMaterial;
    [SerializeField] private Shader brushShader;
    [SerializeField] private Texture2D brushTexture;
    [SerializeField] private LayerMask boardLayerMask;
    [SerializeField] private ParticleSystem confettiParticle;

    [Title("Brush Settings")] [SerializeField]
    private Color paintColor = Color.red;

    [SerializeField] private float brushSize = 0.05f;

    [Title("Hit Indicator")] [SerializeField]
    private GameObject hitIndicator;

    [SerializeField] private Vector3 offset = Vector3.up * 0.01f;

    private RenderTexture paintRT;
    private Material brushMat;

    private float lastPercent = 0f;
    [SerializeField] private bool isReady;
    private bool isFinished;

    private Vector2? lastUV = null;

    private void Start()
    {
        paintRT = new RenderTexture(1024, 1024, 0, RenderTextureFormat.ARGB32);
        paintRT.Create();

        var prevRT = RenderTexture.active;
        RenderTexture.active = paintRT;
        GL.Clear(true, true, Color.white);
        RenderTexture.active = prevRT;

        paintMaterial.mainTexture = paintRT;

        brushMat = new Material(brushShader);
        brushMat.SetTexture("_BrushTex", brushTexture);
    }

    private void Update()
    {
        if (Input.GetMouseButton(0) && isReady)
        {
            if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject())
                return;

            Ray ray = cam.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out RaycastHit hit, 100f, boardLayerMask))
            {
                if (hitIndicator != null)
                {
                    hitIndicator.transform.position = hit.point + offset;
                    hitIndicator.transform.rotation = Quaternion.LookRotation(hit.normal);
                }

                Vector2 uv = hit.textureCoord;

                if (lastUV.HasValue)
                    PaintLine(lastUV.Value, uv);
                else
                    PaintAt(uv);

                lastUV = uv;

                float percent = GetPaintedPercentage();

                if (Mathf.Abs(percent - lastPercent) > 0.5f)
                {
                    lastPercent = percent;
                    EventManager.Broadcast(GameEvent.OnPaintProgressUpdated, percent);

                    if (Mathf.Round(percent) >= 100f && !isFinished)
                    {
                        isFinished = true;
                        confettiParticle?.Play();
                        EventManager.Broadcast(GameEvent.OnPaintCompleted);
                    }
                }
            }
        }

        if (Input.GetMouseButtonUp(0))
            lastUV = null;
    }

    private void PaintLine(Vector2 from, Vector2 to)
    {
        float distance = Vector2.Distance(from, to);
        int steps = Mathf.CeilToInt(distance / (brushSize * 0.5f));
        for (int i = 0; i <= steps; i++)
        {
            Vector2 lerped = Vector2.Lerp(from, to, i / (float)steps);
            PaintAt(lerped);
        }
    }

    private void PaintAt(Vector2 uv)
    {
        brushMat.SetVector("_BrushUV", new Vector4(uv.x, uv.y, 0, 0));
        brushMat.SetFloat("_BrushSize", brushSize);
        brushMat.SetColor("_BrushColor", paintColor);

        RenderTexture temp = RenderTexture.GetTemporary(paintRT.width, paintRT.height, 0, paintRT.format);
        Graphics.Blit(paintRT, temp);
        Graphics.Blit(temp, paintRT, brushMat);
        RenderTexture.ReleaseTemporary(temp);
    }

    public void SetBrushColor(Color color) => paintColor = color;
    public void SetBrushSize(float size) => brushSize = size;

    private float GetPaintedPercentage()
    {
        Texture2D tex = new Texture2D(paintRT.width, paintRT.height, TextureFormat.RGB24, false);
        RenderTexture.active = paintRT;
        tex.ReadPixels(new Rect(0, 0, paintRT.width, paintRT.height), 0, 0);
        tex.Apply();
        RenderTexture.active = null;

        Color[] pixels = tex.GetPixels();
        int unpainted = 0;

        for (int i = 0; i < pixels.Length; i++)
        {
            if (pixels[i].r > 0.95f && pixels[i].g > 0.95f && pixels[i].b > 0.95f)
                unpainted++;
        }

        float painted = pixels.Length - unpainted;
        float percent = (painted / pixels.Length) * 100f;

        Destroy(tex);
        return percent;
    }

    void OnBrushSizeChanged(float newSize) => SetBrushSize(newSize);
    void OnBoardActivated() => isReady = true;

    private void OnEnable()
    {
        EventManager.AddHandler<Action<float>>(GameEvent.OnBrushSizeChanged, OnBrushSizeChanged);
        EventManager.AddHandler<Action>(GameEvent.OnBoardActivated, OnBoardActivated);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler<Action<float>>(GameEvent.OnBrushSizeChanged, OnBrushSizeChanged);
        EventManager.RemoveHandler<Action>(GameEvent.OnBoardActivated, OnBoardActivated);
    }
}