// tweenmanager.js
var Tweenmanager = pc.createScript('tweenmanager');

// initialize code called once per entity
Tweenmanager.prototype.initialize = function() {
    
};

// update code called every frame
Tweenmanager.prototype.update = function(dt) {
    TWEEN.update();
};

// swap method called for script hot-reloading
// inherit your script state here
// Tweenmanager.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

