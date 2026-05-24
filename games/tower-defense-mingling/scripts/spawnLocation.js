// spawnLocation.js
var SpawnLocation = pc.createScript('spawnLocation');

SpawnLocation.attributes.add('spawnInterval', { type: 'number', default: 5 });

SpawnLocation.attributes.add('waveOver', { type: 'boolean', default: false });

// SpawnLocation.attributes.add('robot', {type: 'string', title: 'Robot'});
// SpawnLocation.attributes.add('currentWave', {type: 'number', default: 1, title: 'Current Wave'});

// SpawnLocation.attributes.add('currentLevel', {type: 'number', default: 1, title: 'Current Level'});
// SpawnLocation.attributes.add('waveEnemiesCount', { type: 'number', default: 15, title: 'Enemies per wave' });

// SpawnLocation.attributes.add('wave1', { type: 'number', default: 15, title: 'Wave 1 enemies:' });
// SpawnLocation.attributes.add('wave2', { type: 'number', default: 15, title: 'Wave 2 enemies:' });
// SpawnLocation.attributes.add('wave3', { type: 'number', default: 15, title: 'Wave 3 enemies:' });

SpawnLocation.attributes.add("sceneName", {type: "string", default: "", title: "Scene to load:"});

// initialize code called once per entity
SpawnLocation.prototype.initialize = function() {
    this.timeToSpawn = 0;
    
    this.currentWave = 1;
    
    this.wave1 = 1;
    this.wave2 = 1;
    this.wave3 = 1;
    
    this.endlessWave = 10;
    this.endlessWaveTemp = 0;
    // this.endlessWaveIncrement = 10;
    
    this.robot = 'Robot 1';
    
//     var app = this.app;
//     app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    
//     // Remove the listeners so if this entity is destroyed
//     this.on('destroy', function() {
//         this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
//         this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this);
//         this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
//         this.app.mouse.off(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);

//         window.removeEventListener('mouseout', onMouseOut, false);
//     });
};

SpawnLocation.prototype.setEndlessWaveCount = function(enemies) {
    // console.log('Inside setEndlessWaveCount, enemies: ' + enemies);
    this.endlessWave = enemies;
    this.endlessWaveTemp = enemies;
};

SpawnLocation.prototype.decrementEndlessWaveSpawn = function() {
    // console.log('Inside decrementEndlessWaveSpawn');
    this.endlessWave--;
};

SpawnLocation.prototype.incrementEndlessWaveCountReset = function() {
    this.endlessWaveTemp += 10;
    
    var newWave = this.endlessWaveTemp;
    
    this.endlessWave = newWave;
    
    var app = this.app;
    var game = app.root.findByName('Game');
    game.script.game.incrementWaveEndless4();
    
    // console.log('Inside incrementEndlessWaveReset, this.endlessWave: ' + this.endlessWave);
};

SpawnLocation.prototype.resetWaves = function() {
    this.currentWave = 1;
};

SpawnLocation.prototype.changeRobot = function(newRobot){
    this.robot = newRobot;
};

// update code called every frame
SpawnLocation.prototype.update = function(dt) {
    //check the wave to determine which wave to start spawning
    if(this.entity.parent.script.game.showingAd || this.entity.parent.script.game.gamePause)
        return;
    
    switch(this.currentWave){
        case 1:
            //checking if we have double spawns
            //if yes, in the first wave we check for the first road to spawn only
            //and the same logic in the second wave for second road to spawn only
            if(this.doubleSpawnCheck()){
                if(this.entity === this.firstSpawn()){
                    this.spawnEnemies(dt, this.wave1);
                }
            } else {
                this.spawnEnemies(dt, this.wave1);
            }
            // this.spawnEnemies(dt, this.wave1);
            break;
        case 2:
            if(this.doubleSpawnCheck()){
                if(this.entity === this.secondSpawn()){
                    this.spawnEnemies(dt, this.wave2);
                }
            } else {
                this.spawnEnemies(dt, this.wave2);
            }
            // this.spawnEnemies(dt, this.wave2);
            break;
        case 3:
            this.spawnEnemies(dt, this.wave3);
            break;
        default:
            if(this.spawnEndlessModeState()){
                // console.log('Inside update spawn ENDLESS STATE. Current endlessWave:' + this.currentWave);
                this.spawnEnemies(dt, this.endlessWave);
            }
            break;
    }
    
};

SpawnLocation.prototype.spawnEndlessModeState = function() {
    var app = this.app;
    var game = app.root.findByName('Game');
    
    var endlessState = game.script.game.gameEndlessModeState();
    
    return endlessState;
};

SpawnLocation.prototype.spawnEntities = function() {
    var spawns = this.entity.parent.findByTag('SpawnLocation');
    
    return spawns;
};

SpawnLocation.prototype.doubleSpawnCheck = function() {
    var spawns = this.spawnEntities();
    
    if(spawns.length > 1){
        return true;
    } else {
        return false;
    }
};

SpawnLocation.prototype.firstSpawn = function() {
    var spawns = this.spawnEntities();
    
    if(spawns){
        return spawns[0];
    }
};

SpawnLocation.prototype.secondSpawn = function() {
    var spawns = this.spawnEntities();
    
    if(spawns){
        return spawns[1];
    }
};

SpawnLocation.prototype.changeWaveEnemies = function(wave1, wave2, wave3){
    this.currentWave = 1;
    
    this.wave1 = wave1;
    this.wave2 = wave2;
    this.wave3 = wave3;
    
};

// SpawnLocation.prototype.onMouseDown = function (e) {
    
// };

SpawnLocation.prototype.nextPhase = function() {
    var game = this.entity.parent;
    
    
    if((this.waveOver && this.currentWave < 3)){
        this.currentWave += 1;
        this.newWave();
        
        if(this.entity === this.firstSpawn()){
            PokiSDK.gameplayStart();
        }
        
        game.script.game.gamePauseState(false);
        
        var instance = this;
        if ( this.entity.parent.script.game.firstSpeedUpTutorial && (this.entity.parent.script.mapsystem.levelNumber() === 1) && this.currentWave === 2 ){
            instance.app.timeScale = 0;
            
            this.entity.parent.script.game.speedBonusRewardHudBtn.button.active = true;
            
            this.entity.parent.script.game.speedMechanicTutorial(true);
            
            this.entity.parent.script.game.setFirstSpeedState(false);
        } else if ( this.entity.parent.script.game.firstSpeedLockedGame && (this.entity.parent.script.mapsystem.levelNumber() === 1) && this.currentWave === 3 ){
            game.script.game.firstSpeedLockedHandler();
            
            game.script.game.speedBonusTimer(0);
            game.script.game.speedingUpTimerReset(0);
            game.script.game.speedUpState(false);
            
        }
        
    }
    else if(this.spawnEndlessModeState()) {
        this.currentWave += 1;
        this.newWave();
        
        game.script.game.gamePauseState(false);
        
        this.incrementEndlessWaveCountReset();
        
        if(this.entity === this.firstSpawn()){
            PokiSDK.gameplayStart();
        }
        
        // console.log('Inside nextPhase in endless mode, after incrementEndlessWaveCountReset');
    }
    else if(this.waveOver && this.currentWave >= 3){
        // this.entity.script.changingScenes.changeScene();
        // this.app.root.findByName('Game').script.game.changeScene();
        // this.entity.parent.script.game.changeScene();
        
        //copy from here and relocate it to a button script about Next Wave logic
        this.newWave();
        this.levelSuccess(false);
        
        game.script.game.gamePauseState(false);
        
        var app = this.app;
        
        var ui = app.root.findByName('UI');
        var roadMap = ui.findByName('Levels');
        var gameScreen = ui.findByName('GameScreen');
        
        var maps = app.root.findByName('Maps');
        
        roadMap.enabled = true;
        gameScreen.enabled = false;
        
        var currentLevel = this.entity.parent.script.mapsystem.currentLevel;
        
        game.script.game.clearLevelGridHighlight();
        
        switch(currentLevel){
            case 1:
                var levelMap = ui.findByName('LevelMap');
                levelMap.findByName('Stars').enabled = false;
                levelMap.findByName('StarsOn').enabled = true;
                
                levelMap.findByName('Endless Button').button.active = true;
                
                var level2button = roadMap.findByName('Level 2 Button');
                level2button.enabled = true;
                
                game.findByName('Destination Base 1').enabled = false;
                
                maps.findByName('1').enabled = false;
                break;
            case 2:
                //same logic as above now for reaching level 2
                var levelMap2 = ui.findByName('LevelMap2');
                levelMap2.findByName('Stars').enabled = false;
                levelMap2.findByName('StarsOn').enabled = true;
                
                levelMap2.findByName('Endless Button').button.active = true;
                
                var level3button = roadMap.findByName('Level 3 Button');
                level3button.enabled = true;
                
                game.findByName('Destination Base 2').enabled = false;
                
                maps.findByName('2').enabled = false;
                break;
            case 3:
                //same logic as above now for reaching level 3
                var levelMap3 = ui.findByName('LevelMap3');
                levelMap3.findByName('Stars').enabled = false;
                levelMap3.findByName('StarsOn').enabled = true;
                
                levelMap3.findByName('Endless Button').button.active = true;
                
                var level4button = roadMap.findByName('Level 4 Button');
                level4button.enabled = true;
                
                game.findByName('Destination Base 3').enabled = false;
                
                maps.findByName('3').enabled = false;
                break;
            case 4:
                //same logic as above now for reaching level 4
                var levelMap4 = ui.findByName('LevelMap4');
                levelMap4.findByName('Stars').enabled = false;
                levelMap4.findByName('StarsOn').enabled = true;
                
                levelMap4.findByName('Endless Button').button.active = true;
                
                var level5button = roadMap.findByName('Level 5 Button');
                level5button.enabled = true;
                
                game.findByName('Destination Base 4').enabled = false;
                
                maps.findByName('4').enabled = false;
                break;
            case 5:
                //same logic as above now for reaching level 5
                var levelMap5 = ui.findByName('LevelMap5');
                levelMap5.findByName('Stars').enabled = false;
                levelMap5.findByName('StarsOn').enabled = true;
                
                levelMap5.findByName('Endless Button').button.active = true;
                
                var level6button = roadMap.findByName('Level 6 Button');
                level6button.enabled = true;
                
                game.findByName('Destination Base 5').enabled = false;
                
                maps.findByName('5').enabled = false;
                break;
            case 6:
                //same logic as above now for reaching level 6
                var levelMap6 = ui.findByName('LevelMap6');
                levelMap6.findByName('Stars').enabled = false;
                levelMap6.findByName('StarsOn').enabled = true;
                
                levelMap6.findByName('Endless Button').button.active = true;
                
                game.findByName('Destination Base 6').enabled = false;
                
                maps.findByName('6').enabled = false;
                break;
            default:
                break;
        }
        //until here, leave the destroy method below here
        
        //the method below makes the unit selection UI false everytime we finish a level 
        var unitSelections = gameScreen.findByTag('Unit Selection');
        for(var i = 0; i < unitSelections.length; i++){
            unitSelections[i].enabled = false;
        }
        
        var backgroundMusic = app.root.findByName('Background Music');
        backgroundMusic.sound.stop();
        
        //saving game state when finish the level
        game.script.game.saveGameState(currentLevel);
        
        //destroy the spawn entity, so we can create it again for the next level
        this.entity.destroy();
    }
};

SpawnLocation.prototype.waveDone = function() {
    var app = this.app;
    var ui = app.root.findByName('UI');
    
    ui.findByName('Wave Done').enabled = true;
};

SpawnLocation.prototype.newWave = function() {
    var app = this.app;
    var ui = app.root.findByName('UI');
    
    ui.findByName('Wave Done').enabled = false;
    
    // this.currentWave += 1;
    
    // this.waveOver = false;
    // this.timeToSpawn = 0;
};

SpawnLocation.prototype.getCurrentWave = function(){
    var wave = this.currentWave;
    
    return wave;
};

SpawnLocation.prototype.decreaseEnemyCount = function() {
    switch(this.currentWave){
        case 1:
            this.wave1--;
            break;
        case 2:
            this.wave2--;
            break;
        case 3:
            this.wave3--;
            break;
        default:
            break;
    }
};

SpawnLocation.prototype.spawnEnemies = function(dt, enemiesCount) {
    var app = this.app;
    var game = app.root.findByName('Game');
    var destination = game.findByName('Destination');
    
    // if(this.spawnEndlessModeState() && this.currentWave > 3)
        // console.log('Inside spawninEnemies in Endless mode, before enemiesCount > 0. enemiesCount: ' + enemiesCount);
    //checking if we have spawned the neccessary enemies for this wave
    if(enemiesCount > 0){
        
        //then we check if the destination is still not destroyed
        if (destination) {
            // if(this.spawnEndlessModeState() && this.currentWave > 3)
                // console.log('Inside spawning in Endless mode, after passing if(destination)');
            //reducing the time to reach the spawn timer
            this.timeToSpawn -= dt;
            if (this.timeToSpawn <= 0) {
                // if(this.spawnEndlessModeState() && this.currentWave > 3)
                    // console.log('Inside spawning in Endless mode, after passing timeToSpawn <= 0');
                
                var templates = app.root.findByName('Templates');
                var unitTemplate = templates.findByName(this.robot);
                var unitClone = unitTemplate.clone();
                this.entity.addChild(unitClone);
                unitClone.setPosition(this.entity.getPosition());
                unitClone.enabled = true;

                var scale = pc.math.clamp(1200 - game.script.game.timer, 0, 1200) / 1200;
                this.timeToSpawn = this.spawnInterval * scale;

                // this.waveEnemiesCount--;
                // enemiesCount--;

                if(this.spawnEndlessModeState() && this.currentWave > 3){
                    // console.log('Inside spawning in Endless mode, right before decrementing endless wave!');
                    this.decrementEndlessWaveSpawn();
                } else {
                    this.decreaseEnemyCount();
                }
                
                // if(this.doubleSpawnCheck){
                //     switch(this.currentWave){
                //         case 1:
                //             var second = this.secondSpawn();
                //             second.script.spawnLocation.decreaseEnemyCount();
                //             break;
                //         case 2:
                //             var first = this.firstSpawn();
                //             first.script.spawnLocation.decreaseEnemyCount();
                //             break;
                //         default: 
                //             break;
                //     }
                // }
            }
        }
        this.waveOverState(false);
    }
    //if not, then declare the wave over
    else if (!this.waveOver && this.noRemainingEnemies()) {
        if(this.gameOverCheck() === false){
            this.waveDone();
            this.waveOverState(true);
            
            //CHANGES
            game.script.game.gamePauseState(true);
            // if(this.entity.parent.script.mapsystem.levelNumber() > 1){
                PokiSDK.gameplayStop();
            // }
            
            game.script.game.resetUnitDeploy();
            
            game.script.game.triggerCommercialBreak(false, false);
        }
        
        if(this.gameOverCheck() === false && this.currentWave >= 3 && !this.spawnEndlessModeState()){
            this.newWave();
            
            this.levelSuccess(true);
        }
    }
};

//checking for double spawns so we know when to change waveOver state
//this way, we avoid getting stuck after wave1 bug
SpawnLocation.prototype.waveOverState = function(newState) {
    if(this.doubleSpawnCheck()){
        var spawns = this.spawnEntities();
        
        // for(var i = 0; i < spawns.length; i++){
        //     spawns[i].script.spawnLocation.waveOver = newState;
        // }
        
        spawns[0].script.spawnLocation.waveOver = newState;
        spawns[1].script.spawnLocation.waveOver = newState;
    } else {
        this.waveOver = newState;
    }
    
};

SpawnLocation.prototype.levelSuccess = function(newState) {
    var app = this.app;
    var ui = app.root.findByName('UI');
            
    var levelSuccessUi;
    
    var currentLevel = this.entity.parent.script.mapsystem.levelNumber();
    
    switch(currentLevel){
        case 1:
            levelSuccessUi = ui.findByName('LevelMap 1 Success');
            break;
        case 2:
            levelSuccessUi = ui.findByName('LevelMap 2 Success');
            break;
        case 3:
            levelSuccessUi = ui.findByName('LevelMap 3 Success');
            break;
        case 4:
            levelSuccessUi = ui.findByName('LevelMap 4 Success');
            break;
        case 5:
            levelSuccessUi = ui.findByName('LevelMap 5 Success');
            break;
        case 6:
            levelSuccessUi = ui.findByName('LevelMap 6 Success');
            break;
        default:
            break;
    }

    levelSuccessUi.enabled = newState;
};

//method checking if there are enemies left to destroy or didn't reach the ally base yet
SpawnLocation.prototype.noRemainingEnemies = function(){
    var app = this.app;
    var game = app.root.findByName('Game');
    
    var noEnemies = false;
    var robotName = this.robot;
    var robots = game.find("name", robotName);
    
    if(robots.length > 0){
        noEnemies = false;
    } 
    else{
        noEnemies = true;
    }
    
    return noEnemies;
};

SpawnLocation.prototype.gameOverCheck = function() {
    var app = this.app;
    var game = app.root.findByName('Game');
    var gOver = game.script.game.isGameOver;
    
    return gOver;
};

// SpawnLocation.prototype.changeScene = function() {
//     this.loadScene(this.sceneName);
// };

// SpawnLocation.prototype.loadScene = function(sceneName){
//     // Get a reference to the scene's root object
//     // var oldHierarchy = this.app.root.findByName ('Root');
    
//     // Get the path to the scene
//     // var scene = sceneName;
//     // var sceneId = this.app.getSceneUrl(this.sceneName);
//     var oldHierarchy = this.app.root.findByName('Root');
    
//     var scene = this.app.scenes.find(sceneName);
    
//     // this.app.scenes.find(sceneName);
    
//     // Load the scenes entity hierarchy
//     this.app.scenes.loadSceneHierarchy(scene.url, function (err, parent) {
//         if (!err) {
//             // callback(parent);
//             oldHierarchy.destroy();
//         } else {
//             console.error(err);
//         }
//     });
// };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

