using UnityEngine;

public class SpawnScript : MonoBehaviour
{
    float spawnRate = 1;
    GameManager gameManager;
    public Transform gun;
    public GameObject bulletPrefab;

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetButtonDown("Fire"))
        {
            GameObject bullet = Instantiate(bulletPrefab, gun.position, gun.rotation);
        }
    }
}
