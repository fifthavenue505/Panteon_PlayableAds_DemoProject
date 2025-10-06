using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class UIManager : SingletonManager<UIManager>
{
    [Header("Money")] [SerializeField] private TextMeshProUGUI moneyText;
    [SerializeField] private GameObject moneyUiParent;

    [Header("Joystick")] [SerializeField] private FloatingJoystick joystick;
    [SerializeField] private GameObject joystickBackground;

    [Header("Brush")] [SerializeField] private GameObject boardUiSystem;
    [Header("Brush")] [SerializeField] private GameObject finishPaintUiSystem;
    [SerializeField] private MeshPainter painter;
    [SerializeField] private Slider brushSizeSlider;
    [SerializeField] private TextMeshProUGUI paintProgressText;

    [Header("Color Buttons")] [SerializeField]
    private Button[] colorButtons;

    [SerializeField] private Color[] brushColors =
    {
        Color.red,
        new Color(0.1f, 0.8f, 0.9f),
        Color.yellow
    };

    [SerializeField] private float selectedScale = 1.2f; // Scale multiplier
    [SerializeField] private float scaleDuration = 0.25f;
    private Button _selectedButton;

    protected override void Awake()
    {
        base.Awake();
        OnUpdateMoney();
    }

    private void Start()
    {
        // Initialize brush progress
        OnPaintProgressUpdated(0f);
        brushSizeSlider.onValueChanged.AddListener(BrushSizeChanged);

        // Add click listeners
        for (int i = 0; i < colorButtons.Length; i++)
        {
            int index = i;
            colorButtons[i].onClick.AddListener(() => OnColorButtonClicked(index));
        }

        if (brushColors.Length > 0)
        {
            painter.SetBrushColor(brushColors[0]);
            HighlightButton(colorButtons[0]);
        }
    }

    private void OnEnable()
    {
        EventManager.AddHandler(GameEvent.OnUpdateMoney, OnUpdateMoney);
        EventManager.AddHandler(GameEvent.OnBoardActivated, OnBoardActivated);
        EventManager.AddHandler<float>(GameEvent.OnPaintProgressUpdated, OnPaintProgressUpdated);
        EventManager.AddHandler(GameEvent.OnPaintCompleted, OnPaintCompleted);
    }

    private void OnDisable()
    {
        EventManager.RemoveHandler(GameEvent.OnUpdateMoney, OnUpdateMoney);
        EventManager.RemoveHandler(GameEvent.OnBoardActivated, OnBoardActivated);
        EventManager.RemoveHandler<float>(GameEvent.OnPaintProgressUpdated, OnPaintProgressUpdated);
        EventManager.RemoveHandler(GameEvent.OnPaintCompleted, OnPaintCompleted);
    }

    // Updates the money text
    private void OnUpdateMoney()
    {
        moneyText.text = GameManager.Instance.GetData().TotalMoney.ToString();
    }

    // Called when the painting area is activated
    private void OnBoardActivated()
    {
        moneyUiParent.SetActive(false);
        boardUiSystem.SetActive(true);
    }

    private void OnPaintProgressUpdated(float percent)
    {
        paintProgressText.text = Mathf.Round(percent) + "%";
    }

    // Called when painting is completed
    private void OnPaintCompleted()
    {
        paintProgressText.text = "100%";
        SFXManager.Instance.Play(SFXType.Congratulations);
        finishPaintUiSystem.SetActive(true);
    }

    public void ExitButton()
    {
        Application.Quit();
    }

    // --- Brush Settings ---

    // Updates brush size
    public void BrushSizeChanged(float value)
    {
        painter.SetBrushSize(value);
        EventManager.Broadcast(GameEvent.OnBrushSizeChanged, value);
    }

    private void OnColorButtonClicked(int index)
    {
        if (index < 0 || index >= brushColors.Length) return;

        painter.SetBrushColor(brushColors[index]);

        HighlightButton(colorButtons[index]);

        SFXManager.Instance.Play(SFXType.ButtonClick);
    }

    // Highlights the currently selected color button
    private void HighlightButton(Button newButton)
    {
        if (_selectedButton != null && _selectedButton != newButton)
        {
            _selectedButton.transform.DOScale(1f, scaleDuration).SetEase(Ease.OutQuad);
        }

        newButton.transform.DOScale(selectedScale, scaleDuration).SetEase(Ease.OutBack);
        _selectedButton = newButton;
    }

    // --- Joystick ---

    public FloatingJoystick GetJoystick()
    {
        return joystick;
    }

    public void SetJoystickEnabled(bool enable)
    {
        joystick.gameObject.SetActive(enable);
        joystick.ResetInput();
        joystickBackground.SetActive(false);
    }
}