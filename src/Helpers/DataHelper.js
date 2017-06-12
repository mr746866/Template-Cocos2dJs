var DataHelper = {

    // MARK:

    isSoundMuted: function() {
        
        var isMuted = cc.sys.localStorage.getItem("SOUND_MUTED");
        
        return isMuted == null ? false : isMuted;
    },

    setSoundMuted: function(isMuted) {
    
        cc.sys.localStorage.setItem("SOUND_MUTED", isMuted);
    },

    getBestScore: function() {
        
        var scoreBest = cc.sys.localStorage.getItem("BEST_SCORE");
        
        return scoreBest == null ? 0 : scoreBest;
    },

    setBestScore: function(scoreBest) {
    
        cc.sys.localStorage.setItem("BEST_SCORE", scoreBest);
    }
};
