// raycast.js
var Raycast = pc.createScript('raycast');

// initialize code called once per entity
Raycast.prototype.initialize = function() {
    // More information about pc.ray: http://developer.playcanvas.com/en/api/pc.Ray.html
    this.ray = new pc.Ray();//copied
    
    this.cameraEntity = pc.app.root.findByName('Camerat');
    
    this.dragEntity = this.entity;
    
    this.dragState = false;//copied
    this.initialPositionSaved = false;//copied
    
    // Register the mouse down and touch start event so we know when the user has clicked
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    
    // More information about pc.Plane: https://github.com/playcanvas/engine/blob/master/src/shape/plane.js
    this.plane = new pc.Plane(this.dragEntity.getPosition().clone(), this.dragEntity.up.clone());//copieds
    
    this.gameEntity = this.app.root.findByName('Game');
    
    //variables to know the initial position of the entity we're about to pick
    this.initialPosition = new pc.Vec3();//copied
    this.initialPositionX = null;//copied
    this.initialPositionY = null;//copied
    this.initialPositionType = null;//copied
};

//copied these two
Raycast.hitPosition = new pc.Vec3();
Raycast.dragPosition = new pc.Vec3();
//this.dsa = new pc.Vec3();

//copied all from here
Raycast.prototype.doRayCastDrag = function (screenPosition) {
    // Initialise the ray and work out the direction of the ray from the a screen position
    this.cameraEntity.camera.screenToWorld(screenPosition.x, screenPosition.y, this.cameraEntity.camera.farClip, this.ray.direction); 
    this.ray.origin.copy(this.cameraEntity.getPosition());
    this.ray.direction.sub(this.ray.origin).normalize();
    
    var hitPosition = Raycast.hitPosition;
    var dragPosition = Raycast.dragPosition;
    
    var interesecting = this.plane.intersectsRay(this.ray, hitPosition);
    if (interesecting) {
        // Work out the vector from the box to the hitPosition
        dragPosition.sub2(hitPosition, this.dragEntity.getPosition());
        
        // Project that vector on to the object's forward axis
        // dragPosition.project(this.dragEntity.right);
        
        // Now move the object by that amount
        dragPosition.add(this.dragEntity.getPosition());        
        this.dragEntity.setPosition(dragPosition);
    }
};
//to here

Raycast.prototype.onMouseDown = function(event) {
    if(this.dragState === false){//copied
        var from = this.cameraEntity.getPosition();
        var to = this.cameraEntity.camera.screenToWorld(event.x, event.y, this.cameraEntity.camera.farClip);

        this.app.systems.rigidbody.raycastFirst(from, to, function(result){

            if (event.button == pc.MOUSEBUTTON_LEFT) {

                if((result.entity.name == 'Bullet Cannon') || 
                   (result.entity.name == 'Bullet Cannon Level 2') ||
                   (result.entity.name == 'Tank Cannon')) {

                    if(this.dragState === false && this.initialPositionSaved === false){//copied
                        var posVector = result.entity.getPosition();//copied
                        this.initialPosition = new pc.Vec3(posVector.x, posVector.y, posVector.z);//copied

                        this.initialPositionX = Math.round(this.initialPosition.x / 2);//copied
                        this.initialPositionY = Math.round(this.initialPosition.z / 2);//copied
                        // this.initialPositionType = this.gameEntity.script.mapsystem.getSpaceType(this.initialPositionX,this.initialPositionY);

                        this.initialPositionSaved = true;//copied
                    }//copied
                    this.dragState = true;//copied
                }
            }
        }.bind(this));
    }//copied
};

Raycast.prototype.onMouseMove = function(event) {
    if ( this.dragState === true ) {//copied
        var from = this.cameraEntity.getPosition();
        var to = this.cameraEntity.camera.screenToWorld(event.x, event.y, this.cameraEntity.camera.farClip);
        //knowing what you're clicking
        this.app.systems.rigidbody.raycastFirst(from, to, function (result) {
            this.dragEntity = result.entity;
            this.doRayCastDrag(event);//copied
        }.bind(this));
    }//copied
};

Raycast.prototype.onMouseUp = function(event) {
    //all copied from here
    if(this.dragState === true){
        var from = this.cameraEntity.getPosition();
        var to = this.cameraEntity.camera.screenToWorld(event.x, event.y, this.cameraEntity.camera.farClip);

        // this.dragEntity.destroy();
        // this.dragEntity = null;

        this.app.systems.rigidbody.raycastFirst(from, to, function (result) {
            
            var dropPosition = result.entity.getPosition();
            var x = Math.round(dropPosition.x / 2);
            var y = Math.round(dropPosition.z / 2);
            var type;
            
            var initPos = this.initialPosition;
            var initPosX = this.initialPositionX;
            var initPosY = this.initialPositionY;

            // var locEnt = this.gameEntity.script.mapsystem.
            var localEntity = this.gameEntity.script.mapsystem.getSpaceName(x,y);
            console.log('localEntity on mouse up: ' + localEntity);

            switch(localEntity){
                case 'Obstacles':
                    // type = this.initialPositionType;

                    // console.log('initial position of the object: ' + this.initialPosition);
                    
                    // result.entity.destroy();
                    // type = 3;
                    // this.gameEntity.script.mapsystem.setSpaceType(initPosX, initPosY, type);
                    
                    
                    result.entity.setPosition(initPos);
                    
                    break;
                case 'Bullet Cannon':
                    // type = this.initialPositionType;
                    // this.gameEntity.script.mapsystem.setSpaceType(this.initialPositionX, this.initialPositionY, type);
                    // type = this.gameEntity.script.mapsystem.getSpaceType(x,y);
                    
                    // localEntity.destroy();
                    
                    type = 6;
                    
                    result.entity.destroy();
                    this.gameEntity.script.mapsystem.setSpaceType(x, y, type);
                    
                    break;
                default:
                    break;
            }

            // if(type){
            //     this.gameEntity.script.mapsystem.setSpaceType(x, y, type);
            // }

        }.bind(this));
    }
    
    this.dragState = false;
    this.initialPositionSaved = false;
    //to here
};

