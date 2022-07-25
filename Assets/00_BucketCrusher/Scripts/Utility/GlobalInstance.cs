using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalInstance : Singleton<GlobalInstance>
{
    public BucketCrusher1 gameManagerInstance = BucketCrusher1.Instance;
}
