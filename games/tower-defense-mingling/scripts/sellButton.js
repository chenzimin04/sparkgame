// sellButton.js
var SellButton = pc.createScript('sellButton');

SellButton.attributes.add('gameEntity', {type: 'entity'});

// initialize code called once per entity
SellButton.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
    
    this.entity.element.on('mouseenter', this.onEnter, this);
    this.entity.element.on('mouseleave', this.onOut, this);
};

// update code called every frame
SellButton.prototype.update = function(dt) {
    
};

SellButton.prototype.onEnter = function() {
    this.gameEntity.script.game.sellButtonHoverState(true);
};

SellButton.prototype.onOut = function() {
    this.gameEntity.script.game.sellButtonHoverState(false);
};

SellButton.prototype.onPlay = function() {
    this.sellCannon();
    
    if(this.app.touch){
        this.gameEntity.script.game.afterMergeHandler();
    }
};

SellButton.prototype.sellCannon = function() {
    var position = this.gameEntity.script.game.unitToSellPosition;
    var x = Math.round(position.x /2);
    var y = Math.round(position.z /2);
    
    // var x = position.x;
    // var y = position.z;
    
    var placableType = 3;
    
    var entity = this.gameEntity.script.mapsystem.getSpaceName(x, y);
    
    switch(entity){
        case 'Yellow Cannon 1':
        case 'Black Cannon 1':
        case 'Blue Cannon 1':
        case 'White Cannon 1':
        case 'Red Cannon 1':
        case 'Green Cannon 1':
            this.gameEntity.script.game.resources += 200;
            break;
        case 'Yellow Cannon 2':
        case 'Black Cannon 2':
        case 'Blue Cannon 2':
        case 'White Cannon 2':
        case 'Red Cannon 2':
        case 'Green Cannon 2':
            this.gameEntity.script.game.resources += 400;
            break;
        case 'Yellow Cannon 3':
        case 'Black Cannon 3':
        case 'Blue Cannon 3':
        case 'White Cannon 3':
        case 'Red Cannon 3':
        case 'Green Cannon 3':
            this.gameEntity.script.game.resources += 600;
            break;
    }
    
    this.gameEntity.script.mapsystem.setSpaceType(x, y, placableType);
    
    this.entity.enabled = false;
};

// swap method called for script hot-reloading
// inherit your script state here
// SellButton.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

