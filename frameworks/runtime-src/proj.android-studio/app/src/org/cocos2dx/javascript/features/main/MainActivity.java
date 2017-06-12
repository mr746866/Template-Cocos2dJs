package org.cocos2dx.javascript.features.main;


import org.cocos2dx.lib.Cocos2dxActivity;
import org.cocos2dx.lib.Cocos2dxGLSurfaceView;


public class MainActivity extends Cocos2dxActivity
{
    // MARK:

    public static void shareApp()
    {

    }

    public static void showInterstitial()
    {

    }

    // MARK:

    @Override
    public Cocos2dxGLSurfaceView onCreateView()
    {
        Cocos2dxGLSurfaceView glSurfaceView = new Cocos2dxGLSurfaceView(this);
        glSurfaceView.setEGLConfigChooser(5, 6, 5, 0, 16, 8);

        return glSurfaceView;
    }
}
