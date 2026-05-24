// collect.js
var Collect = pc.createScript('collect');

Collect.attributes.add('buttonCase', {type: 'string', default: ''});

// initialize code called once per entity
Collect.prototype.initialize = function() {
    this.entity.button.on('click', this.onPlay, this);
    
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
};

// update code called every frame
Collect.prototype.update = function(dt) {
    
};

Collect.prototype.onPlay = function() {
    this.collectEvent();
};

Collect.prototype.onKeyDown = function(e){
    if(this.entity.enabled){
        if (e.key === pc.KEY_SPACE || e.key === pc.KEY_ENTER) {
            this.collectEvent();
        }
        e.event.preventDefault(); // Use original browser event to prevent browser action.
    }
};

Collect.prototype.collectEvent = function() {
    var app = this.app;
    var game = app.root.findByName('Game');
    
    var collectButton = this.buttonCase + '';
    
    switch(collectButton){
        case 'Common':
            game.script.game.commonChestRewardCollect();
            break;
        case 'Rare':
            game.script.game.rareChestRewardCollect();
            break;
        case 'Epic':
            game.script.game.epicChestRewardCollect();
            break;
        default:
            break;
    }
    
    this.entity.parent.enabled = false;
};

// swap method called for script hot-reloading
// inherit your script state here
// Collect.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

