var JsBridge = {

    // MARK:
    
    shareApp: function() {
    
        if (cc.sys.os == cc.sys.OS_IOS) {
        
            jsb.reflection.callStaticMethod("IosBridge", "shareApp");
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID) {
        
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/helpers/AndroidBridge", 
                    "shareApp", "()V");
        }
    },

    showInterstitial: function() {
    
        if (cc.sys.os == cc.sys.OS_IOS) {
        
            jsb.reflection.callStaticMethod("IosBridge", "showInterstitial");
        }
        else if (cc.sys.os == cc.sys.OS_ANDROID) {
        
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/helpers/AndroidBridge",
                    "showInterstitial", "()V");
        }
    }
};
