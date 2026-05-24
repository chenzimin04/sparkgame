// cannon.js
var Cannon = pc.createScript('cannon');

Cannon.attributes.add('fireInterval', { type: 'number', default: 0.5 });
Cannon.attributes.add('range', { type: 'number', default: 10 });
Cannon.attributes.add('detectRange', { type: 'number', default: 15 });
Cannon.attributes.add('damage', { type: 'number', default: 5 });

Cannon.attributes.add('power', { type: 'number', default:1 });
Cannon.attributes.add('bullet', { type: 'entity' });

Cannon.attributes.add('robotTarget', { type: 'string', default: 'Robot 1', title: 'Robot target' });

Cannon.attributes.add('rangeMesh', { type: 'entity' });

var tempVec = new pc.Vec3();
var tempQuat = new pc.Quat();

// initialize code called once per entity
Cannon.prototype.initialize = function() {
    this.timeToFire = 0;
    this.game = this.app.root.findByName('Game');
};

// update code called every frame
Cannon.prototype.update = function(dt) {
    if(this.entity.parent.script.game.showingAd || this.entity.parent.script.game.gamePause)
        return;
    
    var game = this.game;

    var targetPos;
    var distToTarget = 0;
    var pos = this.entity.getPosition();
    
    var dragging = this.entity.parent.script.game.returnDragState();
    var dragEntity = this.entity.parent.script.game.returnDragEntity();
    
    if(dragging && this.entity === dragEntity){
        return;
    }
    else if (!this.target) {
        //find the targeted robots, with name specified in the attribute
        // var targets = game.find("name", this.robotTarget);
        var targets = game.findByTag('Robot');

        for (var i = 0; i < targets.length; i++) {
            var target = targets[i];
            targetPos = target.getPosition();

            tempVec.sub2(pos, targetPos);
            distToTarget = tempVec.length();
            if (distToTarget <= this.detectRange) {
                this.target = target;
                break;
            }
        }
    } else if (this.target) {
        if (!this.target.parent) {
            this.target = null;
            return;
        }

        targetPos = this.target.getPosition();

        var aiming = this.entity.findByName('Aim');
        var shootParticle = aiming.findByName('Shoot');

        tempQuat.copy(aiming.getRotation());
        aiming.lookAt(targetPos.x, targetPos.y + 2, targetPos.z);
        var targetRot = aiming.getRotation();

        //rotation speed of the cannon
        tempQuat.slerp(tempQuat, targetRot, 0.4);

        aiming.setRotation(tempQuat);
        
        tempVec.sub2(pos, targetPos);
        distToTarget = tempVec.length();

        this.timeToFire -= dt;
        if (this.timeToFire <= 0) {
            if (distToTarget <= this.range){
                tempVec.sub2(pos, targetPos);
                // distToTarget = tempVec.length();

//             var laser1 = this.entity.findByName('Barrel 1').findByName('Laser Offset');
//             var laser2 = this.entity.findByName('Barrel 2').findByName('Laser Offset');
//             laser1.enabled = true;
//             laser2.enabled = true;
//             laser1.setLocalScale(0.5, distToTarget, 0.5);
//             laser2.setLocalScale(0.5, distToTarget, 0.5);
//             setTimeout(function () {
//                 laser1.enabled = false;
//                 laser2.enabled = false;
//             }.bind(this), 1000);

//             this.entity.sound.play('shoot');

                if(!shootParticle.particlesystem.isPlaying()){
                    shootParticle.particlesystem.reset();
                    shootParticle.particlesystem.play();
                }
                if(this.target){
                    this.entity.sound.play('Shoot');
                    this.shoot();
                }
                
                this.target.script.health.reduce(this.damage);

                this.timeToFire = this.fireInterval;
            }
            else {
                this.target = null;
            }
        }
    }
};

Cannon.prototype.shoot = function(dt){
    // Clone the bullet as specified by the attribute
    var bullet = this.bullet.clone();
    // Add it to the game 
    this.entity.addChild(bullet);

    var cannon = this.entity.findByName('Aim');
    // Its force is in the direction the cannon is facing 
    this.force = new pc.Vec3();
    this.force.copy(cannon.forward);
    this.force.scale(this.power);
    
    var pos = cannon.getPosition();
    var direction = cannon.forward;
    // Add it a little further if the cannon is already going fast
    pos.add(direction.scale(cannon.rigidbody.linearVelocity.length() * 0.01));
    
    bullet.setPosition( pos );
    var bulletRotation =  cannon.getRotation();
    bullet.setRotation( bulletRotation );
    // bullet.rotateLocal(90,0,0);
    
    bullet.enabled = true; //Must enable after setting position!
    
    bullet.rigidbody.applyImpulse(this.force);
    
    setTimeout( function () {
        bullet.destroy();
    }.bind(this), 400);
};

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

