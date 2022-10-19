using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class emoji : MonoBehaviour
{
    public GameObject chat1;
    public GameObject chat2;
    public GameObject chat3;
    public GameObject chat4;
    public GameObject chat5;
    public GameObject chat6;

    public void clicked1()
    {
        chat1.SetActive(true);
        chat2.SetActive(false);
        chat3.SetActive(false);
        chat4.SetActive(false);
        chat5.SetActive(false);
        chat6.SetActive(false);
    }

    public void clicked2()
    {
        chat1.SetActive(false);
        chat2.SetActive(true);
        chat3.SetActive(false);
        chat4.SetActive(false);
        chat5.SetActive(false);
        chat6.SetActive(false);
    }

    public void clicked3()
    {
        chat1.SetActive(false);
        chat2.SetActive(false);
        chat3.SetActive(true);
        chat4.SetActive(false);
        chat5.SetActive(false);
        chat6.SetActive(false);
    }

    public void clicked4()
    {
        chat1.SetActive(false);
        chat2.SetActive(false);
        chat3.SetActive(false);
        chat4.SetActive(true);
        chat5.SetActive(false);
        chat6.SetActive(false);
    }

    public void clicked5()
    {
        chat1.SetActive(false);
        chat2.SetActive(false);
        chat3.SetActive(false);
        chat4.SetActive(false);
        chat5.SetActive(true);
        chat6.SetActive(false);
    }

    public void clicked6()
    {
        chat1.SetActive(false);
        chat2.SetActive(false);
        chat3.SetActive(false);
        chat4.SetActive(false);
        chat5.SetActive(false);
        chat6.SetActive(true);
    }
}
