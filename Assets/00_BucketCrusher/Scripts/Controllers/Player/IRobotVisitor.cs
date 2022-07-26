using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IRobotVisitor
{
    void Visit(SawController saw);
    void Visit(ArmController arm);
    void Visit(Conveyor conveyor);
}
