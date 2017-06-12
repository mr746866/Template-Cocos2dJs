var res = {
    
    silkscreen_ttf: { type: "font", name: "Silkscreen", srcs: ["res/fonts/silkscreen.ttf"] },
    
    instruction_play_png: "res/images/instruction_play.png",

    button_play_png: "res/controls/button_play.png",

    background_mp3: "res/audios/background.mp3",
    click_mp3: "res/audios/click.mp3"
};

var arrayResources = [];

for (var key in res) {

    arrayResources.push(res[key]);
}

function getFont(resFont) {

    if (cc.sys.os == cc.sys.OS_ANDROID) {
    
        return resFont.srcs[0];
    }
    
    return resFont.name;
}
