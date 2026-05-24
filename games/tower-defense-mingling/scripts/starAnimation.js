// starAnimation.js
var StarAnimation = pc.createScript('starAnimation');

// initialize code called once per entity
StarAnimation.prototype.initialize = function() {
    // this.entity.enabled = false;
    // this.starAnimating();
};

StarAnimation.prototype.starAnimating = function() {
    switch(this.entity.name){
        case 'Star 1':
            this.entity.enabled = true;
            
            this.entity.setLocalScale(1.5,1.5,1.5);
            
            setTimeout(function(){
                this.entity.setLocalScale(1,1,1);
            }.bind(this), 100);

            setTimeout(function(){
                this.entity.setLocalScale(0.6,0.6,0.6);
            }.bind(this), 200);

            setTimeout(function(){
                this.entity.setLocalScale(1.2,1.2,1.2);
            }.bind(this), 300);

            setTimeout(function(){
                this.entity.setLocalScale(1,1,1);
            }.bind(this), 400);
            break;
        case 'Star 2':
            setTimeout(function(){
                this.entity.enabled = true;
                this.entity.setLocalScale(1.5,1.5,1.5);
            }.bind(this), 500);
            
            setTimeout(function(){
                this.entity.setLocalScale(1,1,1);
            }.bind(this), 600);

            setTimeout(function(){
                this.entity.setLocalScale(0.6,0.6,0.6);
            }.bind(this), 700);

            setTimeout(function(){
                this.entity.setLocalScale(1.2,1.2,1.2);
            }.bind(this), 800);

            setTimeout(function(){
                this.entity.setLocalScale(1,1,1);
            }.bind(this), 900);
            break;
        case 'Star 3':
            setTimeout(function(){
                this.entity.enabled = true;
                this.entity.setLocalScale(1.5,1.5,1.5);
            }.bind(this), 1000);
            
            setTimeout(function(){
                this.entity.setLocalScale(1,1,1);
            }.bind(this), 1100);

            setTimeout(function(){
                this.entity.setLocalScale(0.6,0.6,0.6);
            }.bind(this), 1200);

            setTimeout(function(){
                this.entity.setLocalScale(1.2,1.2,1.2);
            }.bind(this), 1300);

            setTimeout(function(){
                this.entity.setLocalScale(1,1,1);
            }.bind(this), 1400);
            break;
        default:
            break;
    }
};

// update code called every frame
StarAnimation.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// StarAnimation.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

