// changingScenes.js
var ChangingScenes = pc.createScript('changingScenes');

ChangingScenes.attributes.add("sceneName", {type: "string", default: "", title: "Scene Name to Load"});

ChangingScenes.prototype.initialize = function(dt) {
};

// update code called every frame
ChangingScenes.prototype.update = function(dt) {
    
};

ChangingScenes.prototype.changeScene = function() {
    var oldHierarchy = this.app.root.findByName ('Root');
    oldHierarchy.destroy();
    
    this.loadScene(this.sceneName, function() {
        
    });
};

ChangingScenes.prototype.loadScene = function (sceneName, callback) {
    // Get a reference to the scene's root object
    
    
    // Get the path to the scene
    var scene = this.app.scenes.find(sceneName);
    
    // Load the scenes entity hierarchy
    this.app.scenes.loadSceneHierarchy(scene.url, function (err, parent) {
        if (!err) {
            callback(parent);
        } else {
            console.error(err);
        }
    });
};

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

