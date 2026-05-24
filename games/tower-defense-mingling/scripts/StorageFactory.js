// StorageFactory.js
var StorageFactory = pc.createScript('storageFactory');

// initialize code called once per entity
StorageFactory.prototype.initialize = function() {
    if(this.inMemoryStorage === undefined)
        this.inMemoryStorage = {};
};

StorageFactory.prototype.isSupported = function () {
    try {
        var testKey = "__some_random_key_you_are_not_going_to_use__";
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        
        return true;
    } catch (e) {
        return false;
    }
};

StorageFactory.prototype.clear = function () {
    if (this.isSupported()) {
        localStorage.clear();
    } else {
        this.inMemoryStorage = {};
    }
};

StorageFactory.prototype.getItem = function ( name ) {
    if (this.isSupported()) {
        return localStorage.getItem(name);
    }
    if (this.inMemoryStorage !== undefined && this.inMemoryStorage.hasOwnProperty(name)) {
        return this.inMemoryStorage[name];
    }
    return null;
};

StorageFactory.prototype.key = function key (index) {
    if (this.isSupported()) {
        return localStorage.key(index);
    } else {
        return Object.keys(this.inMemoryStorage)[index] || null;
    }
 };

StorageFactory.prototype.removeItem = function (name) {
    if (this.isSupported()) {
        localStorage.removeItem(name);
    } else {
        delete this.inMemoryStorage[name];
    }
};

StorageFactory.prototype.setItem = function (name, value) {
    if (this.isSupported()) {
        localStorage.setItem(name, value);
    } else {
        if(this.inMemoryStorage === undefined)
            this.inMemoryStorage = {};
        
        this.inMemoryStorage[name] = String(value); // not everyone uses TypeScript
    }
};

StorageFactory.prototype.getLength = function () {
    if (this.isSupported()) {
        return localStorage.length;
    } else {
        if(this.inMemoryStorage === undefined)
            return -1;
        
        return Object.keys(this.inMemoryStorage).length;
    }
};

// swap method called for script hot-reloading
// inherit your script state here
// StorageFactory.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

