cc.game.onStart = function() {
    
    var sys = cc.sys;
    
    if (!sys.isNative && document.getElementById("cocosLoading")) {
        
        document.body.removeChild(document.getElementById("cocosLoading"));
    }

    if (sys.isMobile && sys.browserType !== sys.BROWSER_TYPE_BAIDU
        && sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
        
        cc.view.enableAutoFullScreen(true);
    }

    cc.view.enableRetina(false);
    cc.view.adjustViewPort(true);
    cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);
    cc.view.setDesignResolutionSize(800, 1200, sys.isNative ?
            cc.ResolutionPolicy.NO_BORDER : cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    cc.LoaderScene.preload(arrayResources, function() {
    
            AudioHelper.playBackgroundMusic();
    
            cc.director.runScene(new cc.TransitionCrossFade(0.3, new HomeScene()));
        },
        this);
};

cc.game.run();
