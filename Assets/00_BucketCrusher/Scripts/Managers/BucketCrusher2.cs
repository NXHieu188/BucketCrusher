using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
public class BucketCrusher2 : MonoBehaviour
{
    public BrickManager brickManager;
    public List<GameObject> lstSaw;
    //public List<GameObject> lstYellowBorder;
    public List<MeshRenderer> lstTruc;
    public List<MeshRenderer> lstTam;
    public List<MeshRenderer> lstBorder;

    public List<Material> lstMateCaptain;
    public List<Material> lstMateCandy;
    public List<Material> lstWindMill;
    public SoundController soundControll;
    //UI
    public GameObject guideChooseGroup;
    public GameObject guideDrag;

    bool isChoosed = false;
    bool isEndGame = false;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        brickManager.Init();
        AnimationCap();
    }
    void AnimationCap()
    {
        if (isChoosed)
            return;
        ChangeCaptain();
        StartCoroutine(HelperUtility.StartAction(AnimationCandy, 1.15f));
    }
    void AnimationCandy()
    {
        if (isChoosed)
            return;
        ChangeCandy();
        StartCoroutine(HelperUtility.StartAction(AnimationWillMid, 1.15f));
    }
    void AnimationWillMid()
    {
        if (isChoosed)
            return;
        ChangeWildMill();
        StartCoroutine(HelperUtility.StartAction(AnimationCap, 0.7f));
    }
    void ChangeCaptain()
    {
        lstSaw[0].SetActive(true);
        lstSaw[1].SetActive(false);
        lstSaw[2].SetActive(false);
        for (int i = 0; i < lstTam.Count; i++)
        {
            lstTam[i].material = lstMateCaptain[0];
        }
        for (int i = 0; i < lstBorder.Count; i++)
        {
            lstBorder[i].material = lstMateCaptain[1];
        }
        for (int i = 0; i < lstTruc.Count; i++)
        {
            lstTruc[i].material = lstMateCaptain[2];
        }
    }
    void ChangeCandy()
    {
        lstSaw[0].SetActive(false);
        lstSaw[1].SetActive(true);
        lstSaw[2].SetActive(false);
        for (int i = 0; i < lstTam.Count; i++)
        {
            lstTam[i].material = lstMateCandy[0];
        }
        for (int i = 0; i < lstBorder.Count; i++)
        {
            lstBorder[i].material = lstMateCandy[1];
        }
        for (int i = 0; i < lstTruc.Count; i++)
        {
            lstTruc[i].material = lstMateCandy[2];
        }
    }
    void ChangeWildMill()
    {
        lstSaw[0].SetActive(false);
        lstSaw[1].SetActive(false);
        lstSaw[2].SetActive(true);
        for (int i = 0; i < lstTam.Count; i++)
        {
            lstTam[i].material = lstWindMill[0];
        }
        for (int i = 0; i < lstBorder.Count; i++)
        {
            lstBorder[i].material = lstWindMill[1];
        }
        for (int i = 0; i < lstTruc.Count; i++)
        {
            lstTruc[i].material = lstWindMill[2];
        }
    }
    private void Update()
    {
        if (isEndGame)
        {
            if (Input.GetMouseButtonDown(0))
            {
                InstallFullGame();
            }
        }
    }
    public void ChooseCaptain()
    {
        guideChooseGroup.SetActive(false);
        Luna.Unity.Analytics.LogEvent("Choose Saw Captian", 0);
        ChangeCaptain();
        guideDrag.SetActive(true);
        guideDrag.GetComponent<Animation>().Play();
        soundControll.PlaySounClick();
        EndGame();
    }
    public void ChooseCandy()
    {
        guideChooseGroup.SetActive(false);
        Luna.Unity.Analytics.LogEvent("Choose Saw Candy", 0);
        ChangeCandy();
        guideDrag.SetActive(true);
        guideDrag.GetComponent<Animation>().Play();
        soundControll.PlaySounClick();
        EndGame();
    }
    public void ChooseWindMill()
    {
        guideChooseGroup.SetActive(false);
        Luna.Unity.Analytics.LogEvent("Choose Saw WindMill", 0);
        ChangeWildMill();
        guideDrag.SetActive(true);
        guideDrag.GetComponent<Animation>().Play();
        soundControll.PlaySounClick();
        EndGame();
    }
    void EndGame()
    {
        Luna.Unity.LifeCycle.GameEnded();
        isEndGame = true;
        isChoosed = true;
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
