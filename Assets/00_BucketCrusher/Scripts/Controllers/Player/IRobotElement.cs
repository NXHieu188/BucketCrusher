using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IRobotElement
{
    void Accept(IRobotVisitor visitor);
}
