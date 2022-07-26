using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BucketCrusher1 : Singleton<BucketCrusher1>
{
    //public BrickManager brickManager;
    public GameController gameController;
    public ArmController armController;
    public SawController sawController;
    public Conveyor conveyor;
    private void Start()
    {
        //brickManager.Init();
        armController.Init();
        sawController.Init();
        gameController.Init();
        conveyor.Init();
    }
}
