// speedUpButton.js
var SpeedUpbutton = pc.createScript('speedUpbutton');

SpeedUpbutton.attributes.add('gameEntity', {type: 'entity'});

// initialize code called once per entity
SpeedUpbutton.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
    
    this.firstSpeedUp = true;
};

// update code called every frame
SpeedUpbutton.prototype.update = function(dt) {
    
};

SpeedUpbutton.prototype.onPlay = function() {
    this.speedUpHandler();
};

SpeedUpbutton.prototype.speedUpHandler = function() {
    var app = this.app;
    var game = app.root.findByName('Game');
    
    this.app.timeScale = 2;
    this.entity.button.active = false;
    
    game.script.game.speedUpState(true);
    
    if(this.firstSpeedUp){
        this.gameEntity.script.game.speedMechanicTutorial(false);
        this.firstSpeedUp = false;
    }
    
    setTimeout(function(){
        this.app.timeScale = 1;
        
        this.entity.button.active = true;
        this.entity.enabled = false;
        
        game.script.game.speedBonusTimer(0);
        game.script.game.speedingUpTimerReset(0);
        game.script.game.speedUpState(false);
    }.bind(this), 30000);
};

// swap method called for script hot-reloading
// inherit your script state here
// SpeedUpbutton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

