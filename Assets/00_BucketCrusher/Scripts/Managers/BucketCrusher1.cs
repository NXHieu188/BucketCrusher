using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BucketCrusher1 : Singleton<BucketCrusher1>
{
    public BrickManager brickManager;
    public GameController gameController;
    public HandController handController;
    public Conveyor conveyor;
    public GameObject joyStick;
    [HideInInspector]
    public List<Brick> lstBrick;
    public SoundController soundController;
    //UI
    public GameObject black;
    public GameObject guideChooseGroup;
    public GameObject guideDrag;

    private bool isFlagOne = false;
    [HideInInspector] public bool isEndGame;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        brickManager.Init();
        gameController.Init();
        handController.Init();
        conveyor.Init();
        InvokeRepeating("CheckWin", 1, 1);
    }
    public void CheckWin()
    {
        if (lstBrick.Count <= 0)
        {
            if (!isFlagOne)
            {
                isFlagOne = true;
                EndGame();
            }
        }
    }
    public void EndGame()
    {
        Luna.Unity.LifeCycle.GameEnded();
        black.SetActive(true);
        guideChooseGroup.SetActive(true);
        joyStick.SetActive(false);
        isEndGame = true;
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
