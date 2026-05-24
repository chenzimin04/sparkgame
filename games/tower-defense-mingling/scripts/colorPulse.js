// colorPulse.js
var ColorPulse = pc.createScript('colorPulse');

// initialize code called once per entity
ColorPulse.prototype.initialize = function() {
    this.timer = 0;
    this.originalColor = new pc.Color();
    this.newColor = new pc.Color();
    this.pulse = true;

    this.originalColor.copy(this.entity.element.color);
};

ColorPulse.prototype.enablePulse = function(pulse) {
    this.pulse = pulse;
};

// update code called every frame
ColorPulse.prototype.update = function(dt) {
    if (this.pulse) {
        var d = new Date();
        var m = d.getTime();
        var s = m / 100.0;

        this.newColor.r = this.originalColor.r - Math.sin(s) * 0.125 - 0.125;
        this.newColor.g = this.originalColor.g - Math.sin(s) * 0.125 - 0.125;
        this.newColor.b = this.originalColor.b - Math.sin(s) * 0.125 - 0.125;

        this.entity.element.color = this.newColor;
    } else {
        this.entity.element.color = this.originalColor;
    }
};



// swap method called for script hot-reloading
// inherit your script state here
// ColorPulse.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

