// levelButton5.js
var LevelButton5 = pc.createScript('levelButton5');

LevelButton5.attributes.add("levelMiniMap", {type: "string", default: '', title: "Level minimap:"});

// initialize code called once per entity
LevelButton5.prototype.initialize = function() {
    this.ui = this.app.root.findByName('UI');
    
    this.levelMap = this.ui.findByName(this.levelMiniMap);
    
    this.entity.button.on('click', this.onPlay, this);
    
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
};

// update code called every frame
LevelButton5.prototype.update = function(dt) {
    
};

LevelButton5.prototype.onKeyDown = function(e){
    if(this.entity.enabled){
        if (e.key === pc.KEY_5) {
            this.buttonEvent();
        }
        e.event.preventDefault(); // Use original browser event to prevent browser action.
    }
};

LevelButton5.prototype.onPlay = function() {
    this.buttonEvent();
};

LevelButton5.prototype.buttonEvent = function(){
    var game = this.app.root.findByName('Game');
    
    this.levelButtonsActiveState(false);

    this.entity.sound.play('LevelButton');

    this.levelMap.enabled = true;
};

LevelButton5.prototype.levelButtonsActiveState = function(newState){
    var levels = this.ui.findByName('Levels');
    
    var buttons = levels.findByTag('Level');
            
    for(var i = 0; i < buttons.length; i++){
        buttons[i].button.active = newState;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// LevelButton5.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

