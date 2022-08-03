using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnCoin : MonoBehaviour
{
    public GameObject prefCoin;
    public void SpawnerCoin()
    {
        var coin = Instantiate(prefCoin);
        coin.transform.position = new Vector3(Random.Range(transform.position.x - 0.2f, transform.position.x + 0.2f), transform.position.y, transform.position.z);
    }
}
