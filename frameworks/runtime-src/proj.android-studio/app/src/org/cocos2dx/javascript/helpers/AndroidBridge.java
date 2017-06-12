package org.cocos2dx.javascript.helpers;


import org.cocos2dx.javascript.features.main.MainActivity;


public class AndroidBridge
{
    // MARK:

    public static void shareApp()
    {
        MainActivity.shareApp();
    }

    public static void showInterstitial()
    {
        MainActivity.showInterstitial();
    }
}
