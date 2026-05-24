// icons.js
var Icons = pc.createScript('icons');

this.clicked = false;

Icons.attributes.add('price', {type: 'number', default: 0, title: 'Resources needed'});

Icons.attributes.add('icon1', {type: 'string', default: '', title: 'Cannon 1:'});
Icons.attributes.add('icon2', {type: 'string', default: '', title: 'Cannon 2:'});
Icons.attributes.add('icon3', {type: 'string', default: '', title: 'Cannon 3:'});

// initialize code called once per entity
Icons.prototype.initialize = function() {
    var app = this.app;
    var game = app.root.findByName('Game');
    var ui = app.root.findByName('UI');
    
    this.firstIconTutorial = true;
    // game.script.game.firstTutorialState(true);
    
    var firstIcon = ui.findByName(this.icon1);
    var secondIcon = ui.findByName(this.icon2);
    var thirdIcon = ui.findByName(this.icon3);
    // var tankIcon = ui.findByName('Tank Cannon');
    
    this.entity.button.on('click', function () {
//         this.entity.sound.play('select');

        // game.script.game.triggerCommercialBreak();
        
        var resources = this.getResourcesAvailable();
        
        var cannon1FreeState = game.script.game.currentFreeCannon1State();
        var cannon2FreeState = game.script.game.currentFreeCannon2State();
        
        if(!this.clicked){
            if(resources < this.price && !cannon1FreeState && !cannon2FreeState){
                game.script.game.noSufficientResources();
                return;
            }
            game.script.game.unitToDeploy = this.entity.name;
            
            // firstIcon.findByName('Border Clicked').enabled = false;
            // secondIcon.findByName('Border Clicked').enabled = false;
            // thirdIcon.findByName('Border Clicked').enabled = false;
            // tankIcon.findByName('Border Clicked').enabled = false;
            
            switch(this.entity.name){
                case 'Yellow Cannon 1':
                    firstIcon.findByName('Border Clicked').enabled = true;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Yellow Cannon 1 Hover';
                    
                    if(this.firstIconTutorial){
                        game.script.game.gamePauseState(false);
                        game.script.game.tutorialUI();
                        
                        this.firstIconTutorial = false;
                        game.script.game.firstTutorialState(false);
                    }
                    
                    break;
                case 'Yellow Cannon 2':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = true;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Yellow Cannon 2 Hover';
                    break;
                case 'Yellow Cannon 3':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = true;
                    
                    game.script.game.unitToDeployBlueprint = 'Yellow Cannon 3 Hover';
                    break;
                case 'Black Cannon 1':
                    firstIcon.findByName('Border Clicked').enabled = true;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Black Cannon 1 Hover';
                    break;
                case 'Black Cannon 2':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = true;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Black Cannon 2 Hover';
                    break;
                case 'Black Cannon 3':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = true;
                    
                    game.script.game.unitToDeployBlueprint = 'Black Cannon 3 Hover';
                    break;
                case 'Blue Cannon 1':
                    firstIcon.findByName('Border Clicked').enabled = true;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Blue Cannon 1 Hover';
                    break;
                case 'Blue Cannon 2':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = true;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Blue Cannon 2 Hover';
                    break;
                case 'Blue Cannon 3':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = true;
                    
                    game.script.game.unitToDeployBlueprint = 'Blue Cannon 3 Hover';
                    break;
                case 'White Cannon 1':
                    firstIcon.findByName('Border Clicked').enabled = true;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'White Cannon 1 Hover';
                    break;
                case 'White Cannon 2':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = true;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'White Cannon 2 Hover';
                    break;
                case 'White Cannon 3':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = true;
                    
                    game.script.game.unitToDeployBlueprint = 'White Cannon 3 Hover';
                    break;
                case 'Red Cannon 1':
                    firstIcon.findByName('Border Clicked').enabled = true;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Red Cannon 1 Hover';
                    break;
                case 'Red Cannon 2':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = true;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Red Cannon 2 Hover';
                    break;
                case 'Red Cannon 3':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = true;
                    
                    game.script.game.unitToDeployBlueprint = 'Red Cannon 3 Hover';
                    break;
                case 'Green Cannon 1':
                    firstIcon.findByName('Border Clicked').enabled = true;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Green Cannon 1 Hover';
                    break;
                case 'Green Cannon 2':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = true;
                    thirdIcon.findByName('Border Clicked').enabled = false;
                    
                    game.script.game.unitToDeployBlueprint = 'Green Cannon 2 Hover';
                    break;
                case 'Green Cannon 3':
                    firstIcon.findByName('Border Clicked').enabled = false;
                    secondIcon.findByName('Border Clicked').enabled = false;
                    thirdIcon.findByName('Border Clicked').enabled = true;
                    
                    game.script.game.unitToDeployBlueprint = 'Green Cannon 3 Hover';
                    break;
                default:
                    break;
            }
            // ui.findByName(this.entity.name).findByName('Border Clicked').enabled = true;
            this.clicked = true;
            game.script.game.iconClickedState(true);
            
            // game.script.game.gridHighlightState(true);
        } else if(this.clicked){
            game.script.game.unitToDeploy = null;
            
            firstIcon.findByName('Border Clicked').enabled = false;
            secondIcon.findByName('Border Clicked').enabled = false;
            thirdIcon.findByName('Border Clicked').enabled = false;
            // tankIcon.findByName('Border Clicked').enabled = false;
            
            // ui.findByName(this.entity.name).findByName('Border Clicked').enabled = false;
            
            this.clicked = false;
            game.script.game.iconClickedState(false);
            
            // game.script.game.gridHighlightState(false);
        }
    }, this);
};

Icons.prototype.resetClickedState = function() {
    var app = this.app;
    var game = app.root.findByName('Game');
    
    this.clicked = false;
    game.script.game.iconClickedState(false);
};

Icons.prototype.getResourcesAvailable = function() {
    var app = this.app;
    var game = app.root.findByName('Game');
    
    var resources = game.script.game.getResources();
    
    return resources;
};

Icons.prototype.clearBlueprintMode = function() {
    var app = this.app;
    var ui = app.root.findByName('UI');
    var game = app.root.findByName('Game');
    
    var firstIcon = ui.findByName(this.icon1);
    var secondIcon = ui.findByName(this.icon2);
    var thirdIcon = ui.findByName(this.icon3);
    
    game.script.game.nullDeploy();
    
    firstIcon.findByName('Border Clicked').enabled = false;
    secondIcon.findByName('Border Clicked').enabled = false;
    thirdIcon.findByName('Border Clicked').enabled = false;
    // tankIcon.findByName('Border Clicked').enabled = false;

    // ui.findByName(this.entity.name).findByName('Border Clicked').enabled = false;

    game.script.game.iconClickedState(false);
    this.clicked = false;
};

Icons.prototype.pulseByResources = function() {
    var resources = this.getResourcesAvailable();
    
    var cannon1FreeState = this.app.root.findByName('Game').script.game.currentFreeCannon1State();
    var cannon2FreeState = this.app.root.findByName('Game').script.game.currentFreeCannon2State();
    
    if(resources < this.price && !cannon1FreeState && !cannon2FreeState){
        this.entity.script.colorPulse.pulse = false;
        
        if(this.clicked){
            this.clearBlueprintMode();
        }
    } else {
        this.entity.script.colorPulse.pulse = true;
    }
};

// update code called every frame
Icons.prototype.update = function(dt) {
    this.pulseByResources();
};

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

