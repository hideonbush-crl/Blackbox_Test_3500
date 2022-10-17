using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class changebuttons : MonoBehaviour
{
    public GameObject addfriendbutton;
    public GameObject sendmessage;
    public GameObject removefriendbutton;
    public GameObject sendmessageBlue;
    // Start is called before the first frame update
    
    public void clicked()
    {
        if (addfriendbutton.activeInHierarchy == true)
        {
            removefriendbutton.SetActive(true);
            sendmessageBlue.SetActive(true);
            sendmessage.SetActive(false);
            addfriendbutton.SetActive(false);
        }
        else
        {
            removefriendbutton.SetActive(false);
            sendmessageBlue.SetActive(false);
            sendmessage.SetActive(true);
            addfriendbutton.SetActive(true);
        }
    }
}
