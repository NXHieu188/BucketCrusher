using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HandController : MonoBehaviour
{
    public GameObject target;

    public float speedMove;
    private Rigidbody targetRigid;
    private bool isFlagOne;
    public void Init()
    {
        targetRigid = target.GetComponent<Rigidbody>();
    }
    private void Update()
    {
        if (Input.GetMouseButtonDown(0) && GlobalInstance.Instance.gameManagerInstance.isEndGame)
        {
            GlobalInstance.Instance.gameManagerInstance.InstallFullGame();
        }
    }
    private void FixedUpdate()
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isEndGame)
        {
            MovingTarget();
        }
        else
        {
            targetRigid.velocity = Vector3.zero;
        }
    }
    void MovingTarget()
    {
        //float distance_to_screen = Camera.main.WorldToScreenPoint(target.transform.position).z;
        //Vector3 pos_move = Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, distance_to_screen));
        //target.transform.position = Vector3.Lerp(target.transform.position, new Vector3(pos_move.x, pos_move.y, target.transform.position.z), speedMove * Time.deltaTime);
        var a = UltimateJoystick.GetHorizontalAxis(DefineHelper.JoyStick) * speedMove;
        var b = UltimateJoystick.GetVerticalAxis(DefineHelper.JoyStick) * speedMove;
        if (Input.GetMouseButtonDown(0))
        {
            if (!isFlagOne)
            {
                isFlagOne = true;
                GlobalInstance.Instance.gameManagerInstance.guideDrag.SetActive(false);
            }
        }
        if (Input.GetMouseButton(0))
        {
            if ((a != 0) || (b != 0))
            {
                //Vector3 vector = Vector3.zero;
                //vector = new Vector3(a, b, 0).normalized;
                targetRigid.velocity = new Vector3(a, b, 0);
            }
        }
        if (Input.GetMouseButtonUp(0))
        {
            targetRigid.velocity = Vector3.zero;
        }
    }
}
