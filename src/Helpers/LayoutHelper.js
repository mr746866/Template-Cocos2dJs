var LayoutHelper = {

    _originVisible: null,
    _sizeVisible: null,

    // MARK:
    
    initialize: function() {
    
        this._originVisible = cc.director.getVisibleOrigin();
        this._sizeVisible = cc.director.getVisibleSize();
    },

    getVisibleWidth: function() {
    
        return this._sizeVisible.width;
    },
    
    getVisibleHeight: function() {
    
        return this._sizeVisible.height;
    },

    computePosition: function(widthPercent, heightPercent, adjustOrigin) {
        
        var position = cc.p(this._sizeVisible.width * widthPercent,
                this._sizeVisible.height * heightPercent);
        
        if (adjustOrigin) {
            
            position = cc.p(this._originVisible.x + position.x, this._originVisible.y + position.y);
        }
        
        return position;
    },
    
    computeScale: function(node, maxWidthPercent, maxHeightPercent) {
    
        return Math.min(this._sizeVisible.width / node.getContentSize().width * maxWidthPercent,
                this._sizeVisible.height / node.getContentSize().height * maxHeightPercent);
    }
};
