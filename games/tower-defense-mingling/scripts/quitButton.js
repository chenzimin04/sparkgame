// quitButton.js
var QuitButton = pc.createScript('quitButton');

QuitButton.attributes.add('gameEntity', {type: 'entity'});
QuitButton.attributes.add('roadMap', {type: 'entity'});
QuitButton.attributes.add('gameScreen', {type: 'entity'});

// initialize code called once per entity
QuitButton.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
};

// update code called every frame
QuitButton.prototype.update = function(dt) {
    
};

QuitButton.prototype.onPlay = function() {
    PokiSDK.gameplayStop();
    
    this.gameEntity.script.game.gamePauseState(true);
    
    this.roadMap.enabled = true;
    this.gameScreen.enabled = false;
    
    var maps = this.app.root.findByName('Maps');
    var map = maps.children;
    var destinations = this.gameEntity.findByTag('Destination Base');
    var unitSelections = this.gameScreen.findByTag('Unit Selection');
    var tutorialUis = this.gameScreen.findByName('Tutorial').children;
    
    for(var i = 0; i < 6; i++){
        map[i].enabled = false;
        destinations[i].enabled = false;
        unitSelections[i].enabled = false;
        
        if(tutorialUis[i]){
            tutorialUis[i].enabled = false;
        }
    }
    
    var app = this.app;
    var game = app.root.findByName('Game');
    
    var backgroundMusic = app.root.findByName('Background Music');
    backgroundMusic.sound.stop();
    
    game.script.game.clearLevelGridHighlight();
    
    game.script.game.setGameEndlessModeState(false);
    
    this.entity.parent.enabled = false;
};

// swap method called for script hot-reloading
// inherit your script state here
// QuitButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

