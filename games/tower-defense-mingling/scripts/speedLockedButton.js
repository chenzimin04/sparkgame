// speedLockedButton.js
var SpeedLockedButton = pc.createScript('speedLockedButton');

// initialize code called once per entity
SpeedLockedButton.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
    
    this.firstSpeedLockedButton = true;
};

// update code called every frame
SpeedLockedButton.prototype.update = function(dt) {
    
};

SpeedLockedButton.prototype.onPlay = function() {
    var app = this.app;
    var ui = app.root.findByName('UI');
    var gameScreen = ui.findByName('GameScreen');
    
    var game = app.root.findByName('Game');
    
    if(this.firstSpeedLockedButton){
        this.app.root.findByName('Game').script.game.speedLockedMechanicTutorial(false);
        
        var spawn = game.findByName('Spawn');
        
        if(game.script.game.gamePause && (spawn.script.spawnLocation.getCurrentWave() === 3)){
            game.script.game.gamePauseState(false);
            app.timeScale = 1;
        }
        
        this.firstSpeedLockedButton = false;
        
        app.root.findByName('Game').script.game.setSpeedLockedState(false);
        
        // app.timeScale = 1;
    }
    
    gameScreen.findByName('Time Machine').enabled = true;
};

// swap method called for script hot-reloading
// inherit your script state here
// SpeedLockedButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

