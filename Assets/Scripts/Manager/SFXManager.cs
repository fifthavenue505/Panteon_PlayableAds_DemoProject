using System;
using System.Collections.Generic;
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
    public SFXType type;

    public AudioClip clip;

    [Range(0f, 1f)]
    public float volume;

    [Range(0.5f, 2f)]
    public float pitch;
}

public class SFXManager : SingletonManager<SFXManager>
{
    [Header("SFX Settings")]
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private List<SFXData> sfxList = new List<SFXData>();

    [Header("Pitch Controls")]
    [SerializeField, Range(0.1f, 2f)] private float currentPitch = 1f;
    [SerializeField] private float defaultPitch = 1f;

    private Dictionary<SFXType, SFXData> sfxDict= new Dictionary<SFXType, SFXData>();

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