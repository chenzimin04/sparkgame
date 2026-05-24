// zoom.js
var Zoom = pc.createScript('zoom');

// initialize code called once per entity
Zoom.prototype.initialize = function() {
    this.minFov = 25;
    this.maxFov = 45;
    
    this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);
    
    this.lastTouchPoint = new pc.Vec2();
    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);        
    }
    
    this.time = 0;
    this.duration = 1;
    
//     this.wheelState = false;
    
//     this.wheelEvent = new pc.MouseEvent();
};

// Zoom.wheelEvent = new pc.MouseEvent();

// update code called every frame
Zoom.prototype.update = function(dt) {

    // if (this.app.keyboard.wasPressed(pc.KEY_SPACE) ) {
    //     if (this.targetFov == 10) {
    //         this.targetFov = 45;
    //     }
    // }
    
    var cameraFov = this.entity.camera.fov;
    
    if (cameraFov > this.maxFov) {
        cameraFov = this.maxFov;
    }
    
    if(cameraFov < this.minFov){
        cameraFov = this.minFov;
    }
    
    this.entity.camera.fov = cameraFov;
    
//     this.time += dt; 
//     if (this.time > this.duration) {
//         this.time -= this.duration;
//     }    
    
//     var percent = this.time / this.duration;
    
    // if (fov > this.targetFov) {
    //     fov -= (10 * dt);
    //     if (fov < this.targetFov) {
    //         fov = this.targetFov;
    //     }
    // }

    // if(cameraFov != this.entity.camera.fov){
    //     cameraFov -= (10 * dt);
    // }
    
//     if(this.wheelState){
        
//         this.entity.camera.fov -= 10 * this.wheelEvent.wheel * dt;
        
//         this.wheelState = false;
//     }
};

Zoom.prototype.onMouseWheel = function(event){
    // this.wheelEvent.event = event;
    
    // this.wheelState = true;
    
    // this.wheelState = false;
    var fov = this.entity.camera.fov;
    
    var newFov = fov + event.deltaWheel;
    
    this.entity.camera.fov = newFov;
    
    // this.entity.camera.fov += event.deltaWheel;
    // for(var i = 0; i < 2.5; i += 0.5){
    //     this.entity.camera.fov -= i * event.wheel;
    // }
};

// swap method called for script hot-reloading
// inherit your script state here
// Zoom.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

