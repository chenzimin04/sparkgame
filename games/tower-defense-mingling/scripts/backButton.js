// backButton.js
var BackButton = pc.createScript('backButton');

BackButton.attributes.add('quitMenu', {type: 'entity'});

// initialize code called once per entity
BackButton.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
};

// update code called every frame
BackButton.prototype.update = function(dt) {
    
};

BackButton.prototype.onPlay = function() {
    this.app.timeScale = 0;
    
    this.app.root.findByName('Game').script.game.gamePauseState(true);
    
    this.quitMenu.enabled = true;
};

// swap method called for script hot-reloading
// inherit your script state here
// BackButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

