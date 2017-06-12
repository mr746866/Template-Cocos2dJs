var AudioHelper = {

    // MARK:
    
    setEffectsVolume: function(volume) {
    
        cc.audioEngine.setEffectsVolume(volume);
    },
    
    setMusicsVolume: function(volume) {
    
        cc.audioEngine.setMusicVolume(volume);
    },
    
    pauseAll: function() {
    
        cc.audioEngine.pauseAllEffects();
        cc.audioEngine.pauseMusic();
    },
    
    resumeAll: function() {
    
        cc.audioEngine.resumeAllEffects();
        cc.audioEngine.resumeMusic();
    },
    
    // MARK:
    
    playClickEffect: function() {
    
        cc.audioEngine.playEffect(res.click_mp3);
    },
    
    playBackgroundMusic: function() {
    
        cc.audioEngine.playMusic(res.background_mp3, true);
    }
};
