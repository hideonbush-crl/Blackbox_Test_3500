using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class change : MonoBehaviour
{
    public GameObject uerinfo;

    public void clicked()
    {
        if (uerinfo.activeInHierarchy == true)
        {
            uerinfo.SetActive(false);
        }
        else
        {
            uerinfo.SetActive(true);
        }
    }
}
