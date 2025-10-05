using System;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

public enum SFXType
{
    ImpactPop,
    ButtonClick,
    Congratulations,
    MoneyThrow,
    MoneyCollect,
}

[Serializable]
public struct SFXData
{
    [HorizontalGroup("Row", Width = 100)] [HideLabel]
    public SFXType type;

    [HorizontalGroup("Row", Width = 160)] [HideLabel]
    [HorizontalGroup("Row")]
    public AudioClip clip;

    [HorizontalGroup("Row", Width = 100)]
    [Range(0f, 1f)]
    public float volume;

    [HorizontalGroup("Row", Width = 100)]
    [Range(0.5f, 2f)]
    public float pitch;
}

public class SFXManager : SingletonManager<SFXManager>
{
    [Title("SFX Settings")]
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private List<SFXData> sfxList = new List<SFXData>();

    [Title("Pitch Controls")]
    [SerializeField, Range(0.1f, 2f)] private float currentPitch = 1f;
    [ReadOnly, SerializeField] private float defaultPitch = 1f;

    private Dictionary<SFXType, SFXData> sfxDict;

    protected override void Awake()
    {
        base.Awake();

        if (audioSource == null)
            audioSource = gameObject.AddComponent<AudioSource>();

        // Initialize dictionary
        sfxDict = new Dictionary<SFXType, SFXData>();
        foreach (var sfx in sfxList)
        {
            if (!sfxDict.ContainsKey(sfx.type))
                sfxDict.Add(sfx.type, sfx);
        }

        defaultPitch = audioSource.pitch;
        currentPitch = defaultPitch;
    }

    // Plays a sound effect, optionally increasing pitch
    public void Play(SFXType type, float pitchIncrease = 0f)
    {
        if (sfxDict.TryGetValue(type, out var sfx))
        {
            audioSource.pitch = sfx.pitch * currentPitch;
            audioSource.PlayOneShot(sfx.clip, sfx.volume);

            if (pitchIncrease > 0f)
                currentPitch = Mathf.Max(0.1f, currentPitch + pitchIncrease);
        }
    }

    public void ResetPitch()
    {
        currentPitch = defaultPitch;
    }

    // Stops all currently playing sounds and resets pitch
    public void Stop()
    {
        if (audioSource.isPlaying)
            audioSource.Stop();
        ResetPitch();
    }

    public bool IsAudioSourcePlaying()
    {
        return audioSource.isPlaying;
    }
}