using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ArmController : MonoBehaviour, IRobotElement
{
    public int joints;
    public Vector3 initPosition;

    [Header("Authorized personnel only")] public GameObject jointPrefab;
    public GameObject sawPrefab;

    public void Accept(IRobotVisitor visitor)
    {
        visitor.Visit(this);
        UpdateArm();
    }

    public void Init()
    {
        UpdateArm();
    }

    private void UpdateArm()
    {
        // DESTROY ALL CHILDREN BEFORE ADDING BACK
        foreach (Transform child in transform)
            if (child.name != "conveyor")
                Destroy(child.gameObject);

        var current = AddRoot(-20, 90);

        for (int i = 1; i < joints; ++i)
        {
            var child = AddChild(current, 0, 360);
            current = child;
        }

        AddSaw(current, 0, 360);
    }

    private HingeJoint2D AddRoot(int lower, int upper)
    {
        var root = Instantiate(jointPrefab, initPosition, Quaternion.identity).GetComponent<HingeJoint2D>();
        root.transform.localScale = new Vector3(0.15f, 0.15f, 1);
        JointAngleLimits2D limits = root.limits;
        limits.min = lower;
        limits.max = upper;
        root.attachedRigidbody.constraints = RigidbodyConstraints2D.FreezePosition;
        root.limits = limits;
        root.useLimits = true;

        root.connectedAnchor = initPosition;

        root.transform.parent = gameObject.transform;
        return root;
    }

    private HingeJoint2D AddChild(HingeJoint2D parent, int lower, int upper)
    {
        var child = Instantiate(jointPrefab,
            initPosition,
            Quaternion.identity).GetComponent<HingeJoint2D>();
        child.connectedBody = parent.attachedRigidbody;

        JointAngleLimits2D limits = child.limits;
        limits.min = lower;
        limits.max = upper;
        child.limits = limits;
        child.useLimits = true;

        child.transform.parent = gameObject.transform;
        return child;
    }

    private void AddSaw(HingeJoint2D parent, int lower, int upper)
    {
        var saw = Instantiate(sawPrefab,
            initPosition + Vector3.up * 10,
            Quaternion.identity).GetComponent<HingeJoint2D>();

        saw.connectedBody = parent.attachedRigidbody;
        saw.transform.localScale = new Vector3(0.35f, 0.35f, 1);
        JointAngleLimits2D limits = saw.limits;
        limits.min = lower;
        limits.max = upper;
        saw.limits = limits;
        saw.useLimits = true;

        saw.transform.parent = gameObject.transform;
    }
}
