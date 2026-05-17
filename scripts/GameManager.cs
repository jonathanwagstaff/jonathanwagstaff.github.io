using UnityEngine;

public class GameManager : MonoBehaviour
{
    float timePassed = 0;
    public bool gameOver = false;
    SkellyScript skellyScript;

    // Update is called once per frame
    void Update()
    {
        if (gameOver)
            return;

        timePassed += Time.deltaTime;

        if (timePassed > 30)
            gameOver = true;
    }
}
