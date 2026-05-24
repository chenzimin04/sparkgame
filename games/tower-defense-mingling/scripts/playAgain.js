// playAgain.js
var PlayAgain = pc.createScript('playAgain');

PlayAgain.attributes.add('gameEntity', {type: 'entity'});

// initialize code called once per entity
PlayAgain.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
};

PlayAgain.prototype.onPlay = function() {
    this.gameEntity.script.game.playAgainHandler();
};

// update code called every frame
PlayAgain.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// PlayAgain.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

