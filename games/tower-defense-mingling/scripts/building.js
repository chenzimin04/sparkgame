// building.js
var Building = pc.createScript('building');

// initialize code called once per entity
Building.prototype.initialize = function() {
    
};

Building.prototype.explode = function() {
//     var app = this.app;

//     var pos = this.entity.getPosition();

//     var particleManager = app.root.findByName('Particle Manager');
//     particleManager.script.particleManager.play('Huge Explosion', pos.x, pos.y + 1, pos.z);

//     var sound = app.root.findByName('Sounds').findByName('Explosion');
//     sound.sound.play('explosion');

    this.destructionTime = 1;
}; 

// update code called every frame
Building.prototype.update = function(dt) {
    if (this.destructionTime > 0) {
        this.destructionTime -= dt;

        if (this.destructionTime < 0) {
            var app = this.app;
            var game = app.root.findByName('Game');
            var pos = this.entity.getPosition();
            var x = Math.round(pos.x / 10);
            var y = Math.round(pos.z / 10);
            game.script.mapsystem.setSpaceType(x, y, 0);
        }
    }
};

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

