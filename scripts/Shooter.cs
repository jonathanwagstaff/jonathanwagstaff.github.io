using System;
using Unity.VisualScripting;
using UnityEngine;
#if ENABLE_INPUT_SYSTEM
using UnityEngine.InputSystem;
#endif

namespace UnityStandardAssets.Characters.TopDown
{
    [Serializable]
    public class Shooter: MonoBehaviour
    {
        public GameObject player;

        void Update ()
        {
            if (Mouse.current != null)
            {
                Vector2 mousePosition = Mouse.current.position.ReadValue();
                Vector2 direction = mousePosition - new Vector2(Screen.width / 2f, Screen.height / 2f);
                float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
                Quaternion rotation = Quaternion.Euler(0f, 0f, angle);

                player.transform.rotation = rotation;
            }
        }
    }
}