var Utility = {

    // MARK:
    
    getRandomInt: function(min, max) {
    
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getRandomFloat: function(min, max) {
    
        return Math.random() * (max - min) + min;
    },
    
    createItemSprite: function(fileName) {
    
        var spriteNormal = new cc.Sprite(fileName);
        var spriteSelected = new cc.Sprite(fileName);
        spriteSelected.setColor(cc.color(200, 200, 200));
        
        return new cc.MenuItemSprite(spriteNormal, spriteSelected);
    }
};
