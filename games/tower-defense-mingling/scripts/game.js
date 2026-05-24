// game.js
// Timer method - use for survival mode only
/*
    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = hours+':'+minutes+':'+seconds;
        return time;
    };
*/

var Game = pc.createScript('game');

Game.attributes.add('initialResources', { type: 'number', default: 500 });
Game.attributes.add('resourceIncrement', { type: 'number', default: 50 });
Game.attributes.add('resourceInterval', { type: 'number', default: 10 });

Game.attributes.add('watchAdButton', { type: 'entity' });
Game.attributes.add('bonusRewardHudTimer', { type: 'entity' });
Game.attributes.add('bonusRewardHudBtn', { type: 'entity' });
Game.attributes.add('bonusRewardTxt', { type: 'entity' });

Game.attributes.add('watchAdSpeedButton', { type: 'entity' });
Game.attributes.add('speedBonusRewardHudTimer', { type: 'entity' });
Game.attributes.add('speedBonusRewardHudBtn', { type: 'entity' });
Game.attributes.add('speedBonusRewardTxt', { type: 'entity' });

Game.attributes.add('watchAdInterface', {type: 'entity'});
Game.attributes.add('speedUpWatchAdInterface', {type: 'entity'});

//chests attributes
Game.attributes.add('chestsInterface', {type: 'entity'});
Game.attributes.add('commonButtonReward', {type: 'entity'});
Game.attributes.add('rareButtonReward', {type: 'entity'});
Game.attributes.add('epicButtonReward', {type: 'entity'});

Game.attributes.add('commonRewardCollectWindow', {type: 'entity'});
Game.attributes.add('rareRewardCollectWindow', {type: 'entity'});
Game.attributes.add('epicRewardCollectWindow', {type: 'entity'});

Game.attributes.add('placementMaterial', {type: 'asset', assetType: 'material'});

Game.attributes.add('tutorial', {type: 'entity'});

// Game.attributes.add('storageFactory', { type: 'entity' });

Game.attributes.add('showingAd', { type: 'boolean', default: false });

Game.attributes.add("sceneName", {type: "string", default: "", title: "Scene to load:"});

Game.attributes.add('sellButton', {type: 'entity'});

Game.attributes.add('remainingHP', {type: 'entity'});

Game.attributes.add('enemiesLeft', {type: 'entity'});
Game.attributes.add('wavesLeft', {type: 'entity'});

Game.attributes.add('quitMenu', {type: 'entity'});

// Game.attributes.add('spawn', { type: 'entity', title: 'SpawnLocation' });

// initialize code called once per entity
Game.prototype.initialize = function() {
    var sc = document.createElement("script");
    sc.setAttribute("src", "./scripts/v2/poki-sdk.js");
    sc.setAttribute("type", "text/javascript");
    document.head.appendChild(sc);
    
    var instance = this;
    
    sc.addEventListener("load", function(e) {
        instance.initializePoki();
    });
    
    this.storageFactory = this.entity.script.storageFactory;
    
    this.loadGameState();
    
    instance.calculateDimensions();
    // On orientation change
    window.addEventListener("orientationchange", function(){
        var ui = instance.app.root.findByName('UI');
        var orientationTutorial = ui.findByName('Orientation Tutorial');

        var w = window.innerWidth;
        var h = window.innerHeight;
        console.log(w + " : " + h);

        if(w > h){
            // Landscape
            orientationTutorial.enabled = false;
            instance.app.timeScale = 1;
        }
        else if (w === h){
            // Square
            orientationTutorial.enabled = true;
            instance.app.timeScale = 0;
        }
        else{
            // Portrait
            orientationTutorial.enabled = true;
            instance.app.timeScale = 0;
        }
    }, false);
    // On resize
    window.addEventListener("resize", function(){
        var ui = instance.app.root.findByName('UI');
        var orientationTutorial = ui.findByName('Orientation Tutorial');

        var w = window.innerWidth;
        var h = window.innerHeight;
        console.log(w + " : " + h);

        if(w > h){
            // Landscape
            orientationTutorial.enabled = false;
            instance.app.timeScale = 1;
        }
        else if (w === h){
            // Square
            orientationTutorial.enabled = true;
            instance.app.timeScale = 0;
        }
        else{
            // Portrait
            orientationTutorial.enabled = true;
            instance.app.timeScale = 0;
        }
    }, false);
    
    
    this.bonusRewardTimer = 180000;
    this.speedUpBonusRewardTimer = 180000;
    this.speedingUpTimer = 0;
    
    this.bonusCommonChestTimer = 300000;
    this.bonusRareChestTimer = 300000;
    this.bonusEpicChestTimer = 300000;
    
    this.rareChestAdCounter = 2;
    this.epicChestAdCounter = 3;
    
    this.rareChestCooldownTimer = 600000;
    this.epicChestCooldownTimer = 600000;
    
    this.freeCannon1Reward = false;
    this.freeCannon2Reward = false;
    
    this.unitToDeploy = null;
    this.unitToDeployBlueprint = null;
    this.enemies = [];

    this.timer = 0;
    this.resources = 500;
    this.isGameOver = false;
    // this.isWaveOver = false;
    // this.resourceTimer = 0;
    this.intro = true;
    
    this.gamePause = true;
    
    this.speedBonusRewardHudBtn.button.active = false;

    var app = this.app;
    var templates = app.root.findByName('Templates');
    
    // //code to remove Chrome policy on sound restrictions
    // var resumeContext = function () {
    //     app.systems.sound.manager.context.resume();            
    //     window.removeEventListener('mousedown', resumeContext);
    //     window.removeEventListener('touchend', resumeContext);
    // };
    // window.addEventListener('mousedown', resumeContext);
    // window.addEventListener('touchend', resumeContext);
    // /////////////////////
    
    this.watchAdButton.button.on('click', this.onAd,this);
    this.watchAdSpeedButton.button.on('click', this.onAdSpeedUp,this);
    
    this.commonButtonReward.button.on('click', this.onAdCommonChest, this);
    this.rareButtonReward.button.on('click', this.onAdRareChest, this);
    this.epicButtonReward.button.on('click', this.onAdEpicChest, this);
    
    this.lastTouch = new pc.Vec2(0, 0);

    if ( this.app.touch !== null ) {
        app.touch.on(pc.EVENT_TOUCHSTART, function (e) { this.onMouseDown(this.getTouch(e), true); }, this);
        // app.touch.on(pc.EVENT_TOUCHEND, function (e) { this.onMouseUp(this.lastTouch, true); }, this);
    }
    app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    
    //window state
    // window.onblur = this.onBlur;
    // window.onfocus = this.onFocus;
    
    window.addEventListener('blur', function() { instance.app.timeScale = 0; });
    window.addEventListener('focus', function() {
        var speedState = instance.getSpeedUpState();
        if(instance.speedingUp){
            instance.app.timeScale = 2;
        } else if(this.gamePause) {
            instance.app.timeScale = 0;
        } else {
            instance.app.timeScale = 1;
        }
        
        instance.quitMenu.enabled = false;
        instance.gamePauseState(false);
    });
    
    // window.on('blur', this.onBlur, this);
    // window.on('focus', this.onFocus, this);
    
    //camera entity
    this.cameraEntity = this.findCamera();
    
    //disable right click menu in browser
    app.mouse.disableContextMenu();
    
    //ray entity to use in plane drag projection
    this.ray = new pc.Ray();
    
    //unit that we clicked to sell
    this.unitToSellPosition = new pc.Vec3();
    
    //a state we use to know when we're dragging and when not
    this.dragState = false;
    //mobile version
    this.mobileDragState = false;
    
    //this.dragEntity = null;
    //this.mouseDragEntity = null;
    
    //Current speeding up state
    this.speedingUp = false;
    
    this.sellButtonHover = false;
    
    //state of initial position saved, to know when and which entitys initial position to save
    this.initialPositionSaved = false;
    //variables to know the initial position of the entity we're about to pick
    this.initialPosition = new pc.Vec3();
    this.initialPositionX = null;
    this.initialPositionY = null;
    this.initialPositionType = null;
    
    //public variables we use to know when the first cannon of this type has been unlocked
    this.firstYellow2 = true;
    this.firstYellow3 = true;
    this.firstBlack2 = true;
    this.firstBlack3 = true;
    this.firstBlue2 = true;
    this.firstBlue3 = true;
    this.firstWhite2 = true;
    this.firstWhite3 = true;
    this.firstRed2 = true;
    this.firstRed3 = true;
    this.firstGreen2 = true;
    this.firstGreen3 = true;
    
    this.gameEndless = false;
    
    this.endlessRobotHp = 0;
    this.endlessRobotSpeed = 0;
    
    this.firstTutorialShowcase = true;
    
    this.firstMerge = true;
    this.mergeCount = 0;
    
    this.firstSpeedLockedGame = true;
    
    this.getSpotlightChildren = false;
    
    this.hpElement = this.remainingHP.element.width;
    this.currentHealth = 100;
    
    this.incrementEnemiesLeft = 0;
    
    this.iconClicked = false;
    
    this.firstSpeedUpTutorial = true;
    
    this.newGame();
    
    this.rewardTimer();
    this.speedRewardTimer();
    
    //intitializing chest timers logic
    this.commonChestTimer();
    this.rareChestTimer();
    this.epicChestTimer();
    
    this.opaqueMaterial();
};

Game.prototype.initializePoki = function () {
    
    this.app.systems.sound.volume = 0;
    
    PokiSDK.init().then(() => {
        
        console.log("Poki SDK successfully initialized");
        PokiSDK.gameLoadingStart();
        PokiSDK.gameLoadingFinished();

//         PokiSDK.commercialBreak().then(() => {

//             console.log("Commercial break finished, proceeding to game");
            
//             try {
//                 // var settings = JSON.parse(this.storageFactory.getItem("settings"));
//                 // if ( settings[0] ) this.app.systems.sound.volume = 1;
//             }catch(error) {
//                 console.log(error);
//             }

//         });
        
    }, this).catch(() => {
        
        console.log("Initialized, but the user likely has adblock");
        
        PokiSDK.gameLoadingStart();
        PokiSDK.gameLoadingFinished();

        try {
            // var settings = JSON.parse(this.storageFactory.getItem("settings"));
            // if ( settings[0] ) this.app.systems.sound.volume = 1;
        }catch(error) {
            console.log(error);
        }
    });
    
    // PokiSDK.setDebug(true);    
};

Game.prototype.opaqueMaterial = function() {
    const material = new pc.StandardMaterial(this.placementMaterial);
    // material.diffuse = new pc.Color(0.7, 0.7, 0.7);
     material.metalness = 0.0;
    // material.shininess = ((z) / (NUM_SPHERES_Z - 1) * 50) + 50;
    // material.useMetalness = true;
    material.blendType = pc.BLEND_NORMAL;
    // material.opacity = (x >= 5) ? ((x - 5) / 5 + 0.2) * ((x - 5) / 5 + 0.2) : (x / 5 + 0.2) * (x / 5 + 0.2);
    //material.opacity = 0.3;
     material.alphaWrite = false;
    material.update();
};

// Game.prototype.onBlur = function() {
//     console.log('INSIDE ONBLUR');
    
//     this.app.timeScale = 0;
// };

// Game.prototype.onFocus = function() {
//     console.log('INSIDE ONFOCUS');
    
//     this.app.timeScale = 1;
// };

// update code called every frame
// update the game and resource timer as time progresses
Game.prototype.update = function(dt) {
    if (!this.isGameOver) {
        var app = this.app;
        var ui = app.root.findByName('UI');
        
        // this.timer += dt;
        
        //code for automatic resource increment and timer - use for survival mode only
        /*
            this.resourceTimer += dt;

            if (this.resourceTimer > this.resourceInterval) {
                this.resources += this.resourceIncrement;
                this.resourceTimer = 0;
            }
            var timeStr = ("" + this.timer).toHHMMSS();
            var uiTimer = ui.findByName('Time Display');
            uiTimer.element.text = timeStr;
        */
        
//         var spawnCount = this.entity.findByTag('Spawn Location');
        
//         if(spawnCount === 2){
//             this.enemiesLeft.element.text = "";
//             this.enemiesLeft2.element.text = "";
//         }
        
//         this.wavesLeft.element.text = "";
        
        var limitThousand = 9999;
        var resourceLimited = Math.floor(this.resources/1000);

        var uiResources = ui.findByName('Resources Display');
        if(this.resources > limitThousand){
            uiResources.element.text = "" + resourceLimited + "K";
        } else {
            uiResources.element.text = "" + this.resources;
        }
        
        if(this.iconClicked){
            this.gridHighlightState(true);
        } else {
            this.gridHighlightState(false);
        }
    }
};

//function to detect the device orientation, we need it to be landscape
Game.prototype.calculateDimensions = function(){
    var app = this.app;
    var ui = app.root.findByName('UI');
    var orientationTutorial = ui.findByName('Orientation Tutorial');
    
    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log(w + " : " + h);

    if(w > h){
        // Landscape
        orientationTutorial.enabled = false;
        app.timeScale = 1;
    }
    else if (w === h){
        // Square
        orientationTutorial.enabled = true;
        app.timeScale = 0;
    }
    else{
        // Portrait
        orientationTutorial.enabled = true;
        app.timeScale = 0;
    }
};

Game.prototype.setGameEndlessModeState = function(newState) {
    console.log('setGameEndlessState: ' + newState);
    this.gameEndless = newState;
};

Game.prototype.gameEndlessModeState = function() {
    var endlessState = this.gameEndless;
    
    return endlessState;
};

Game.prototype.clearLevelGridHighlight = function() {
    
    var levelGrid = this.entity.findByName('Level Grid');
    if(levelGrid)
        levelGrid.destroy();
    
//     var gridComponents = this.entity.findByName('Level Grid').children;
    
//     for(var i = 0; i < gridComponents.length; i++){
//         gridComponents[i].destroy();
        
//         // console.log(`Clear log index: ${i}`);
//         // gridComponents[i].removeChild();
//         // gridComponents[i] = null;
//     }
    
    // gridComponents = [];
    
    // console.log('GreenGrid: ' + this.entity.findByName('Level Grid').children.length);
};

Game.prototype.gridHighlightState = function(newState){
    var levelGrid = this.entity.findByName('Level Grid');
    
    if(levelGrid)
        levelGrid.enabled = newState;
};

Game.prototype.getWaveCounts = function() {
    // this.maxEnemiesCount;
    // this.enemiesCount;
    // this.enemiesCount2;
    // this.waveCount;
};

Game.prototype.commonChestTimer = function() {
    setInterval(function () {
        this.bonusCommonChestTimer += 1000;

        var rewardText = this.commonButtonReward.findByName('Common Chest Timer');
        
        if ( this.bonusCommonChestTimer < 300000 ) {

            var ms = 300000 - this.bonusCommonChestTimer;

            var seconds = ms / 1000;
            var minutes = parseInt( seconds / 60 );
            seconds = seconds % 60;
            
            rewardText.element.text = Math.round(minutes) + ":" + ( Math.round(seconds) < 10 ? "0" + Math.round(seconds) : Math.round(seconds) );
            rewardText.element.fontSize = 32;
            // this.commonChestButtonLocked.enabled = true;
            // this.commonButtonReward.active = false;

        }

        if ( this.bonusCommonChestTimer >= 300000 ) {

            // this.commonChestButtonLocked.enabled = false;
            this.commonButtonReward.button.active = true;
            
            rewardText.element.text = "Watch 1 AD";
            rewardText.element.fontSize = 19;
            
            // this.rewardValueCommonChest = this.randomReward();

        }
    }.bind(this), 1000);
};

Game.prototype.rareChestTimer = function() {
    setInterval(function () {
        this.bonusRareChestTimer += 1000;

        var rewardText = this.rareButtonReward.findByName('Rare Chest Timer');
        
        if ( this.bonusRareChestTimer < 300000 ) {

            var ms = 300000 - this.bonusRareChestTimer;

            var seconds = ms / 1000;
            var minutes = parseInt( seconds / 60 );
            seconds = seconds % 60;
            
            rewardText.element.text = Math.round(minutes) + ":" + ( Math.round(seconds) < 10 ? "0" + Math.round(seconds) : Math.round(seconds) );
            rewardText.element.fontSize = 32;

            // this.rareChestButtonLocked.enabled = true;
            // this.rareButtonReward.button.active = false;

        }

        if ( this.bonusRareChestTimer >= 300000 ) {

            // this.rareChestButtonLocked.enabled = false;
            this.rareButtonReward.button.active = true;
            
            this.setRemainingRareAds();
            rewardText.element.fontSize = 19;
            
            // this.rewardValueRareChest = this.randomReward();

        }
    }.bind(this), 1000);
};

Game.prototype.epicChestTimer = function() {
    setInterval(function () {
        this.bonusEpicChestTimer += 1000;

        var rewardText = this.epicButtonReward.findByName('Epic Chest Timer');
        
        if ( this.bonusEpicChestTimer < 300000 ) {

            var ms = 300000 - this.bonusEpicChestTimer;

            var seconds = ms / 1000;
            var minutes = parseInt( seconds / 60 );
            seconds = seconds % 60;

            rewardText.element.text = Math.round(minutes) + ":" + ( Math.round(seconds) < 10 ? "0" + Math.round(seconds) : Math.round(seconds) );
            rewardText.element.fontSize = 32;

            // this.epicChestButtonLocked.enabled = true;
            // this.epicButtonReward.button.active = false;

        }

        if ( this.bonusEpicChestTimer >= 300000 && !this.epicButtonReward.active ) {

            // this.epicChestButtonLocked.enabled = false;
            this.epicButtonReward.button.active = true;
            
            this.setRemainingEpicAds();
            rewardText.element.fontSize = 19;
            
            // this.rewardValueEpicChest = this.randomReward();

        }
    }.bind(this), 1000);
};

Game.prototype.rewardTimer = function() {
    setInterval(function () {

        this.bonusRewardTimer += 1000;

        if ( this.bonusRewardTimer < 180000 ) {

            var ms = 180000 - this.bonusRewardTimer;

            var seconds = ms / 1000;
            var minutes = parseInt( seconds / 60 );
            seconds = seconds % 60;

            var rewardText = this.bonusRewardHudTimer.findByName('Ad Timer');
            rewardText.element.text = Math.round(minutes) + ":" + ( Math.round(seconds) < 10 ? "0" + Math.round(seconds) : Math.round(seconds) );

            this.bonusRewardHudTimer.enabled = true;
            this.bonusRewardHudBtn.enabled = false;

        }

        if ( this.bonusRewardTimer >= 180000 && !this.bonusRewardHudBtn.enabled ) {

            this.bonusRewardHudTimer.enabled = false;
            this.bonusRewardHudBtn.enabled = true;
            
            //7 milestones possible starting from 3, (300-1000)
            this.rewardValue = this.randomReward(7,3);
            
            this.bonusRewardTxt.element.text = this.rewardValue;

        }

    }.bind(this), 1000);
};

Game.prototype.setSpeedLockedState = function(newState){
    this.firstSpeedLockedGame = newState;
};

Game.prototype.firstSpeedLockedHandler = function() {
    this.resetUnitDeploy();
    this.gamePauseState(true);

    this.app.timeScale = 0;

    this.speedLockedMechanicTutorial(true);
    this.setSpeedLockedState(false);

    // var app = this.app;
    // app.timeScale = 0;
};

Game.prototype.speedRewardTimer = function() {
    setInterval(function () {
        // var instance = this;
        var speedState = this.getSpeedUpState();
        
        //when on speed cooldown
        if (!speedState){
        
            this.speedUpBonusRewardTimer += 1000;

            if ( this.speedUpBonusRewardTimer < 180000 ) {

                var ms = 180000 - this.speedUpBonusRewardTimer;

                this.speedBonusRewardHudTimer.enabled = true;
                this.speedBonusRewardHudTimer.button.active = true;
                this.speedBonusRewardHudBtn.enabled = false;

                // if(this.firstSpeedLockedGame && this.entity.script.mapsystem.levelNumber() === 1){
                //     this.firstSpeedLockedHandler();
                // }
                
                var seconds = ms / 1000;
                var minutes = parseInt( seconds / 60 );
                seconds = seconds % 60;

                var speedRewardText = this.speedBonusRewardHudTimer.findByName('Speed Ad Timer');
                var timer = Math.round(minutes) + ":" + ( Math.round(seconds) < 10 ? "0" + Math.round(seconds) : Math.round(seconds) );

                speedRewardText.element.text = timer;
                this.speedBonusRewardTxt.element.text = timer;
                
                speedRewardText.element.color = new pc.Color(1,1,1);

            }
            
        }

        //when speed is available
        if ( this.speedUpBonusRewardTimer >= 180000 && !this.speedBonusRewardHudBtn.enabled ) {
            
            this.speedBonusRewardHudTimer.enabled = false;
            this.speedBonusRewardHudBtn.enabled = true;
            
        }
        
        //when speed is in use
        if(this.speedUpBonusRewardTimer >= 180000 && speedState){

            this.speedingUpTimer += 1000;

            if ( this.speedingUpTimer < 30000 ) {

                this.speedBonusRewardHudTimer.enabled = true;
                this.speedBonusRewardHudTimer.button.active = false;
                // this.speedBonusRewardHudBtn.enabled = false;

                var m = 30000 - this.speedingUpTimer;

                var sec = m / 1000;
                var min = parseInt( sec / 60 );
                sec = sec % 60;

                var speedTimer = this.speedBonusRewardHudTimer.findByName('Speed Ad Timer');
                var sTimer = Math.round(min) + ":" + ( Math.round(sec) < 10 ? "0" + Math.round(sec) : Math.round(sec) );

                speedTimer.element.text = sTimer;
                this.speedBonusRewardTxt.element.text = sTimer;
                
                speedTimer.element.color = new pc.Color(1,0.69,0.21);
                // this.speedBonusRewardTxt.element.color = new pc.Color(0.3,0.6,0.9);

            }
        }

    }.bind(this), 1000);
};

Game.prototype.speedBonusTimer = function(newTimerState) {
    this.speedUpBonusRewardTimer = newTimerState;
};

Game.prototype.speedingUpTimerReset = function(newSpeedingUpState){
    this.speedingUpTimer = newSpeedingUpState;
};

Game.prototype.speedUpState = function(newState) {
    var instance = this;
    instance.speedingUp = newState;
};

Game.prototype.getSpeedUpState = function() {
    var instance = this;
    var speedState = instance.speedingUp;
    
    return speedState;
};

Game.prototype.gameOverSpeedReset = function() {
    this.speedBonusTimer(0);
    this.speedingUpTimerReset(0);
    this.speedUpState(false);
};

//generate a random reward for watching an ad
Game.prototype.randomReward = function(intervalRange, startingPoint){
    var number = Math.floor((Math.random()*intervalRange)+startingPoint)*100;
    
    return number;
};

Game.prototype.setFirstSpeedState = function(newState){
    this.firstSpeedUpTutorial = newState;
};

//retrieve resources currently available
Game.prototype.getResources = function() {
    var resources = this.resources;
    
    return resources;
};

//method to add resources when destroying robots based on currentWave
//called from robot's Health.js 
Game.prototype.rewardResources = function() {
    var spawn = this.entity.findByName('Spawn');
    var wave = spawn.script.spawnLocation.getCurrentWave();
    
    var reward;
    
    if(this.gameEndlessModeState() && wave > 3){
        this.resources += 25;
        
        return;
    }
       
    switch(wave){
        case 1:
            reward = 50;
            PokiSDK.happyTime(0.2); // scale is 0.0 to 1.0
            break;
        case 2:
            reward = 75;
            PokiSDK.happyTime(0.4); // scale is 0.0 to 1.0
            break;
        case 3:
            reward = 100;
            PokiSDK.happyTime(0.6); // scale is 0.0 to 1.0
            break;
        default:
            break;
    }
    
    this.resources += reward;
};

Game.prototype.findCamera = function() {
    var cameraEntity = pc.app.root.findByName('Camerat');

    if (cameraEntity) {
        return cameraEntity;
    }
};

Game.hitPosition = new pc.Vec3();
Game.dragPosition = new pc.Vec3();

Game.prototype.triggerCommercialBreak = function ( gameState = true, playButton = false ) {

    if (this.showingAd) return;

    this.showingAd = true;

    if(gameState){
        PokiSDK.gameplayStop();
    }
    
    this.app.systems.sound.volume = 0;

    PokiSDK.commercialBreak().then(() => {

        console.log("Commercial break finished, proceeding to game");

        this.showingAd = false;
        
        if((gameState || playButton) && !this.firstTutorialShowcase){
            PokiSDK.gameplayStart();
        }
        
        try {
            this.app.systems.sound.volume = 1;
        }catch(error) {
            console.error(error);
        }
    }, this);
};

Game.prototype.calculateCommonChestAdReward = function(intervalRange, startingPoint) {
    this.commonChestCoins = this.randomReward(intervalRange, startingPoint);
};

Game.prototype.calculateRareChestAdReward = function(intervalRange, startingPoint) {
    this.rareChestCoins = this.randomReward(intervalRange, startingPoint);
};

Game.prototype.calculateEpicChestAdReward = function(intervalRange, startingPoint) {
    this.epicChestCoins = this.randomReward(intervalRange, startingPoint);
};

//do the same as onAd but now onCommonAd, onRareAd and divide rewards accordingly while linking the entities in the editor as they should
Game.prototype.onAdCommonChest = function () {
    console.log('Inside onCommonChestAd! Showing ad: ' + this.showingAd);
    if (this.showingAd) return;

    this.showingAd = true;

    if(!this.gamePause){
        PokiSDK.gameplayStop();
    }
    
    this.app.systems.sound.volume = 0;
    
    PokiSDK.rewardedBreak().then((success) => {

        console.log('Ad showed: ' + success);
        if ( success ) { 

            var instance = this;
            
            instance.app.timeScale = 0;
            
            instance.calculateCommonChestAdReward(2,2);
            
            instance.commonRewardCollectWindow.findByName('Reward Collecting').element.text = instance.commonChestCoins + ' coins';
            
            this.chestsInterface.enabled = false;
            this.commonButtonReward.button.active = false;
            
            instance.commonRewardCollectWindow.enabled = true;
            
        }

        if(!this.gamePause){
            PokiSDK.gameplayStart();
        }
        
        try {
            this.app.systems.sound.volume = 1;
        }catch(error) {
            console.log(error);
        }

        this.showingAd = false;
    }, this);
};

Game.prototype.commonChestRewardCollect = function() {
    //logic on common chest rewards
    this.resources += this.commonChestCoins;
    this.bonusCommonChestTimer = 0;
    
    var instance = this;
    
    if(this.getSpeedUpState()){
        instance.app.timeScale = 2;
    } else {
        instance.app.timeScale = 1;
    }
};

Game.prototype.onAdRareChest = function () {
    console.log('Inside onCommonChestAd! Showing ad: ' + this.showingAd);
    if (this.showingAd) return;

    this.showingAd = true;

    if(!this.gamePause){
        PokiSDK.gameplayStop();
    }
    
    this.app.systems.sound.volume = 0;
    
    PokiSDK.rewardedBreak().then((success) => {

        console.log('Ad showed: ' + success);
        if ( success ) { 

            //logic on rare chest rewards
            
            if(this.currentRareAdCounter() != 1){
                this.decrementRareAdCounter();
            } else {
                
                var instance = this;
                
                instance.calculateRareChestAdReward(5,5);
            
                instance.rareRewardCollectWindow.findByName('Reward Collecting').element.text = instance.rareChestCoins + ' coins';
                
                instance.app.timeScale = 0;
                instance.rareRewardCollectWindow.enabled = true;
                
            }
            
            this.bonusRareChestTimer = 0;
            this.chestsInterface.enabled = false;
            this.rareButtonReward.button.active = false;
            
        }

        if(!this.gamePause){
            PokiSDK.gameplayStart();
        }

        try {
            this.app.systems.sound.volume = 1;
        }catch(error) {
            console.log(error);
        }

        this.showingAd = false;
    }, this);
};

Game.prototype.rareChestRewardCollect = function() {
    var instance = this;
    
    this.resources += this.rareChestCoins;
    this.setRareAdCounter(2);
    this.rareChestCannonReward('FREE');
    instance.rareChestRewardState(true);
    
    
    if(this.getSpeedUpState()){
        instance.app.timeScale = 2;
    } else {
        instance.app.timeScale = 1;
    }
};

Game.prototype.onAdEpicChest = function () {
    console.log('Inside onCommonChestAd! Showing ad: ' + this.showingAd);
    if (this.showingAd) return;

    this.showingAd = true;

    if(!this.gamePause){
        PokiSDK.gameplayStop();
    }
    
    this.app.systems.sound.volume = 0;
    
    PokiSDK.rewardedBreak().then((success) => {

        console.log('Ad showed: ' + success);
        if ( success ) {

            //logic on epic chest rewards
            
            if(this.currentEpicAdCounter() != 1){
                this.decrementEpicAdCounter();
            } else {
                var instance = this;
                
                instance.calculateEpicChestAdReward(35,15);
            
                instance.epicRewardCollectWindow.findByName('Reward Collecting').element.text = instance.epicChestCoins + ' coins';
                
                instance.app.timeScale = 0;
                instance.epicRewardCollectWindow.enabled = true;
                
                
            }
            
            this.bonusEpicChestTimer = 0;
            this.chestsInterface.enabled = false;
            this.epicButtonReward.button.active = false;
            
        }

        if(!this.gamePause){
            PokiSDK.gameplayStart();
        }

        try {
            this.app.systems.sound.volume = 1;
        }catch(error) {
            console.log(error);
        }

        this.showingAd = false;
    }, this);
};

Game.prototype.epicChestRewardCollect = function() {
    this.resources += this.epicChestCoins;
    this.setEpicAdCounter(3);
    this.epicChestCannonReward('FREE');
    this.epicChestRewardState(true);
    
    var instance = this;
    
    if(this.getSpeedUpState()){
        instance.app.timeScale = 2;
    } else {
        instance.app.timeScale = 1;
    }
};

//rewarded ad method
Game.prototype.onAd = function () {
    console.log('Inside onAd! Showing ad: ' + this.showingAd);
    if (this.showingAd) return;

    this.showingAd = true;

    if(!this.gamePause){
        PokiSDK.gameplayStop();
    }
    
    this.app.systems.sound.volume = 0;
    
    PokiSDK.rewardedBreak().then((success) => {

        console.log('Ad showed: ' + success);
        if ( success ) { 

            this.resources += this.rewardValue;
            this.bonusRewardTimer = 0;
            this.watchAdInterface.enabled = false;
        }

        if(!this.gamePause){
            PokiSDK.gameplayStart();
        }

        try {
            this.app.systems.sound.volume = 1;
        }catch(error) {
            console.log(error);
        }

        this.showingAd = false;
    }, this);
    
};

Game.prototype.onAdSpeedUp = function () {
    console.log('Inside onAdSpeedUp! Showing ad: ' + this.showingAd);
    if (this.showingAd) return;

    this.showingAd = true;

    if(!this.gamePause){
        PokiSDK.gameplayStop();
    }
    
    this.app.systems.sound.volume = 0;
    
    PokiSDK.rewardedBreak().then((success) => {

        console.log('Ad showed: ' + success);
        if ( success ) { 

            // this.speedUpBonusRewardTimer = 0;
            
            this.speedUpWatchAdInterface.enabled = false;
            this.speedBonusRewardHudTimer.enabled = false;
            
            this.speedBonusRewardHudBtn.enabled = true;
            
            this.speedBonusRewardHudBtn.script.speedUpbutton.speedUpHandler();
        }

        if(!this.gamePause){
            PokiSDK.gameplayStart();
        }

        try {
            this.app.systems.sound.volume = 1;
        }catch(error) {
            console.log(error);
        }

        this.showingAd = false;
    }, this);
    
};

Game.prototype.setRemainingRareAds = function() {
    var remaining = this.rareButtonReward.findByName('Rare Chest Timer');
    
    var adGrammar = (this.rareChestAdCounter === 1) ? 'AD' : 'ADs';
    
    remaining.element.text = 'Watch ' + this.rareChestAdCounter + ' ' + adGrammar;
};
    
Game.prototype.setRemainingEpicAds = function() {
    var remaining = this.epicButtonReward.findByName('Epic Chest Timer');
    
    var adGrammar = (this.epicChestAdCounter === 1) ? 'AD' : 'ADs';
    
    remaining.element.text = 'Watch ' + this.epicChestAdCounter + ' ' + adGrammar;
};

Game.prototype.currentRareAdCounter = function() {
    var rareCounter = this.rareChestAdCounter;
    
    return rareCounter;
};

Game.prototype.decrementRareAdCounter = function() {
    this.rareChestAdCounter -= 1;
};

Game.prototype.setRareAdCounter = function(newNumber) {
    this.rareChestAdCounter = newNumber;
};

Game.prototype.currentEpicAdCounter = function() {
    var rareCounter = this.epicChestAdCounter;
    
    return rareCounter;
};

Game.prototype.decrementEpicAdCounter = function() {
    this.epicChestAdCounter -= 1;
};

Game.prototype.setEpicAdCounter = function(newNumber) {
    this.epicChestAdCounter = newNumber;
};

Game.prototype.rareChestCannonReward = function(newText) {
    var app = this.app;
    var ui = app.root.findByName('UI');
    var gameScreen = ui.findByName('GameScreen');
    
    var unitSelection;
    var cannonsName;
    
    var currentLevel = this.entity.script.mapsystem.levelNumber();
    
    switch(currentLevel){
        case 1:
            unitSelection = 'Unit Selection';
            cannonsName = 'Yellow Cannon 1';
            break;
        case 2:
            unitSelection = 'Unit Selection 2';
            cannonsName = 'Black Cannon 1';
            break;
        case 3:
            unitSelection = 'Unit Selection 3';
            cannonsName = 'Blue Cannon 1';
            break;
        case 4:
            unitSelection = 'Unit Selection 4';
            cannonsName = 'White Cannon 1';
            break;
        case 5:
            unitSelection = 'Unit Selection 5';
            cannonsName = 'Red Cannon 1';
            break;
        case 6:
            unitSelection = 'Unit Selection 6';
            cannonsName = 'Green Cannon 1';
            break;
        default:
            break;
    }
    
    gameScreen.findByName(unitSelection).findByName(cannonsName).findByName('Price').element.text = newText;
};

Game.prototype.epicChestCannonReward = function(newText) {
    var app = this.app;
    var ui = app.root.findByName('UI');
    var gameScreen = ui.findByName('GameScreen');
    
    var unitSelection;
    var cannonsName;
    
    var currentLevel = this.entity.script.mapsystem.levelNumber();
    
    switch(currentLevel){
        case 1:
            unitSelection = 'Unit Selection';
            cannonsName = 'Yellow Cannon 2';
            break;
        case 2:
            unitSelection = 'Unit Selection 2';
            cannonsName = 'Black Cannon 2';
            break;
        case 3:
            unitSelection = 'Unit Selection 3';
            cannonsName = 'Blue Cannon 2';
            break;
        case 4:
            unitSelection = 'Unit Selection 4';
            cannonsName = 'White Cannon 2';
            break;
        case 5:
            unitSelection = 'Unit Selection 5';
            cannonsName = 'Red Cannon 2';
            break;
        case 6:
            unitSelection = 'Unit Selection 6';
            cannonsName = 'Green Cannon 2';
            break;
        default:
            break;
    }
    
    gameScreen.findByName(unitSelection).findByName(cannonsName).findByName('Price').element.text = newText;
};

Game.prototype.rareChestRewardState = function(newState){
    this.freeCannon1Reward = newState;
};

Game.prototype.epicChestRewardState = function(newState){
    this.freeCannon2Reward = newState;
};

Game.prototype.currentFreeCannon1State = function() {
    var state = this.freeCannon1Reward;
    
    return state;
};

Game.prototype.currentFreeCannon2State = function() {
    var state = this.freeCannon2Reward;
    
    return state;
};

Game.prototype.saveGameState = function (currentLevel) {
    
    try {

        var state = class {

           constructor ( levels ) {

                this.levels = levels;
           }

        };

        var levels = [];

        var lvl = class {

            constructor ( number, unlocked, stars, finished ) {

                this.number = number;
                this.unlocked = unlocked;
                this.stars = stars;
                this.finished = finished;
                
            }

        };
        
        var levelNumbers = 6;
        var previousState = this.state;
        
        for(var i = 0; i < levelNumbers; i++){
            var stars = 0;
            var unlockedState = (i === 0) || (i > 0 && i < currentLevel+1);
            
            if(currentLevel >= 0){
                unlockedState = unlockedState || previousState.levels[i].unlocked;
            }
            
            if( (currentLevel >= 0) && (i <= (currentLevel-1)) && unlockedState){
                stars = 3;
            }
            console.log('Level being saved: ' + (i+1) + ', unlockedState: ' + unlockedState + ', stars: ' + stars);
            levels.push(new lvl(i+1, unlockedState, stars, (stars > 0) ));
        }
        
        console.log('Levels array: ' + levels.toString());
        console.log('Levels saved: ' + levels.length);

        //in the constructor parameter, there was this.levels
        var gameState = new state(levels);
        this.state = gameState;
        try {
            this.storageFactory.setItem(this.entity.name, JSON.stringify(gameState));
        }catch(error) {
            console.error(error);
        }
        
    } catch ( error ) { console.log(error); }
    
};

Game.prototype.loadGameState = function() {
    try{
        console.log('Loading game state!');
        this.state = JSON.parse(this.storageFactory.getItem(this.entity.name));

        console.log(this.state);

        if ( this.state === null ) {

            this.saveGameState(-1);

            this.state = JSON.parse(this.storageFactory.getItem(this.entity.name));
        }
        
        var levels = this.state.levels;
        
        var app = this.app;
        var ui = app.root.findByName('UI');
        var levelsUI = ui.findByName('Levels');
        
        var levelNumbers = levelsUI.findByTag('Level');
        
        var starsOn = ui.findByTag('StarsOn');
        
        for(var i = 0; i < levelNumbers.length; i++){
            var lvl = levels[i];
            levelNumbers[i].enabled = lvl.unlocked;
            
            starsOn[i].enabled = lvl.finished;
            console.log('Current Level at onEnable: ' + lvl.number + ', ' + lvl.unlocked);
            
            //endless mode logic
            // if(starsOn[i].enabled){
            //     levelNumbers[i].findByName('Endless Button').button.active = true;
            // }
        }
    }catch(error) {
        console.error(error);
    }
};

Game.prototype.onDisable = function() {
    this.watchAdButton.off('click');
};

//creating the new game after it finished
//when this method is called first we remove the game over UI pop up
//then we destroy all the remaining enemies on the map
//and reset all variables including the map state which comes from map.js
Game.prototype.newGame = function () {
    var app = this.app;
    
    var instance = this;

    var ui = app.root.findByName('UI');
    var uiGameOver = ui.findByName('Game Over');
    uiGameOver.enabled = false;
    
    var tutorialsUI = ui.findByName('Tutorial').children;
    
    for(var i = 0; i < tutorialsUI.length; i++){
        tutorialsUI[i].enabled = false;
    }
    
    this.resetUnitDeploy();

    this.explodeRobots();
    
    this.destroyCannons();

    this.timer = 0;
    this.isGameOver = false;
    this.resources = this.initialResources;
    // this.resourceTimer = 0;

    this.entity.script.mapsystem.reset();
    
    if(this.getSpeedUpState()){
        this.gameOverSpeedReset();
    }
    
    if(this.firstTutorialShowcase){
        app.timeScale = 0;
    } else {
        app.timeScale = 1;
    }
    
    app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
};

Game.prototype.firstTutorialState = function(newState) {
    this.firstTutorialShowcase = newState;
};

Game.prototype.explodeRobots = function() {
    //maybe take this entire method to the mapsystem.js and do the logic to set matrix map dynamically depending on level
    // var robots = this.entity.find('name', 'Robot 1');
    var robots = this.entity.findByTag('Robot');
    for (var i = 0; i < robots.length; i++) {
        var robot = robots[i];
        robot.script.robot.explode();
    }
    
    var destroyed = this.entity.findByTag('Destroyed');
    for(var j = 0; j < destroyed.length; j++){
        var des = destroyed[j];
        des.destroy();
    }
};

Game.prototype.destroyCannons = function() {
    var cannons = this.entity.findByTag('Cannon');
    for(var j = 0; j < cannons.length; j++){
        var cannon = cannons[j];
        cannon.destroy();
    }
};

Game.prototype.resetUnitDeploy = function() {
    this.nullDeploy();
    
    this.nullHighlightGround();
   
    this.nullBorderClicked();
    
    this.resetIconState();
};

Game.prototype.nullDeploy = function() {
    this.unitToDeploy = null;
    
    if(this.unitToDeployBlueprint){
        this.entity.findByName(this.unitToDeployBlueprint + '').enabled = false;
        this.unitToDeployBlueprint = null;
    }
};

Game.prototype.nullHighlightGround = function() {
    var greenHighlight = this.entity.findByName('GreenHighlight');
    var redHighlight = this.entity.findByName('RedHighlight');
    
    greenHighlight.enabled = false;
    redHighlight.enabled = false;
};

Game.prototype.nullBorderClicked = function() {
    var app = this.app;
    var ui = app.root.findByName('UI');
    
    var gameScreen = ui.findByName('GameScreen');
    
    var unitSelection;
    var selection;
 
    switch(this.entity.script.mapsystem.levelNumber()){
        case 1:
            unitSelection = gameScreen.findByName('Unit Selection');
            break;
        case 2:
            unitSelection = gameScreen.findByName('Unit Selection 2');
            break;
        case 3:
            unitSelection = gameScreen.findByName('Unit Selection 3');
            break;
        case 4:
            unitSelection = gameScreen.findByName('Unit Selection 4');
            break;
        case 5:
            unitSelection = gameScreen.findByName('Unit Selection 5');
            break;
        case 6:
            unitSelection = gameScreen.findByName('Unit Selection 6');
            break;
        default:
            break;
    }
    
    if(unitSelection){
        selection = unitSelection.findByTag('Border Clicked');
    
        for(var i = 0; i < selection.length; i++){
            selection[i].enabled = false;
        }
    }
};

Game.prototype.resetIconState = function() {
    var app = this.app;
    var ui = app.root.findByName('UI');
    
    var gameScreen = ui.findByName('GameScreen');
    
    var unitSelectionState;
    var selectionState;
    
    switch(this.entity.script.mapsystem.levelNumber()){
        case 1:
            unitSelectionState = gameScreen.findByName('Unit Selection');
            break;
        case 2:
            unitSelectionState = gameScreen.findByName('Unit Selection 2');
            break;
        case 3:
            unitSelectionState = gameScreen.findByName('Unit Selection 3');
            break;
        case 4:
            unitSelectionState = gameScreen.findByName('Unit Selection 4');
            break;
        case 5:
            unitSelectionState = gameScreen.findByName('Unit Selection 5');
            break;
        case 6:
            unitSelectionState = gameScreen.findByName('Unit Selection 6');
            break;
        default:
            break;
    }
    
    if(unitSelectionState){
        selectionState = unitSelectionState.findByTag('Icon');
            
        for(var i = 0; i < selectionState.length; i++){
            selectionState[i].script.icons.resetClickedState();
        }
    }
};

Game.prototype.destroyedRobot = function(x, y, z, robot) {
    var app = this.app;
    var templates = app.root.findByName('Templates');
    
    templates.enabled = true;
    
    var unitTemplate = templates.findByName(robot);
    var unitClone = unitTemplate.clone();
    
    // unitClone.sound.play('Crash');
    
    this.entity.addChild(unitClone);
    unitClone.setPosition(x,y,z);
    unitClone.enabled = true;
    
    setTimeout(function() {
        unitClone.destroy();
    }.bind(this), 2500);
};

Game.prototype.returnDragState = function() {
    var dragState = this.dragState;
    
    return dragState;
};

// Game.prototype.changeScene = function() {
//     this.loadScene(this.sceneName);
// };

// Game.prototype.loadScene = function(sceneName){
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

//calling the game over UI
//if this method is called it means the conditions for the game to end have been met 
Game.prototype.gameOver = function () {
    var app = this.app;
    var ui = app.root.findByName('UI');
    var uiGameOver = ui.findByName('Game Over');
    
    uiGameOver.enabled = true;

    this.isGameOver = true;
    
    app.timeScale = 0;
};

Game.prototype.noSufficientResources = function() {
    // insert UI about not enough resources
    var app = this.app;
    var ui = app.root.findByName('UI');
    
    ui.findByName('Not Enough Resources').enabled = true;

    setTimeout(function() {
        ui.findByName('Not Enough Resources').enabled = false;
    }.bind(this), 2000);
};

Game.prototype.returnDragEntity = function() {
    if(this.dragEntity){
        return this.dragEntity;
    }
};

Game.prototype.resetNewWaves = function(wave1, wave2, wave3, robot, wave4) {
    this.totalEnemiesWave1 = wave1;
    this.totalEnemiesWave2 = wave2;
    this.totalEnemiesWave3 = wave3;
    
    this.totalEnemiesWave4 = wave4;
    
    this.resetNewWaveEnemies();
    this.setEnemiesLeft(0);
    this.setWavesLeft();
    
    var spawns = this.entity.findByTag('SpawnLocation');
    
    // console.log('endless mode state: ' + this.gameEndlessModeState());
    
    for(var i = 0; i < spawns.length; i++){
        spawns[i].script.spawnLocation.resetWaves();
        spawns[i].script.spawnLocation.changeWaveEnemies(wave1, wave2, wave3);
        spawns[i].script.spawnLocation.changeRobot(robot);
        
        if(this.gameEndlessModeState()){
            spawns[i].script.spawnLocation.setEndlessWaveCount(wave4);
        }
        
        // add logic for reseting endless wave
    }
};

Game.prototype.resetBasesHealth = function() {
    this.resetMaxHealth();
//     var destinations = this.entity.findByTag('Destination');
        
//     for(var i = 0; i < destinations.length; i++){
//         destinations[i].script.baseHealth.resetMaxHealth();
//     }
};

Game.prototype.tutorialUI = function() {
    var tutorialUI = this.tutorial.findByName('Highlight 1');
    var instance = this;
    
    if(this.gamePause){
        tutorialUI.enabled = true;
        
        PokiSDK.gameplayStop();
    } else{
        instance.app.timeScale = 1;
        tutorialUI.enabled = false;
        
        PokiSDK.gameplayStart();
    }
};

Game.prototype.mergeTutorial = function(newState) {
    var mergeTutorialUI = this.tutorial.findByName('Highlight 2');
                                                
    mergeTutorialUI.enabled = newState;
    
    if(newState){
        PokiSDK.gameplayStop();
    } else {
        PokiSDK.gameplayStart();
    }
};

Game.prototype.mobileMergeTutorial = function(newState) {
    var mobileMergeTutorialUI = this.tutorial.findByName('Highlight 4');
                                                
    mobileMergeTutorialUI.enabled = newState;
    
    if(newState){
        PokiSDK.gameplayStop();
    } else {
        PokiSDK.gameplayStart();
    }
};

Game.prototype.speedMechanicTutorial = function(newState) {
    var speedTutorial = this.tutorial.findByName('Highlight 5');
    
    speedTutorial.enabled = newState;
    
    if(newState){
        PokiSDK.gameplayStop();
    } else {
        PokiSDK.gameplayStart();
    }
};

Game.prototype.speedLockedMechanicTutorial = function(newState){
    var speedLockedTutorial = this.tutorial.findByName('Highlight 6');
    
    speedLockedTutorial.enabled = newState;
    
    if(newState) {
        PokiSDK.gameplayStop();
    } else {
        PokiSDK.gameplayStart();
    }
};

// Game.prototype.rightClickTutorial = function(newState) {
//     var rightClickTutorial = this.tutorial.findByName('Highlight 3');
    
//     rightClickTutorial.enabled = newState;
// };

Game.prototype.gamePauseState = function(newState) {
    this.gamePause = newState;
};

Game.prototype.checkDoubleSpawn = function() {
    var spawns = this.entity.findByTag('SpawnLocation');
    
    if(spawns.length > 1){
        return true;
    } else {
        return false;
    }
};

Game.prototype.resetNewWaveEnemies = function() {
//     var enemies = this.waveEnemyHandler();
    
//     this.currentEnemyState(enemies);

    this.currentEnemies = 0;
};

// Game.prototype.currentEnemyState = function(enemiesAmount){
//     this.currentEnemies = enemiesAmount;
// };

Game.prototype.setEnemiesLeft = function(incrementEnemy) {
    
    var total = this.waveEnemyHandler();
    
    var spawn = this.entity.findByName('Spawn');
    var wave = 1;
    
    if(spawn){
        wave = spawn.script.spawnLocation.getCurrentWave();
    }
    
    this.currentEnemies += incrementEnemy;
    
    // var doubleEnemies = (this.currentEnemies*2);
    // doubleEnemies += this.incrementEnemiesLeft;
    
    this.enemiesLeft.element.text = (this.checkDoubleSpawn() && wave >= 3) ? (this.currentEnemies + "/" + total*2) : (this.currentEnemies + "/" + total);
};

// Game.prototype.currentEnemiesHandler = function() {
    
// };

// Game.prototype.incrementState = function() {
//     this.incrementEnemiesLeft++;
// };

// Game.prototype.incrementStateReset = function() {
//     this.incrementEnemiesLeft = 0;
// };

// Game.prototype.getTotalEnemyWave = function() {
//     this.waveEnemyHandler();
// };

Game.prototype.getEndlessRobotHp = function() {
    return this.endlessRobotHp;
};

Game.prototype.getEndlessRobotSpeed = function() {
    return this.endlessRobotSpeed;
};

Game.prototype.incrementWaveEndless4 = function() {
    this.totalEnemiesWave4 += 10;
    
    this.endlessRobotHp += 10;
    this.endlessRobotSpeed += 0.02;
};

Game.prototype.waveEnemyHandler = function() {
    var enemies = 0;
    
    var spawn = this.entity.findByName('Spawn');
    
    if(spawn){
        var wave = spawn.script.spawnLocation.getCurrentWave();
    
        switch(wave){
            case 1:
                enemies = this.totalEnemiesWave1;
                break;
            case 2:
                enemies = this.totalEnemiesWave2;
                break;
            case 3:
                enemies = this.totalEnemiesWave3;
                break;
            default:
                enemies = this.totalEnemiesWave4;
                break;
        }
    }
    
    return enemies;
};

Game.prototype.setWavesLeft = function() {
    var spawn = this.entity.findByName('Spawn');
    // var wave = spawn.script.spawnLocation.getCurrentWave();
    
    if(spawn){
        this.wavesLeft.element.text = (this.gameEndlessModeState()) ? spawn.script.spawnLocation.getCurrentWave() + '/~' : spawn.script.spawnLocation.getCurrentWave() + '/3';
    }
};

Game.prototype.setHealth = function (health) {
    this.currentHealth = this.currentHealth - health;

    this.remainingHPHandler(this.currentHealth);
};

Game.prototype.remainingHPHandler = function(currentHealth){
    var amountRemained = (this.hpElement/100)*currentHealth;
    
    this.remainingWidthHandler(amountRemained);
};

Game.prototype.remainingWidthHandler = function(amount) {
    this.remainingHP.element.width = amount;
    
    if (this.remainingHP.element.width <= 0) {
        this.remainingHP.element.width = 0;
        // this.entity.destroy();
        this.gameOver();
    }
};

Game.prototype.resetMaxHealth = function() {
    this.currentHealth = 100;
    this.remainingHPHandler(this.currentHealth);
};

Game.prototype.playAgainHandler = function() {
    this.newGame();
        
    this.resetBasesHealth();

    switch(this.entity.script.mapsystem.levelNumber()){
        case 1:
            this.resetNewWaves(5,15,25, 'Robot 1', 20);
            break;
        case 2:
            this.resetNewWaves(25,35,45, 'Robot 2', 45);
            break;
        case 3:
            this.resetNewWaves(25,35,30, 'Robot 3', 30);
            break;
        case 4:
            this.resetNewWaves(25,35,45, 'Robot 4', 45);
            break;
        case 5:
            this.resetNewWaves(25,35,40, 'Robot 5', 40);
            break;
        case 6:
            this.resetNewWaves(25,35,45, 'Robot 6', 45);
            break;
        default:
            break;
    }
};

Game.prototype.onMouseDown = function ( e, touch = false) {
    var app = this.app;
    var ui = app.root.findByName('UI');

    // if (this.isGameOver) {
        // this.entity.findByName('Spawn').script.spawnLocation.resetWaves();
//         this.newGame();
        
//         this.resetBasesHealth();
        
//         switch(this.entity.script.mapsystem.levelNumber()){
//             case 1:
//                 this.resetNewWaves(5,10,20, 'Robot 1');
//                 break;
//             case 2:
//                 this.resetNewWaves(25,35,30, 'Robot 2');
//                 break;
//             case 3:
//                 this.resetNewWaves(25,35,30, 'Robot 3');
//                 break;
//             case 4:
//                 this.resetNewWaves(25,35,30, 'Robot 4');
//                 break;
//             case 5:
//                 this.resetNewWaves(25,35,30, 'Robot 5');
//                 break;
//             case 6:
//                 this.resetNewWaves(25,35,30, 'Robot 6');
//                 break;
//             default:
//                 break;
//         }
    // }  else {
        if(!this.cameraEntity && this.cameraEntity.camera === undefined){
            return;
        }
        //getting the info where you're clicking
        var from = this.cameraEntity.getPosition();
        var to = this.cameraEntity.camera.screenToWorld(e.x, e.y, this.cameraEntity.camera.farClip);

        //knowing what you're clicking
        app.systems.rigidbody.raycastFirst(from, to, function (result) {
            if(this.app.touch){
                
            }
            
            if (e.button === pc.MOUSEBUTTON_LEFT) {
                switch (result.entity.name) {

                    //determining if we're placing a tower or moving it to merge
                    case 'Placable':
                        if (this.unitToDeploy) {

                            //get the entity position and determine the middle of the grid tile to place it
                            var selectionPos = result.entity.getPosition();
                            var x = Math.round(selectionPos.x / 2);
                            var y = Math.round(selectionPos.z / 2);
                            var type;

                            switch (this.unitToDeploy) {
                                case 'Yellow Cannon 1':
                                    if(this.currentFreeCannon1State()){
                                        
                                        type = 5;
                                        this.rareChestRewardState(false);
                                        this.rareChestCannonReward('250');
                                        
                                    } else if (this.resources >= 250) {
                                        
                                        type = 5;
                                        this.resources -= 250;
                                        
                                        if(this.firstMerge){
                                            this.mergeCount++;
                                            
                                            if(this.mergeCount === 2){
                                                this.resetUnitDeploy();
                                                this.gamePauseState(true);
                                                
                                                if(this.app.touch){
                                                    this.mobileMergeTutorial(true);
                                                } else {
                                                    this.mergeTutorial(true);
                                                }
                                                this.firstMerge = false;
                                            }
                                        }
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Yellow Cannon 2':
                                    if(this.currentFreeCannon2State()) {
                                        
                                        type = 6;
                                        this.epicChestRewardState(false);
                                        this.epicChestCannonReward('500');
                                    } else if (this.resources >= 500) {
                                        type = 6;
                                        this.resources -= 500;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Yellow Cannon 3':
                                    if (this.resources >= 750) {
                                        type = 7;
                                        this.resources -= 750;
                                    }
                                    else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Black Cannon 1':
                                    if(this.currentFreeCannon1State()) {
                                        
                                        type = 8;
                                        this.rareChestRewardState(false);
                                        this.rareChestCannonReward('250');
                                        
                                    } else if (this.resources >= 250) {
                                        type = 8;
                                        this.resources -= 250;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Black Cannon 2':
                                    if(this.currentFreeCannon2State()) {
                                        
                                        type = 9;
                                        this.epicChestRewardState(false);
                                        this.epicChestCannonReward('500');
                                        
                                    } else if (this.resources >= 500) {
                                        type = 9;
                                        this.resources -= 500;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Black Cannon 3':
                                    if (this.resources >= 750) {
                                        type = 10;
                                        this.resources -= 750;
                                    }
                                    else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Blue Cannon 1':
                                    if(this.currentFreeCannon1State()) {
                                        
                                        type = 11;
                                        this.rareChestRewardState(false);
                                        this.rareChestCannonReward('250');
                                        
                                    } else if (this.resources >= 250) {
                                        type = 11;
                                        this.resources -= 250;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Blue Cannon 2':
                                    if(this.currentFreeCannon2State()) {
                                        
                                        type = 12;
                                        this.epicChestRewardState(false);
                                        this.epicChestCannonReward('500');
                                        
                                    } else if (this.resources >= 500) {
                                        type = 12;
                                        this.resources -= 500;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Blue Cannon 3':
                                    if (this.resources >= 750) {
                                        type = 13;
                                        this.resources -= 750;
                                    }
                                    else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'White Cannon 1':
                                    if(this.currentFreeCannon1State()) {
                                        
                                        type = 14;
                                        this.rareChestRewardState(false);
                                        this.rareChestCannonReward('250');
                                        
                                    } else if (this.resources >= 250) {
                                        type = 14;
                                        this.resources -= 250;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'White Cannon 2':
                                    if(this.currentFreeCannon2State()) {
                                        
                                        type = 15;
                                        this.epicChestRewardState(false);
                                        this.epicChestCannonReward('500');
                                        
                                    } else if (this.resources >= 500) {
                                        type = 15;
                                        this.resources -= 500;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'White Cannon 3':
                                    if (this.resources >= 750) {
                                        type = 16;
                                        this.resources -= 750;
                                    }
                                    else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Red Cannon 1':
                                    if(this.currentFreeCannon1State()) {
                                        
                                        type = 17;
                                        this.rareChestRewardState(false);
                                        this.rareChestCannonReward('250');
                                        
                                    } else if (this.resources >= 250) {
                                        type = 17;
                                        this.resources -= 250;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Red Cannon 2':
                                    if(this.currentFreeCannon2State()) {
                                        
                                        type = 18;
                                        this.epicChestRewardState(false);
                                        this.epicChestCannonReward('500');
                                        
                                    } else if (this.resources >= 500) {
                                        type = 18;
                                        this.resources -= 500;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Red Cannon 3':
                                    if (this.resources >= 750) {
                                        type = 19;
                                        this.resources -= 750;
                                    }
                                    else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Green Cannon 1':
                                    if(this.currentFreeCannon1State()) {
                                        
                                        type = 20;
                                        this.rareChestRewardState(false);
                                        this.rareChestCannonReward('250');
                                        
                                    } else if (this.resources >= 250) {
                                        type = 20;
                                        this.resources -= 250;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Green Cannon 2':
                                    if(this.currentFreeCannon2State()) {
                                        
                                        type = 21;
                                        this.epicChestRewardState(false);
                                        this.epicChestCannonReward('500');
                                        
                                    } else if (this.resources >= 500) {
                                        type = 21;
                                        this.resources -= 500;
                                    } else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                case 'Green Cannon 3':
                                    if (this.resources >= 750) {
                                        type = 22;
                                        this.resources -= 750;
                                    }
                                    else {
                                        this.noSufficientResources();
                                    }
                                    break;
                                default:
                                    break;
                            }

                            if (type) {
                                this.entity.script.mapsystem.setSpaceType(x, y, type);
                                //Yes! We made a super combo!
                               PokiSDK.happyTime(0.2); // scale is 0.0 to 1.0
                            }
                            
                            if(this.unitToDeployBlueprint){
                                this.entity.findByName(this.unitToDeployBlueprint + '').enabled = false;
                            }
                        }
                        this.removeRangeMesh();
                        
                        this.afterMergeHandler();
                        
                        this.sellButtonInitialize(false);
                        break;
                    case 'Yellow Cannon 1':
                    case 'Yellow Cannon 2':
                    case 'Yellow Cannon 3':
                    case 'Black Cannon 1':
                    case 'Black Cannon 2':
                    case 'Black Cannon 3':
                    case 'Blue Cannon 1':
                    case 'Blue Cannon 2':
                    case 'Blue Cannon 3':
                    case 'White Cannon 1':
                    case 'White Cannon 2':
                    case 'White Cannon 3':
                    case 'Red Cannon 1':
                    case 'Red Cannon 2':
                    case 'Red Cannon 3':
                    case 'Green Cannon 1':
                    case 'Green Cannon 2':
                    case 'Green Cannon 3':
                        //insert code about range circle here
                        
                        if ( this.app.touch ) {
                            if(this.mobileDragState === false){
                                this.unitToSellPosition = result.entity.getPosition();
                                this.sellButtonInitialize(true);
                                
                                this.removeRangeMesh();
                                result.entity.script.cannon.rangeMesh.enabled = true;
                                
                                this.firstMouseDragEntity = result.entity;
                                
                                this.initialCannonPositionHandler(result);
                                this.touchMoveMobile();
                                this.mobileDragState = true;
                            }
                            else if(this.mobileDragState === true && result.entity !== this.firstMouseDragEntity){
                                //the entity selected to merge into
                                this.mouseDragEntity = result.entity;
                                this.mouseUpHandler();
                                
                                // this.mobileDragState = false;
                            }
                            
                            // app.touch.on(pc.EVENT_TOUCHMOVE, function (e) { this.onMouseMove(this.getTouch(e)); }, this); 
                        }
                        else {
                            //sellButton logic
                            this.unitToSellPosition = result.entity.getPosition();
                            this.sellButtonInitialize(true);
                            
                            this.removeRangeMesh();
                            result.entity.script.cannon.rangeMesh.enabled = true;

                            //dragState logic
                            if(this.dragState === false){
                                if(this.initialPositionSaved === false){
                                    //the entity selected or to be dragged
                                    this.dragEntity = result.entity;

                                    //plane on which the entitys dragging is projected
                                    this.plane = new pc.Plane(this.dragEntity.getPosition().clone(), this.dragEntity.up.clone());
                                    
                                    this.initialCannonPositionHandler(result);
                                    
                                    this.initialPositionSaved = true;
                                }
                                this.dragState = true;
                            }
                            
                            // app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
                        }
                    break;
                    case 'Environment Objects':
                        if(this.app.touch || this.sellButtonHover === false){
                            this.removeRangeMesh();
                        
                            this.afterMergeHandler();

                            this.sellButtonInitialize(false);
                        }
                        break;
                    default:
                        break;
                }
            }
            else if (e.button === pc.MOUSEBUTTON_RIGHT) {
                //code for right click tutorial
//                 if(this.gamePause){
//                     var highlight1 = this.tutorial.findByName('Highlight 1');
//                     this.rightClickTutorial(false);
                    
//                     if(!highlight1.enabled ){
//                         setTimeout(function() {
//                             this.mergeTutorial(true);
//                         }.bind(this), 500);
//                     }
                    
//                 }
                
                if(this.unitToDeploy){
                    ui.findByName(this.unitToDeploy + '').findByName('Border Clicked').enabled = false;
                    this.unitToDeploy = null;
                    
            this.iconClickedState(false);
                }
                
                if(this.unitToDeployBlueprint){
                    this.entity.findByName(this.unitToDeployBlueprint + '').enabled = false;
                    this.unitToDeployBlueprint = null;
                }
            }
        }.bind(this));
    // }
};

Game.prototype.iconClickedState = function(newState){
    this.iconClicked = newState;
};

Game.prototype.initialCannonPositionHandler = function(entityClicked) {
    var posVector = entityClicked.entity.getPosition();
    this.initialPosition = new pc.Vec3(posVector.x, posVector.y, posVector.z);

    this.initialPositionX = Math.round(this.initialPosition.x / 2);
    this.initialPositionY = Math.round(this.initialPosition.z / 2);
    // this.initialPositionType = this.entity.script.mapsystem.getSpaceType(this.initialPositionX,this.initialPositionY);
};

Game.prototype.removeRangeMesh = function() {
    var rangeMeshes = this.entity.findByTag('RangeMesh');
    
    if(rangeMeshes.length > 0){
        for(var i = 0; i < rangeMeshes.length; i++){
            rangeMeshes[i].enabled = false;
        }
    }
};

//sellButton dynamically being repositioned depending on cannon selected (entity) - Deprecated
//sellButton being enabled on cannon selection
Game.prototype.sellButtonInitialize = function(newState) {
//     var worldPosition = entity.getPosition();
//     var screenPosition = new pc.Vec3();
    
//     this.cameraEntity.camera.worldToScreen(worldPosition, screenPosition);
    
    // check if the entity is in front of the camera
    // if (screenPosition.z > 0) {
        this.sellButton.enabled = newState;

        // Take into account of pixel ratio
        // var pixelRatio = this.app.graphicsDevice.maxPixelRatio;
        // screenPosition.x = Math.floor(screenPosition.x /2);
        // screenPosition.y = Math.floor(screenPosition.y /2);

        // convert to screen component co-ordinates
        // var screenEntity = this.sellButton.element.screen;
        // var scale = screenEntity.screen.scale;

//         var device = this.app.graphicsDevice;

        // this.sellButton.setLocalPosition((screenPosition.x / scale), ((-screenPosition.y) / scale) +20, 0);

    // } else {
        // this.sellButton.enabled = false;
    // }
};

Game.prototype.sellButtonHoverState = function(newState) {
    this.sellButtonHover = newState;
};

Game.prototype.getTouch = function ( e ) {
    this.lastTouch = new pc.Vec2(e.touches[0].x, e.touches[0].y);
    return this.lastTouch;
    
};

Game.prototype.doRayCastDrag = function (screenPosition) {
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
        
        // Project that vector on to the object's forward/right axis if you want to limit it to one of them
        // dragPosition.project(this.dragEntity.right);
        
        // Now move the object by that amount
        dragPosition.add(this.dragEntity.getPosition());
        this.dragEntity.setPosition(dragPosition);
    }
};

Game.prototype.unitHighlighting = function() {
    this.entity.findByName('Main Light').enabled = false;
    this.entity.findByName('Drag Light').enabled = true;

    if(this.getSpotlightChildren === false){
        var children = this.entity.children;

        for(var i = 0; i < children.length; i++){
            var child = children[i];

            if(this.app.touch){
                if(child.name == this.firstMouseDragEntity.name){
                    child.findByName('Aim').script.switchingMaterials.changeToNextMaterial(1);
                    child.findByName('Body').script.switchingMaterials.changeToNextMaterial(1);
                }
            }
            else if(child.name == this.dragEntity.name){
                child.findByName('Aim').script.switchingMaterials.changeToNextMaterial(1);
                child.findByName('Body').script.switchingMaterials.changeToNextMaterial(1);
            }
        }
        this.getSpotlightChildren = true;
    }
};

//mobile highglighting ground logic
Game.prototype.mobileGreenHighlights = function(newState) {
    var placables = this.entity.findByTag('Placable');
    
    if(newState === true){
        for(var i = 0; i < placables.length; i++){
            var position = placables[i].getPosition();

            var highlight = this.entity.findByName('GreenHighlight');
            var clone = highlight.clone();

            clone.enabled = true;

            if(clone.rigidbody){
                clone.rigidbody.teleport(position);
            } else {
                clone.setPosition(position);
            }
            clone.tags.add('Highlight Clone');
            this.entity.addChild(clone);
        }
    } 
    else if (newState === false){
        var clones = this.entity.findByTag('Highlight Clone');
        for(var j = 0; j < clones.length; j++){
            clones[j].destroy();
        }
    }
};

Game.prototype.touchMoveMobile = function() {
    this.unitHighlighting();
    this.resetUnitDeploy();
};

Game.prototype.onMouseMove = function (event) {
    if ( this.dragState === true ) {
        // this.sellButtonInitialize(false);
        
        this.resetUnitDeploy();
        
        this.doRayCastDrag(event);
        
        this.unitHighlighting();
    }

    //only do the green-red tile logic if there is a unity to deploy
    if(this.unitToDeploy){
        var app = this.app;
        
        var from = this.cameraEntity.getPosition();
        var to = this.cameraEntity.camera.screenToWorld(event.x, event.y, this.cameraEntity.camera.farClip);
        
        //knowing what you're clicking
        app.systems.rigidbody.raycastFirst(from, to, function (result) {
            var currentTile = result.entity.getPosition();
            var currentX = Math.round(currentTile.x / 2);
            var currentY = Math.round(currentTile.z / 2);
            
            var currentEntityType = this.entity.script.mapsystem.getSpaceType(currentX, currentY);
            
            var greenTile = this.entity.findByName('GreenHighlight');
            var redTile = this.entity.findByName('RedHighlight');
            
            // var cannonHover = this.entity.findByName(this.unitToDeployBlueprint+'');
            if(currentEntityType == 3){
                
                if(redTile && redTile.enabled){
                    redTile.enabled = false;
                }                
                
                greenTile.enabled = true;
                greenTile.setPosition(currentX*2, 0.01, currentY*2);
                
                this.entity.findByName(this.unitToDeployBlueprint).enabled = true;
                this.entity.findByName(this.unitToDeployBlueprint).setPosition(currentX*2, 0.01, currentY*2);
                this.entity.findByName(this.unitToDeployBlueprint).findByName('Range Mesh').enabled = true;
            } 
            else {
                if(greenTile && greenTile.enabled){
                    greenTile.enabled = false;
                    
                    //code for making the unitToDeployBlueprint disappear when on redTile as well
                    this.entity.findByName(this.unitToDeployBlueprint+'').enabled = false;
                }
                
                redTile.enabled = true;
                redTile.setPosition(currentX*2, 0.01, currentY*2);
            }
        }.bind(this));
    }
};

Game.prototype.onMouseUp = function(event) {
    this.mouseUpHandler();
};

Game.prototype.mouseUpHandler = function() {
    if(this.app.touch && (this.mouseDragEntity === undefined || this.mouseDragEntity === null))
        return;
    
    if(this.dragState === true || this.mobileDragState === true){
        
        var dropPosition = this.app.touch ? this.mouseDragEntity.getPosition() : this.dragEntity.getPosition();
        // var dropPosition = this.dragEntity.getPosition();
        
        this.mergeHandler(dropPosition);
    }
    
    this.afterMergeHandler();
};

Game.prototype.mergeHandler = function(dropPosition) {
    var x = Math.round(dropPosition.x / 2);
    var y = Math.round(dropPosition.z / 2);

    var initPos = this.initialPosition;
    var initPosX = this.initialPositionX;
    var initPosY = this.initialPositionY;

    var placableType = 3;

    var yellowCannon2Type = 6;
    var yellowCannon3Type = 7;
    var blackCannonType2 = 9;
    var blackCannonType3 = 10;
    var blueCannonType2 = 12;
    var blueCannonType3 = 13;
    var whiteCannonType2 = 15;
    var whiteCannonType3 = 16;
    var redCannonType2 = 18;
    var redCannonType3 = 19;
    var greenCannonType2 = 21;
    var greenCannonType3 = 22;

    var localEntity = this.entity.script.mapsystem.getSpaceName(x,y);
    var entityDragged = this.entity.script.mapsystem.getSpaceName(initPosX, initPosY);
    
    //here we check the set position of cannons after dragging, if a merge is possible with the current drag 
        //then replace the present spaceType with the merged one and the initial into a placable ground again
        switch(localEntity){
            case 'Yellow Cannon 1':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, yellowCannon2Type);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    //Yes! We made a super combo!
                    PokiSDK.happyTime(0.5); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstYellow2){
                        this.app.root.findByName('UI').findByName('Yellow Cannon 2 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Yellow Cannon 2').enabled = true;
                        this.firstYellow2 = false;
                        
                        if(this.app.touch){
                            this.mobileMergeTutorial(false);
                        } else {
                            this.mergeTutorial(false);
                        }
                        this.gamePauseState(false);
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'Yellow Cannon 2':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, yellowCannon3Type);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(1); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstYellow3){
                        this.app.root.findByName('UI').findByName('Yellow Cannon 3 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Yellow Cannon 3').enabled = true;
                        this.firstYellow3 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'Black Cannon 1':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, blackCannonType2);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(0.5); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstBlack2){
                        this.app.root.findByName('UI').findByName('Black Cannon 2 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Black Cannon 2').enabled = true;
                        this.firstBlack2 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'Black Cannon 2':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, blackCannonType3);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(1); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstBlack3){
                        this.app.root.findByName('UI').findByName('Black Cannon 3 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Black Cannon 3').enabled = true;
                        this.firstBlack3 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'Blue Cannon 1':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, blueCannonType2);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(0.5); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstBlue2){
                        this.app.root.findByName('UI').findByName('Blue Cannon 2 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Blue Cannon 2').enabled = true;
                        this.firstBlue2 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'Blue Cannon 2':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, blueCannonType3);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(1); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstBlue3){
                        this.app.root.findByName('UI').findByName('Blue Cannon 3 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Blue Cannon 3').enabled = true;
                        this.firstBlue3 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'White Cannon 1':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, whiteCannonType2);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(0.5); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstWhite2){
                        this.app.root.findByName('UI').findByName('White Cannon 2 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('White Cannon 2').enabled = true;
                        this.firstWhite2 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'White Cannon 2':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, whiteCannonType3);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(1); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstWhite3){
                        this.app.root.findByName('UI').findByName('White Cannon 3 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('White Cannon 3').enabled = true;
                        this.firstWhite3 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'Red Cannon 1':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, redCannonType2);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(0.5); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstRed2){
                        this.app.root.findByName('UI').findByName('Red Cannon 2 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Red Cannon 2').enabled = true;
                        this.firstRed2 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'Red Cannon 2':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, redCannonType3);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(1); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstRed3){
                        this.app.root.findByName('UI').findByName('Red Cannon 3 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Red Cannon 3').enabled = true;
                        this.firstRed3 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'Green Cannon 1':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, greenCannonType2);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(0.5); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstGreen2){
                        this.app.root.findByName('UI').findByName('Green Cannon 2 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Green Cannon 2').enabled = true;
                        this.firstGreen2 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            case 'Green Cannon 2':
                if(!(x == initPosX && y == initPosY) && (entityDragged == localEntity)){
                    this.entity.script.mapsystem.changeMergeState();
                    
                    this.dragEntityDestroy();
                    this.entity.script.mapsystem.setSpaceType(x, y, greenCannonType3);
                    this.entity.script.mapsystem.setSpaceType(initPosX, initPosY, placableType);
                    
                    PokiSDK.happyTime(1); // scale is 0.0 to 1.0

                    this.sellButtonInitialize(false);
                    
                    if(this.firstGreen3){
                        this.app.root.findByName('UI').findByName('Green Cannon 3 Locked').enabled = false;
                        this.app.root.findByName('UI').findByName('Green Cannon 3').enabled = true;
                        this.firstGreen3 = false;
                    }
                } else {
                    this.dragEntityReposition(initPos);
                }
                break;
            default:
                this.dragEntityReposition(initPos);
                break;
        }
};

Game.prototype.mainLight = function() {
    if(this.entity.findByName('Main Light').enabled === false){
        this.entity.findByName('Main Light').enabled = true;
        this.entity.findByName('Drag Light').enabled = false;
    }
};

Game.prototype.unitDefaultHighlight = function() {
    if(this.getSpotlightChildren === true){
        var children = this.entity.getChildren();

        for(var i = 0; i < children.length; i++){
            var child = children[i];

            if(this.app.touch){
                if(child.name == this.firstMouseDragEntity.name){
                    child.findByName('Aim').script.switchingMaterials.changeToNextMaterial(0);
                    child.findByName('Body').script.switchingMaterials.changeToNextMaterial(0);
                }
            }else if(child.name == this.dragEntity.name){
                child.findByName('Aim').script.switchingMaterials.changeToNextMaterial(0);
                child.findByName('Body').script.switchingMaterials.changeToNextMaterial(0);
            }
        }

        this.getSpotlightChildren = false;
    }
};

Game.prototype.afterMergeHandler = function() {
    this.mainLight();
    
    this.unitDefaultHighlight();

    this.dragState = false;
    this.initialPositionSaved = false;
    this.entity.findByName('GreenHighlight').enabled = false;
    this.entity.findByName('RedHighlight').enabled = false;
    
    // this.gridHighlightState(false);
    // if( this.app.touch !== null){
    //     this.sellButtonInitialize(false);
    //     // this.app.touch.off(pc.EVENT_TOUCHMOVE);
    // }
    
    // this.firstMouseDragEntity = new pc.Entity();
    // this.mouseDragEntity = new pc.Entity();
    
    this.firstMouseDragEntity = null;
    this.mouseDragEntity = null;
    
    this.mobileDragState = false;
    // this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
};

Game.prototype.dragEntityDestroy = function() {
    if(this.app.touch){
        this.mouseDragEntity.destroy();
        // this.mouseDragEntity = null;
        // this.firstMouseDragEntity = null;
    } else {
        this.dragEntity.destroy();
        // this.dragEntity = null;
    }
};

Game.prototype.dragEntityReposition = function(initialPosition) {
    if(this.app.touch){
        // this.mouseDragEntity.setPosition(initialPosition);
    } else {
        this.dragEntity.setPosition(initialPosition);
    }
};

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

