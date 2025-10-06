using System;
using UnityEngine;

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
