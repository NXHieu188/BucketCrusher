using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
public class BucketCrusher2 : MonoBehaviour
{
    public BrickManager brickManager;
    public List<GameObject> lstSaw;
    public List<GameObject> lstYellowBorder;
    public List<MeshRenderer> lstTruc;
    public List<MeshRenderer> lstTam;
    public List<MeshRenderer> lstBorder;

    public List<Material> lstMateCaptain;
    public List<Material> lstMateCandy;
    public List<Material> lstWindMill;

    bool isEndGame = false;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        brickManager.Init();
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

    }
    public void ChooseCandy()
    {

    }
    public void ChooseWindMill()
    {

    }
    void EndGame()
    {
        Luna.Unity.LifeCycle.GameEnded();
        isEndGame = true;
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
