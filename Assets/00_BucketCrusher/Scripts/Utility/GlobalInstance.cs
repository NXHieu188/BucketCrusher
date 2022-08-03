using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalInstance : Singleton<GlobalInstance>
{
    public ATManager2 gameManagerInstance = ATManager2.Instance;
}
