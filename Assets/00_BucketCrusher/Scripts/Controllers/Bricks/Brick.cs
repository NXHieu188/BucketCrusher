using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Brick : MonoBehaviour
{
    private Rigidbody rb;

    [HideInInspector] public bool broken;
    private bool collidedWithConveyor;
    private int hp;
    private bool isFlagOne;
    private Brick brick;
    public void SetHp(int newHp)
    {
        hp = newHp;
    }

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
        brick = GetComponent<Brick>();
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag(NameTag.Saw))
            hp -= 1;
        if (other.gameObject.CompareTag(NameTag.Destroyer))
        {
            Destroy(gameObject);
            BrickManager.onBrickDestroyed?.Invoke(Rarity.Brick);
            GlobalInstance.Instance.gameManagerInstance.spawnerCoin.SpawnerCoin();
        }
    }
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag(NameTag.Saw))
            hp -= 1;
        else if (collision.gameObject.CompareTag(NameTag.Conveyor))
        {
            collidedWithConveyor = true;
        }
    }
    private void Update()
    {
        // if (_broken && _isInMagneticField) {
        //     Vector2 direction = -(transform.position - BrickManager.Instance.GetCleanerPosition()).normalized;
        //     _rb.velocity = direction * (10f * (Time.time / _timeStampPerMagneticField));
        // }

        if (broken)
        {
            if (collidedWithConveyor)
                rb.velocity = Vector3.left * (200f * Time.deltaTime);
        }
        // DEBUNK BRICK IF HP IS LESS THAN 0
        else if (hp <= 0)
        {
            Debunk();
        }
    }

    private void Debunk()
    {
        if (!isFlagOne)
        {
            isFlagOne = true;
            GlobalInstance.Instance.gameManagerInstance.lstBrick.Remove(brick);
        }
        GlobalInstance.Instance.gameManagerInstance.soundController.PlaySounCrash();
        // MARK AS BROKEN TO PREVENT FROM INCOMING CALLS
        broken = true;

        // MARK AS DYNAMIC, ALLOWING FORCE AND TORQUE
        rb.useGravity = true;
        rb.isKinematic = false;
        //rb.AddTorque(Random.Range(0, .2f), ForceMode2D.Impulse);
        rb.AddForce(new Vector3(Random.Range(-.5f, 0f), .1f, 0), ForceMode.Impulse);
        rb.AddTorque(new Vector3(Random.Range(0, .2f), .1f, 0), ForceMode.Impulse);
    }
}
