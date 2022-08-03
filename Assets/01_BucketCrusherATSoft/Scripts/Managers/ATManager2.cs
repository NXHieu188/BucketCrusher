using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public enum TypeImage
{
    QuaBo,
    Donal,
    Imposter,

}
public class ATManager2 : Singleton<ATManager2>
{
    public BrickManager brickManager;
    public GameController gameController;
    public HandController handController;
    public GameObject joyStick;
    [HideInInspector] public List<Brick> lstBrick;
    public SoundController soundController;
    public SpawnCoin spawnerCoin;
    public Texture2D[] arrImageLoader;
    //UI
    public GameObject black;
    public GameObject guideChooseGroup;
    public GameObject guideDrag;


    private bool isFlagOne = false;
    [HideInInspector] public bool isEndGame;

    [Header("Luna Config")]
    [LunaPlaygroundField("TypeShape", 0, "Game Config")]
    public TypeImage typeShape;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        if (typeShape == TypeImage.QuaBo)
        {
            brickManager.imageLoader = arrImageLoader[0];
        }
        else if (typeShape == TypeImage.Donal)
        {
            brickManager.imageLoader = arrImageLoader[1];
        }
        else
        {
            brickManager.imageLoader = arrImageLoader[2];
        }
        brickManager.Init();
        gameController.Init();
        handController.Init();
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
