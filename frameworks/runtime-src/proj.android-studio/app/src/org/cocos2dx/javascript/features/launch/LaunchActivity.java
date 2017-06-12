package org.cocos2dx.javascript.features.launch;


import org.cocos2dx.javascript.features.main.MainActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;


public class LaunchActivity extends Activity
{
    // MARK:

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);

        finish();
    }
}
