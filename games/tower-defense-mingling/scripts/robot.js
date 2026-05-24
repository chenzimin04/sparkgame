// robot.js
var Robot = pc.createScript('robot');

Robot.attributes.add('speed', { type: 'number', default: 0.5 });
Robot.attributes.add('damage', { type: 'number', default: 5 });

// initialize code called once per entity
Robot.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
    
    var app = this.app;

    this.scale = 1;

    var game = app.root.findByName('Game');
    this.destinationIndex = 0;
    
    var bases = game.findByTag('Destination');
    if(bases[1]){
        this.destinationIndex = this.randomPath();
    }
    
    var base = bases[this.destinationIndex];

    var pos = this.entity.getPosition();
    var basePos = base.getPosition();
    this.path = game.script.mapsystem.getPath(Math.round(pos.x / 2), Math.round(pos.z / 2), Math.round(basePos.x / 2), Math.round(basePos.z / 2));
    
    this.timer = 0;

    // var scale = pc.math.clamp(600 - game.script.game.timer, 0, 600) / 600;
    // this.speed = this.speed / scale;
    
    var randomScale = pc.math.random(0, 0.4);
    this.speed = this.speed + randomScale;
    
    var endlessHpScaler = game.script.game.getEndlessRobotHp();
    var endlessSpeedScaler = game.script.game.getEndlessRobotSpeed();
    
    var spawn = this.entity.parent.findByName('Spawn');
    var wave = spawn.script.spawnLocation.getCurrentWave();
    
    var health = this.entity.script.health.maxHealth;
    switch(wave){
        case 1:
            this.entity.script.health.changeMaxHealth(health*0.7);

            this.speed += 0.2;
            this.damage -= 10;
            break;
        case 2:
            break;
        case 3:
            this.entity.script.health.changeMaxHealth(health*1.3);

            this.speed -= 0.4;
            this.damage += 10;
            break;
        default:
            this.entity.script.health.changeMaxHealth(health*1.3 + endlessHpScaler);
            this.speed += endlessSpeedScaler;
            this.damage += 10;
            break;
    }
    
    this.firstDestroying = true;
    
    // console.log('ROBOT: hp ' + this.entity.script.health.maxHealth + ', speed ' + this.speed + ' -----');
};

Robot.prototype.hit = function () {
//     var pos = this.entity.getPosition();

//     var app = this.app;
//     var particleManager = app.root.findByName('Particle Manager');
//     particleManager.script.particleManager.play('Hit', pos.x, pos.y + 1, pos.z);
};

Robot.prototype.checkDoubleSpawnRobot = function() {
    var spawns = this.entity.parent.findByTag('SpawnLocation');
    
    if(spawns.length > 1){
        return true;
    } else {
        return false;
    }
};

Robot.prototype.explode = function () {
    var app = this.app;
    var game = app.root.findByName('Game');
    var pos = this.entity.getPosition();
    
    var robotName = this.entity.name + ' Destroyed';
    
//     var particleManager = app.root.findByName('Particle Manager');
//     particleManager.script.particleManager.play('Explosion', pos.x, pos.y + 1, pos.z);

//     var sound = app.root.findByName('Sounds').findByName('Explosion');
//     sound.sound.play('Explosion');

    game.script.game.destroyedRobot(pos.x, pos.y, pos.z, robotName);
    
    this.entity.enabled = false;
    
    if(this.firstDestroying){
        // game.script.game.incrementState();
        // var decrement = this.checkDoubleSpawnRobot() ? 2 : 1;
        this.signalDestroyIncrement();
        
        this.firstDestroying = false;
    }
    
    setTimeout(function() {
        this.entity.destroy();
    }.bind(this), 100);
};

Robot.prototype.signalDestroyIncrement = function() {
    var app = this.app;
    var game = app.root.findByName('Game');
    
    var increment = 1;
    game.script.game.setEnemiesLeft(increment);
};

// update code called every frame
// Checks every update if the current position of the robot is in a different type of tile
Robot.prototype.update = function(dt) {
    if(this.entity.parent.parent.script.game.showingAd || this.entity.parent.parent.script.game.gamePause)
        return;
    
    if (this.path) {
        var app = this.app;
        var game = app.root.findByName('Game');

        this.timer += dt * this.speed;
        // console.log('TIMER: ' + this.timer);
        // console.log('PATH LENGTH: ' + this.path.get(0).length);
        
        // var t = this.timer / this.path.get(0).length;
        var t = this.timer / this.path.get(0).length;
        
        // if(this.path.get(0).length === 0){
        //     console.log('PATH: ' + this.path.get(0).length);
        // }
        
        if (t > 1) {
            var bases = game.findByTag('Destination');
            // var base = game.findByName('Destination');
            if (bases) {
                // base.script.building.explode();

                this.signalDestroyIncrement();
                
                this.entity.destroy();
                bases[this.destinationIndex].script.baseHealth.reduce(this.damage);
                // base.script.baseHealth.reduce(this.damage);
                
                // game.script.game.gameOver();
            }

            this.path = null;
        } else {
            var currPos = this.entity.getPosition();
            var pathPos = this.path.value(t);
            var worldPos = new pc.Vec3(pathPos[0] * 2, 0, pathPos[1] * 2);

            if ((worldPos.x - currPos.x) !== 0 || (worldPos.z - currPos.z) !== 0) {
                var a = Math.atan2(worldPos.x - currPos.x, worldPos.z - currPos.z) / Math.PI * 180;
                this.entity.setEulerAngles(0, a, 0);
            }
            this.entity.setPosition(worldPos);
        }
    }
};

Robot.prototype.randomPath = function() {
    var randomPathIndex = Math.floor(Math.random() * 2);
    return randomPathIndex;
};

Robot.prototype.onTriggerEnter = function(result) {
    // Destroy the bullet if it hits a robot 
//     var hitParticle = this.entity.findByName('Hit');
    
//     if(!hitParticle.particlesystem.isPlaying()){
//         hitParticle.particlesystem.reset();
//         hitParticle.particlesystem.play();
//     }

    try{
        var head = this.entity.findByName('Head');
        var body = this.entity.findByName('Body');

        head.script.switchingMaterials.changeToNextMaterial(1);
        body.script.switchingMaterials.changeToNextMaterial(1);

        setTimeout(function(){
            head.script.switchingMaterials.changeToNextMaterial(0);
            body.script.switchingMaterials.changeToNextMaterial(0);
        }.bind(this), 50);

        result.destroy();
    } catch(error){
        console.log(error);
    }
};

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

