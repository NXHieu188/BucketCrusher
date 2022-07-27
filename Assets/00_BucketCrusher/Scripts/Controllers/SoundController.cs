using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundController : Singleton<SoundController>
{
    public AudioSource audioSourceFX;
    public AudioSource audioSourceBG;
    public AudioClip clipClick;
    public void PlaySounClick()
    {
        PlaySoundFX(clipClick);
    }
    void PlaySoundFX(AudioClip audioClip)
    {
        audioSourceFX.PlayOneShot(audioClip);
    }
    public void PlaySoundBG()
    {
        audioSourceBG.Play();
    }
    public void StopSound()
    {
        audioSourceBG.Stop();
        //audioSourceFX.Stop();
    }
}
