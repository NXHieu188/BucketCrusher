using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Conveyor : MonoBehaviour
{
    public GameObject conveyor;

    public int length;

    public void Init()
    {
        UpdateConveyor();
    }

    public void Accept(IRobotVisitor visitor)
    {
        visitor.Visit(this);
        UpdateConveyor();
    }

    private void UpdateConveyor()
    {
        Resize(length, Vector3.right);
    }

    private void Resize(float amount, Vector3 direction)
    {
        conveyor.transform.position += direction * amount / 2;
        conveyor.transform.localScale += direction * amount;
    }
}
