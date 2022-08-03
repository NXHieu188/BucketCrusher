using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ATManager1 : Singleton<ATManager1>
{
    public BrickManager brickManager;
    public List<GameObject> lstSaw;
    public SoundController soundController;
    public List<Brick> lstBrick;
    //UI
    public GameObject guideChooseGroup;
    public GameObject guideDrag;

    public bool isChoosed = false;
    public bool isEndGame = false;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        brickManager.Init();
        AnimationHuggy();
    }
    void AnimationHuggy()
    {
        if (isChoosed)
            return;
        ChangeSaw(true, false, false);
        StartCoroutine(HelperUtility.StartAction(AnimationSpiderMan, 1.15f));
    }
    void AnimationSpiderMan()
    {
        if (isChoosed)
            return;
        ChangeSaw(false, true, false);
        StartCoroutine(HelperUtility.StartAction(AnimationFrankenStein, 1.15f));
    }
    void AnimationFrankenStein()
    {
        if (isChoosed)
            return;
        ChangeSaw(false, false, true);
        StartCoroutine(HelperUtility.StartAction(AnimationHuggy, 0.7f));
    }
    void ChangeSaw(bool saw1, bool saw2, bool saw3)
    {
        lstSaw[0].SetActive(saw1);
        lstSaw[1].SetActive(saw2);
        lstSaw[2].SetActive(saw3);
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
    public void ChooseHuggy()
    {
        guideChooseGroup.SetActive(false);
        Luna.Unity.Analytics.LogEvent("Choose Saw Huggy", 0);
        ChangeSaw(true, false, false);
        guideDrag.SetActive(true);
        guideDrag.GetComponent<Animation>().Play();
        soundController.PlaySounClick();
        EndGame();
    }
    public void ChooseSpiderMan()
    {
        guideChooseGroup.SetActive(false);
        Luna.Unity.Analytics.LogEvent("Choose Saw SpiderMan", 0);
        ChangeSaw(false, true, false);
        guideDrag.SetActive(true);
        guideDrag.GetComponent<Animation>().Play();
        soundController.PlaySounClick();
        EndGame();
    }
    public void ChooseFrankenStein()
    {
        guideChooseGroup.SetActive(false);
        Luna.Unity.Analytics.LogEvent("Choose Saw Frankenstein", 0);
        ChangeSaw(false, false, true);
        guideDrag.SetActive(true);
        guideDrag.GetComponent<Animation>().Play();
        soundController.PlaySounClick();
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
