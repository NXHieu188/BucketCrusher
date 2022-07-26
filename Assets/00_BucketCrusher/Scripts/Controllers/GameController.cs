using UnityEngine;

public class GameController : MonoBehaviour
{
    private ICommand moveToPosition;
    private Saw saw;
    public UltimateJoystick ultiJoyStick;
    public void Init()
    {
        saw = FindObjectOfType<Saw>();
        moveToPosition = new MoveToPosition(saw);
    }
    void Update()
    {
        var input = new Vector2(UltimateJoystick.GetHorizontalAxis(DefineHelper.JoyStick), UltimateJoystick.GetVerticalAxis(DefineHelper.JoyStick));

        moveToPosition.Execute(input);
    }
}
