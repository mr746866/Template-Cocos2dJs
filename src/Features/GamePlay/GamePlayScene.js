var GamePlayLayer = cc.Layer.extend({

    _score: null,
    
    _labelScore: null,
    _spriteInstruction: null,
    
    ctor: function() {
        
        this._super();
        
        this._score = 0;

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
    },
    
    // MARK:
    
    _setupBackgrounds: function() {
        
        var layerColor = new cc.LayerColor(cc.color(167, 44, 44),
                LayoutHelper.getVisibleWidth(), LayoutHelper.getVisibleHeight());
        layerColor.setPosition(LayoutHelper.computePosition(0, 0, true));
        this.addChild(layerColor, - 4);
    },
    
    _setupLabels: function() {
    
        this._labelScore = new cc.LabelTTF("" + this._score, getFont(res.silkscreen_ttf), 120);
        this._labelScore.setFontFillColor(cc.color(255, 255, 255));
        this._labelScore.setPosition(LayoutHelper.computePosition(0.5, 0.5, true));
        this.addChild(this._labelScore, 4);
    },
    
    _setupControls: function() {
    
    },
    
    _setupDecorations: function() {
    
        this._spriteInstruction = new cc.Sprite(res.instruction_play_png);
        this._spriteInstruction.setScale(LayoutHelper.computeScale(this._spriteInstruction, 0.4, 0.18));
        this._spriteInstruction.setPosition(LayoutHelper.computePosition(0.5, 0.25, true));
        this.addChild(this._spriteInstruction, 3);
    },
    
    _setupListeners: function() {
    
        var this_ = this;
    
        cc.eventManager.addListener({
        
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                
                swallowTouches: true,
                
                onTouchBegan: function(touch, event) {
                    
                    this_._score++;
                    
                    this_._labelScore.setString("" + this_._score);
                    
                    if (this_._spriteInstruction) {
                    
                        this_._spriteInstruction.removeFromParent(true);
                        this_._spriteInstruction = null;
                    }
                    
                    if (this_._score >= 10) {
                        
                        cc.director.runScene(new cc.TransitionCrossFade(0.3, new HomeScene()));
                    }
                    
                    return true;
                }
            },
            this);
    }
});


var GamePlayScene = cc.Scene.extend({

    onEnter: function() {
    
        this._super();
        
        var layer = new GamePlayLayer();
        this.addChild(layer);
    }
});
