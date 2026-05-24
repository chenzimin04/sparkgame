// nextButton.js
var NextButton = pc.createScript('nextButton');

// initialize code called once per entity
NextButton.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
    
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
};

// update code called every frame
NextButton.prototype.update = function(dt) {
    
};

NextButton.prototype.onPlay = function() {
    var app = this.app;
    var game = app.root.findByName('Game');
    
    if(game.script.game.showingAd){
        return;
    }
    
    var ui = app.root.findByName('UI');
    var nextButton = ui.findByName('Next Button');
    
    this.entity.sound.play('ButtonPress');
    
    // game.findByName('Spawn').script.spawnLocation.nextPhase();
    
    var endlessState = game.script.game.gameEndlessModeState();
    
    var spawns = game.findByTag('SpawnLocation');
    
    for(var i = 0; i < spawns.length; i++){
        spawns[i].script.spawnLocation.nextPhase();
        // if(endlessState){
        //     spawns[i].script.spawnLocation.incrementEndlessWaveCountReset();
        // }
    }
    
    game.script.game.resetNewWaveEnemies();
    game.script.game.setWavesLeft();
    game.script.game.setEnemiesLeft(0);
    
};

NextButton.prototype.onKeyDown = function(e){
    if(this.entity.enabled){
        if (e.key === pc.KEY_SPACE || e.key === pc.KEY_ENTER) {
            this.onPlay();
        }
        e.event.preventDefault(); // Use original browser event to prevent browser action.
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// NextButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

