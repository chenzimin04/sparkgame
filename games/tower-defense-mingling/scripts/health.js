// health.js
var Health = pc.createScript('health');

Health.attributes.add('maxHealth', { type: 'number', default: 100 });
Health.attributes.add('barHeight', { type: 'number', default: 3 });
Health.attributes.add('remainingMaterial', { type: 'asset', assetType: 'material' });
Health.attributes.add('emptyMaterial', { type: 'asset', assetType: 'material' });

Health.attributes.add('gameEntity', {type: 'entity'});

// initialize code called once per entity
Health.prototype.initialize = function() {
    var app = this.app;

    var healthBar = this.entity.findByName('Health Bar');
    if (healthBar) {
        healthBar.destroy();
    }

    this.healthBar = new pc.Entity();
    this.healthBar.name = 'Health Bar';
    this.remaining = new pc.Entity();
    this.remainingBox = new pc.Entity();
    this.empty = new pc.Entity();
    this.emptyBox = new pc.Entity();

    this.entity.addChild(this.healthBar);
    this.healthBar.addChild(this.remaining);
    this.remaining.addChild(this.remainingBox);
    this.healthBar.addChild(this.empty);
    this.empty.addChild(this.emptyBox);

    this.healthBar.setLocalPosition(0, this.barHeight, 0);
    this.remaining.setLocalPosition(-1, 0, 0);
    this.remainingBox.setLocalPosition(0.5, 0, 0);
    this.empty.setLocalPosition(1, 0, 0);
    this.emptyBox.setLocalPosition(-0.5, 0, 0);

    this.remainingBox.addComponent('model', {
        type: 'box',
        castShadows: false
    });
    this.emptyBox.addComponent('model', {
        type: 'box',
        castShadows: false
    });

    var remainingMaterial = this.remainingMaterial.resource;
    this.remainingBox.model.meshInstances[0].material = remainingMaterial;

    var emptyMaterial = this.emptyMaterial.resource;
    this.emptyBox.model.meshInstances[0].material = emptyMaterial;

    this.setHealth(this.maxHealth);
    
    this.firstTimeZeroHealth = true;
};

Health.prototype.setHealth = function (health) {
    this.currentHealth = health;

    if (this.currentHealth <= 0) {
        this.currentHealth = 0;
        
        this.entity.script.robot.explode();
        
        //add resources when destroying a robot
        if(this.firstTimeZeroHealth){
            this.gameEntity.script.game.rewardResources();
            
            this.firstTimeZeroHealth = false;
        }
    } else {
        this.entity.script.robot.hit();
    }

    //scale number 2 is equal to the difference of the boxes in the setPosition, 2 is difference from -1 to 1
    //change y and z to scale the HP bar
    this.remaining.setLocalScale(2 * this.currentHealth / this.maxHealth, 0.15, 0.15);
    this.empty.setLocalScale(2 * (this.maxHealth - this.currentHealth) / this.maxHealth, 0.15, 0.15);
};

Health.prototype.reduce = function (amount) {
    this.setHealth(this.currentHealth - amount);
};

Health.prototype.changeMaxHealth = function(newAmount){
    this.maxHealth = newAmount;
};

// update code called every frame
Health.prototype.update = function(dt) {
    this.healthBar.setEulerAngles(0, 0, 0);
};

