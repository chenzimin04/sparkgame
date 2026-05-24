// robotAnimation.js
var RobotAnimation = pc.createScript('robotAnimation');

RobotAnimation.attributes.add('animateInterval', { type: 'number', default: 1 });

// initialize code called once per entity
RobotAnimation.prototype.initialize = function() {
    this.timeToAnimate = 0;
    
    // this.animated = false;
};

// update code called every frame
RobotAnimation.prototype.update = function(dt) {
    var app = this.app;
    var game = app.root.findByName('Game');
    
    var pos = this.entity.getPosition();
    
    this.entity.setPosition(pos.x,0.3,pos.z);
    
    this.timeToAnimate -= dt;
    if (this.timeToAnimate <= 0) {
        // if(!this.animated){
            this.entity.setPosition(pos.x,0.45,pos.z);
//             this.animated = true;
//         } else {
            
//             this.animated = false;
//         }
        
        var scale = pc.math.clamp(250 - game.script.game.timer, 0, 250) / 250;
        this.timeToAnimate = this.animateInterval * scale;
    }
};

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

