// adButton.js
var AdButton = pc.createScript('adButton');

// initialize code called once per entity
AdButton.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
};

// update code called every frame
AdButton.prototype.update = function(dt) {
    
};

AdButton.prototype.onPlay = function() {
    var app = this.app;
    var ui = app.root.findByName('UI');
    var gameScreen = ui.findByName('GameScreen');
    
    gameScreen.findByName('WatchAd').enabled = true;
};

// swap method called for script hot-reloading
// inherit your script state here
// AdButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

