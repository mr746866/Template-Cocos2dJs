var HomeLayer = cc.Layer.extend({

    _itemSpritePlay: null,
    
    ctor: function() {
        
        this._super();

        LayoutHelper.initialize();
        
        this._setupBackgrounds();
        this._setupLabels();
        this._setupControls();
        this._setupDecorations();
        this._setupListeners();

        return true;
    },
    
    // MARK:

    onEnterTransitionDidFinish: function() {
    
        this._super();
        
        this._itemSpritePlay.runAction
            (
                cc.sequence
                    (
                        cc.delayTime(0.2),
                        cc.moveTo(0.3, LayoutHelper.computePosition(0.5, 0.5))
                                .easing(cc.easeSineOut())
                    )
            );
    },
    
    // MARK:
    
    _setupBackgrounds: function() {
        
        var layerColor = new cc.LayerColor(cc.color(167, 44, 44),
                LayoutHelper.getVisibleWidth(), LayoutHelper.getVisibleHeight());
        layerColor.setPosition(LayoutHelper.computePosition(0, 0, true));
        this.addChild(layerColor, - 4);
    },
    
    _setupLabels: function() {
    
    },
    
    _setupControls: function() {
    
        var menu = new cc.Menu();
        menu.setPosition(LayoutHelper.computePosition(0, 0, true));
        this.addChild(menu, 3);
        
        this._itemSpritePlay = Utility.createItemSprite(res.button_play_png);
        this._itemSpritePlay.setCallback(this._onClickPlay, this);
        this._itemSpritePlay.setScale(LayoutHelper.computeScale(this._itemSpritePlay, 0.36, 0.12));
        this._itemSpritePlay.setPosition(LayoutHelper.computePosition(- 0.18, 0.5));
        menu.addChild(this._itemSpritePlay);
    },
    
    _setupDecorations: function() {
    
    },
    
    _setupListeners: function() {
    
    },
    
    // MARK:
    
    _onClickPlay: function(sender) {
    
        AudioHelper.playClickEffect();
    
        cc.director.runScene(new cc.TransitionCrossFade(0.3, new GamePlayScene()));
    }
});


var HomeScene = cc.Scene.extend({

    onEnter: function() {
    
        this._super();
        
        var layer = new HomeLayer();
        this.addChild(layer);
    }
});
