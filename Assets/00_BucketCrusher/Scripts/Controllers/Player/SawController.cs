using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SawController : MonoBehaviour, IRobotElement
{
    private GameObject saw;

    public float size;
    public float rotationSpeed;
    public int durability;

    [Header("Default value. These values are in-game un-upgradable")]
    public float movementSpeed;
    public float mass;

    public void Init()
    {
        saw = transform.Find("Saw(Clone)").gameObject;

        // ONE TIME CALL
        saw.GetComponent<Saw>().SetMovementSpeed(movementSpeed);
        saw.GetComponent<Rigidbody2D>().mass = mass;
        UpdateSaw();
    }

    public void Accept(IRobotVisitor visitor)
    {
        visitor.Visit(this);
        UpdateSaw();
    }

    private void UpdateSaw()
    {
        // SIZE
        saw.transform.localScale = Vector3.one * size;

        // ROTATION SPEED
        saw.GetComponent<Animator>().speed = rotationSpeed;

        // DURABILITY
        saw.GetComponent<Saw>().SetDurability(durability);
    }
}
