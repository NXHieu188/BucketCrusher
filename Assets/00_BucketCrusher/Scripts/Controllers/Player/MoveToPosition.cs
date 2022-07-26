using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveToPosition : ICommand
{
    private Saw controller;
    public MoveToPosition(Saw saw)
    {
        controller = saw;
    }

    public void Execute(Vector2 position)
    {
        controller.MoveToPosition(position);
    }
}
