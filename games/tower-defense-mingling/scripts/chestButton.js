// chestButton.js
var ChestButton = pc.createScript('chestButton');

ChestButton.attributes.add('chests', {type: 'entity'});

// initialize code called once per entity
ChestButton.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
};

// update code called every frame
ChestButton.prototype.update = function(dt) {
    
};

ChestButton.prototype.onPlay = function() {
    this.chests.enabled = true;
};

// swap method called for script hot-reloading
// inherit your script state here
// ChestButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

