// menuButton.js
var MenuButton = pc.createScript('menuButton');

// initialize code called once per entity
MenuButton.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
    
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
};

MenuButton.prototype.onKeyDown = function(e){
    if(this.entity.enabled){
        if (e.key === pc.KEY_SPACE || e.key === pc.KEY_ENTER) {
            this.buttonEvent();
        }
        e.event.preventDefault(); // Use original browser event to prevent browser action.
    }
    
};

MenuButton.prototype.onPlay = function(){
    this.buttonEvent();
};

MenuButton.prototype.buttonEvent = function(){
    var app = this.app;
    var game = app.root.findByName('Game');
    
    if(game.script.game.showingAd){
        return;
    }
    
    var ui = app.root.findByName('UI');
    var levelScreen = ui.findByName('Levels');

    var menuButton = ui.findByName('Menu Button');

    menuButton.sound.play('PlayButton');

    var introScreen = ui.findByName('IntroScreen');

    introScreen.enabled = false;
    levelScreen.enabled = true;
};

// update code called every frame
MenuButton.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// MenuButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

