// button.js
var Button = pc.createScript('button');

Button.attributes.add("currentLevel", {type: "number", title: "Current Level"});
Button.attributes.add("unitSelectionType", {type: "string", default: '', title: "Unit selection type:"});

Button.attributes.add("endlessMode", {type: "boolean", default: false});

// Button.attributes.add("levelMiniMap", {type: "string", default: '', title: "Level minimap:"});

//CODE ABOUT CHANGE SCENE
// Button.attributes.add("sceneName", {type: "string", default: '', title: "Scene to load:"});

// initialize code called once per entity
Button.prototype.initialize = function() {
    this.ui = this.app.root.findByName('UI');
    
    this.levelScreen = this.ui.findByName('Levels');
    this.levelMap = this.ui.findByName(this.levelMiniMap);
    
    this.unitSelection = this.ui.findByName(this.unitSelectionType);
    
    this.entity.button.on('click', this.onPlay, this);
    
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    
    this.endlessActiveState();
};

Button.prototype.onKeyDown = function(e){
    if(this.entity.enabled){
        if (e.key === pc.KEY_SPACE || e.key === pc.KEY_ENTER) {
            this.buttonEvent();
        }
        e.event.preventDefault(); // Use original browser event to prevent browser action.
    }
};

Button.prototype.onPlay = function() {
    this.buttonEvent();
};

Button.prototype.endlessActiveState = function() {
    //checking if endless mode is not yet unlocked on this level
    if(this.buttonEndlessModeState()){
        var stars = this.entity.parent.findByName('StarsOn');
        var completed = stars.enabled;
        
        if(completed){
            this.entity.button.active = true;
        }
    }
};

Button.prototype.levelButtonsActiveState = function(newState){
    var app = this.app;
    var ui = app.root.findByName('UI');
    var levels = ui.findByName('Levels');
    
    var buttons = levels.findByTag('Level');
            
    for(var i = 0; i < buttons.length; i++){
        buttons[i].button.active = newState;
    }
};

Button.prototype.buttonEndlessModeState = function() {
    var endlessState = this.endlessMode;
    
    return endlessState;
};

Button.prototype.buttonEvent = function(){
    var app = this.app;
    var endlessnotUnlockedTutorial = this.ui.findByName('Endless Not Unlocked Tutorial');
    
    endlessnotUnlockedTutorial.enabled = false;
    var game = app.root.findByName('Game');
    
    if(game.script.game.showingAd){
        return;
    }
    
    this.entity.sound.play('PlayButton');
    
    //maybe we should not call commercialBreak on level start while we just called it when it finished previously
    //plus if it's level 1, starting immediately on an ad may be frustrating
    game.script.game.triggerCommercialBreak(false, true);

    var gameScreen = this.ui.findByName('GameScreen');
    var mapAssets = this.app.root.findByName('Maps');

    var spawn = game.findByName('Spawn');

    var cameraEntity = game.findByName('Camerat');

    this.entity.parent.enabled = false;
    this.levelScreen.enabled = false;

    gameScreen.enabled = true;
    this.unitSelection.enabled = true;

    game.script.mapsystem.changeLevelNumber(this.currentLevel);

    game.script.game.newGame();

    // game.findByName('Destination').script.baseHealth.resetMaxHealth();
    game.script.game.resetMaxHealth();

    this.levelButtonsActiveState(true);

    var backgroundMusic = this.app.root.findByName('Background Music');
    
    if(this.currentLevel !== 1){
        this.ui.findByName('SpeedButton').button.active = true;
    }
    //knowing when it's endless mode
    game.script.game.setGameEndlessModeState(this.buttonEndlessModeState());

    // this.changeScene();
    switch(this.currentLevel){
        case 1:
            game.script.game.resetNewWaves(5,15,25, 'Robot 1', 20);

            // game.findByName('Destination').script.baseHealth.healthBarPositioning();

            game.findByName('Destination Base 1').enabled = true;

            mapAssets.findByName('1').enabled = true;

            cameraEntity.setLocalPosition(new pc.Vec3(16.491,21.1,39.934));
            cameraEntity.setLocalEulerAngles(new pc.Vec3(-52.79,-18.8,0));

            backgroundMusic.sound.play('Forest Theme');
            
            break;
        case 2:
            game.script.game.resetNewWaves(25,35,45, 'Robot 2', 45);

            // game.findByName('Destination').script.baseHealth.healthBarPositioning();

            game.findByName('Destination Base 2').enabled = true;

            mapAssets.findByName('2').enabled = true;

            cameraEntity.setPosition(19.214,25.662,42.715);
            cameraEntity.setLocalEulerAngles(-53.99,-11.8,0);

            backgroundMusic.sound.play('Forest Theme');
            break;
        case 3:
            game.script.game.resetNewWaves(25,35,30, 'Robot 3', 30);

            // game.findByName('Destination').script.baseHealth.healthBarPositioning();

            game.findByName('Destination Base 3').enabled = true;

            mapAssets.findByName('3').enabled = true;

            cameraEntity.setPosition(31.534,23.534,40.307);
            cameraEntity.setLocalEulerAngles(-53.39,-14.6,0);

            backgroundMusic.sound.play('Forest Theme');
            break;
        case 4:
            game.script.game.resetNewWaves(25,35,45, 'Robot 4', 45);

            // game.findByName('Destination').script.baseHealth.healthBarPositioning();

            game.findByName('Destination Base 4').enabled = true;

            mapAssets.findByName('4').enabled = true;

            cameraEntity.setPosition(17.749,24.748,45.093);
            cameraEntity.setLocalEulerAngles(-45.39,-18.8,0);

            backgroundMusic.sound.play('Desert Theme');
            break;
        case 5:
            game.script.game.resetNewWaves(25,35,40, 'Robot 5', 40);

            // game.findByName('Destination').script.baseHealth.healthBarPositioning();

            game.findByName('Destination Base 5').enabled = true;

            mapAssets.findByName('5').enabled = true;

            cameraEntity.setPosition(21.81,28.739,45.81);
            cameraEntity.setLocalEulerAngles(-49.59,-17.8,0);

            backgroundMusic.sound.play('Desert Theme');
            break;
        case 6:
            game.script.game.resetNewWaves(25,35,45, 'Robot 6', 45);

            // game.findByName('Destination').script.baseHealth.healthBarPositioning();

            game.findByName('Destination Base 6').enabled = true;

            mapAssets.findByName('6').enabled = true;

            cameraEntity.setPosition(21.348,29.707,43.593);
            cameraEntity.setLocalEulerAngles(-52.39,-20.4,0);

            backgroundMusic.sound.play('Desert Theme');
            break;
        default:
            break;
    }
    
    // game.script.game.incrementStateReset();
    if(this.currentLevel !== 1 || !game.script.game.firstTutorialShowcase){
        this.timeScaleState(1);
    }
    game.script.game.gamePauseState(false);
    
    //starting
    // if(!game.script.game.firstTutorialShowcase){
    //     PokiSDK.gameplayStart();
    // }
    
};

Button.prototype.timeScaleState = function(newState) {
    this.app.timeScale = newState;
    // console.log('TimeScale: ' + this.app.timeScale);
};

//CODE ABOUT CHANGING SCENES
// Button.prototype.changeScene = function() {
        
//     this.loadScene(this.sceneName);
// };

// Button.prototype.loadScene = function (sceneName, callback) {
//     // Get a reference to the scene's root object
    
//     var oldHierarchy = this.app.root.findByName ('Root');
    
    
//     // Get the path to the scene
//     var scene = this.app.scenes.find(sceneName);
    
//     // Load the scenes entity hierarchy
//     this.app.scenes.loadSceneHierarchy(scene.url, function (err, parent) {
//         if (!err) {
//             oldHierarchy.destroy();
//         } else {
//             console.error(err);
//         }
//     });
// };

// Button.prototype.loadScene = function (sceneName) {
//     // Get a reference to the scene's root object
//     var oldHierarchy = this.app.root.findByName ('Root');
    
//     // Get the path to the scene
//     var scene = this.app.scenes.find(sceneName);
    
//     // Load the scenes entity hierarchy
//     this.app.scenes.loadSceneHierarchy(scene.url, function (err, parent) {
//         if (!err) {
//             oldHierarchy.destroy();
//         } else {
//             console.error(err);
//         }
//     });
// };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

