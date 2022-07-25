using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Brick : MonoBehaviour
{
    private Rigidbody2D rb;

    private bool broken;
    private bool collidedWithConveyor;
    private int hp;

    public void SetHp(int newHp)
    {
        hp = newHp;
    }

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    private void OnTriggerEnter2D(Collider2D col)
    {
        if (col.gameObject.CompareTag("Inner Saw"))
            hp -= 30;
        if (col.gameObject.CompareTag("Destroyer"))
        {
            Destroy(gameObject);

            // INVOKE OnBrickDestroyed EVENT FOR CoinManager TO GET COINS
            BrickManager.onBrickDestroyed?.Invoke(Rarity.Brick);
        }
    }

    private void OnCollisionEnter2D(Collision2D col)
    {
        if (col.gameObject.CompareTag("Inner Saw"))
            hp -= 30;
        else if (col.gameObject.CompareTag("Conveyor"))
            collidedWithConveyor = true;
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
                rb.velocity = Vector2.left * (200f * Time.deltaTime);
        }
        // DEBUNK BRICK IF HP IS LESS THAN 0
        else if (hp <= 0)
            Debunk();
    }

    private void Debunk()
    {
        // MARK AS BROKEN TO PREVENT FROM INCOMING CALLS
        broken = true;

        // MARK AS DYNAMIC, ALLOWING FORCE AND TORQUE
        rb.bodyType = RigidbodyType2D.Dynamic;

        rb.AddForce(new Vector2(Random.Range(-.2f, 0f), .1f), ForceMode2D.Impulse);
        rb.AddTorque(Random.Range(0, .2f), ForceMode2D.Impulse);
    }
}
