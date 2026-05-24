// switchingMaterials.js
var SwitchingMaterials = pc.createScript('switchingMaterials');

// Create an array of materials to cycle the model through
SwitchingMaterials.attributes.add("materials", {type: "asset", assetType: "material", array: true, title: "Materials"});

// initialize code called once per entity
SwitchingMaterials.prototype.initialize = function() {
//     this.materialIndex = 0;
    
//     this.changeToNextMaterial();
};


SwitchingMaterials.prototype.changeToNextMaterial = function(materialIndex) {
    // Get the next material asset in the array 
    // this.materialIndex = (this.materialIndex + 1) % this.materials.length;
    var material = this.materials[materialIndex];        

    // Assign the material to all the mesh instances in the model
    var meshInstances = this.entity.model.meshInstances;
    for (var i = 0; i < meshInstances.length; ++i) { 
        var mesh = meshInstances[i];
        mesh.material = material.resource;
    }
};

