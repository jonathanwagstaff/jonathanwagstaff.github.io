using UnityEngine;

public class BulletScript : MonoBehaviour
{
    public GameObject bullet;
    public float speed;

    void Update()
    {
        transform.Translate(0, -speed * Time.deltaTime, 0);
    }
}
