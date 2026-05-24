// exitButton.js
var ExitButton = pc.createScript('exitButton');

// initialize code called once per entity
ExitButton.prototype.initialize = function() {
    this.ui = this.app.root.findByName('UI');
    
    this.entity.button.on('click', this.onPlay, this);
    
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
};

// update code called every frame
ExitButton.prototype.update = function(dt) {
    
};

ExitButton.prototype.onKeyDown = function(e){
    if(this.entity.enabled){
        if (e.key === pc.KEY_ESCAPE) {
            this.buttonEvent();
        }
        e.event.preventDefault(); // Use original browser event to prevent browser action.
    }
};

ExitButton.prototype.onPlay = function(){
    this.buttonEvent();
};

ExitButton.prototype.buttonEvent = function() {
    this.levelButtonsActiveState(true);
            
    this.entity.sound.play('ExitButton');

    this.entity.parent.enabled = false;
    
    var app = this.app;
    var game = app.root.findByName('Game');
    var speedState = game.script.game.getSpeedUpState();
    
    game.script.game.gamePauseState(false);
    
    if(speedState){
        app.timeScale = 2;
    } else {
        app.timeScale = 1;
    }
};

ExitButton.prototype.levelButtonsActiveState = function(newState){
    var levels = this.ui.findByName('Levels');
    
    var buttons = levels.findByTag('Level');
            
    for(var i = 0; i < buttons.length; i++){
        buttons[i].button.active = newState;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// ExitButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

