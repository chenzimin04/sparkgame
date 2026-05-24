// baseHealth.js
var BaseHealth = pc.createScript('baseHealth');

BaseHealth.attributes.add('maxHealth', { type: 'number', default: 100 });

BaseHealth.attributes.add('gameEntity', {type: 'entity'});
// BaseHealth.attributes.add('remainingHP', { type: 'entity' });

// BaseHealth.attributes.add('barHeight', { type: 'number', default: 3 });
// BaseHealth.attributes.add('remainingMaterial', { type: 'asset', assetType: 'material' });
// BaseHealth.attributes.add('emptyMaterial', { type: 'asset', assetType: 'material' });

// initialize code called once per entity
BaseHealth.prototype.initialize = function() {
    
//     var baseHealthBar = this.entity.findByName('Base Health Bar');
//     if (baseHealthBar) {
//         baseHealthBar.destroy();
//     }

//     this.baseHealthBar = new pc.Entity();
//     this.baseHealthBar.name = 'Base Health Bar';
//     this.remaining = new pc.Entity();
//     this.remainingBox = new pc.Entity();
//     this.empty = new pc.Entity();
//     this.emptyBox = new pc.Entity();

//     this.entity.addChild(this.baseHealthBar);
//     this.baseHealthBar.addChild(this.remaining);
//     this.remaining.addChild(this.remainingBox);
//     this.baseHealthBar.addChild(this.empty);
//     this.empty.addChild(this.emptyBox);

//     this.healthBarPositioning();
    
//     this.remaining.setLocalPosition(-1, 0, 0);
//     this.remainingBox.setLocalPosition(0.5, 0, 0);
//     this.empty.setLocalPosition(1, 0, 0);
//     this.emptyBox.setLocalPosition(-0.5, 0, 0);

//     this.remainingBox.addComponent('model', {
//         type: 'box',
//         castShadows: false
//     });
//     this.emptyBox.addComponent('model', {
//         type: 'box',
//         castShadows: false
//     });

//     var remainingMaterial = this.remainingMaterial.resource;
//     this.remainingBox.model.meshInstances[0].material = remainingMaterial;

//     var emptyMaterial = this.emptyMaterial.resource;
//     this.emptyBox.model.meshInstances[0].material = emptyMaterial;
    // this.hpElement = this.remainingHP.element.width;
    
    // this.gameEntity.script.game.setHealth(this.maxHealth);
};

BaseHealth.prototype.reduce = function (amount) {
    //final variable about reducing the hp
    var trueAmount = 0;
    
    //check if level with double destinations
    //if true we divide the amount to reduce the hp by 2 because of hp proportion (same as having double hp)
    //if not then just calculate the amount received as a whole
    if(this.checkDoubleDestination()){
        trueAmount = amount/2;
    } else {
        trueAmount = amount;
    }
    
    this.gameEntity.script.game.setHealth(trueAmount); //this.currentHealth - trueAmount
};

// BaseHealth.prototype.setHealth = function (health) {
    
//     this.currentHealth = health;

//     this.remainingHPHandler(this.currentHealth);

    //scale number 2 is equal to the difference of the boxes in the setPosition, 2 is difference from -1 to 1
    // this.remaining.setLocalScale(2 * this.currentHealth / this.maxHealth, 0.3, 0.3);
    // this.empty.setLocalScale(2 * (this.maxHealth - this.currentHealth) / this.maxHealth, 0.3, 0.3);
// };

// BaseHealth.prototype.remainingHPHandler = function(currentHealth){
//     var amountRemained = (this.hpElement/100)*currentHealth;
    
//     this.remainingWidthHandler(amountRemained);
// };

// BaseHealth.prototype.remainingWidthHandler = function(amount) {
//     console.log("Amount for HP to be reduced to: " + amount);
//     this.remainingHP.element.width = amount;
    
//     if (this.remainingHP.element.width <= 0) {
//         this.remainingHP.element.width = 0;
//         // this.entity.destroy();
//         this.gameEntity.script.game.gameOver();
//     }
    
// };

BaseHealth.prototype.checkDoubleDestination = function(){
    var destinations = this.gameEntity.findByTag('Destination');
    
    if(destinations.length > 1){
        return true;
    } else {
        return false;
    }
};

// BaseHealth.prototype.resetMaxHealth = function() {
//     this.gameEntity.script.game.setHealth(this.maxHealth);
// };

// BaseHealth.prototype.healthBarPositioning = function() {
//     var app = this.app;
//     var game = app.root.findByName('Game');

//     switch(game.script.mapsystem.levelNumber()){
//         case 1:
//             this.baseHealthBar.setLocalPosition(0, this.barHeight, 16);
//             break;
//         case 2:
//             this.baseHealthBar.setLocalPosition(0, this.barHeight, 10);
//             break;
//         case 3:
//             this.baseHealthBar.setLocalPosition(0, this.barHeight, 4);
//             break;
//         case 4:
//             this.baseHealthBar.setLocalPosition(0, this.barHeight, 10);
//             break;
//         case 5:
//             this.baseHealthBar.setLocalPosition(0, this.barHeight, 6);
//             break;
//         case 6:
//             this.baseHealthBar.setLocalPosition(0, this.barHeight, 12);
//             break;
//         default:
//             break;
//     }
// };

// update code called every frame
BaseHealth.prototype.update = function(dt) {
    // this.baseHealthBar.setEulerAngles(0, 0, 0);
};

