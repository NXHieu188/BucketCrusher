using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Saw : MonoBehaviour
{
    private Rigidbody2D rb;

    // public float radius;
    private float movementSpeed;
    private int durability;

    private float timer = 1f;
    private float reset = 1f;
    private bool isCollingBrick;

    public void SetMovementSpeed(float newMovementSpeed)
    {
        movementSpeed = newMovementSpeed;
    }

    public void SetDurability(int newDurability)
    {
        durability = newDurability;
    }

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    public void MoveToPosition(Vector2 position)
    {
        if (position == Vector2.zero)
            rb.constraints = RigidbodyConstraints2D.FreezeAll;
        else
        {
            rb.constraints = RigidbodyConstraints2D.None;

            Vector3 movePosition = Vector3.MoveTowards(transform.position,
                position.normalized * 99, Time.deltaTime * movementSpeed);

            rb.MovePosition(movePosition);
        }
    }

    private void FixedUpdate()
    {
        if (isCollingBrick)
        {
            timer -= Time.fixedDeltaTime;

            if (timer <= 0)
            {
                //if (_durability-- < 0)
                    //GameManager.Instance.UpdateGameState(GameState.Lose);
                timer = reset;
                // Debug.Log(_durability);
            }
        }
    }

    private void OnTriggerEnter2D(Collider2D col)
    {
        if (col.gameObject.CompareTag("Brick"))
            isCollingBrick = true;
    }

    private void OnTriggerExit2D(Collider2D col)
    {
        if (col.gameObject.CompareTag("Brick"))
            isCollingBrick = false;
    }
}
