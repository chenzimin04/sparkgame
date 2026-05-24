// mapSystem.js
var types = [{
        name: 'Road',
        walkable: true
    }, {
        name: 'Destination',
        walkable: true
    }, {
        name: 'Spawn',
        walkable: true
    }, {
        name: 'Placable',
        walkable: false
    }, {
        name: 'Environment Objects',
        walkable: false
    }, {
        name: 'Yellow Cannon 1',
        walkable: true
    }, {
        name: 'Yellow Cannon 2',
        walkable: true
    }, {
        name: 'Yellow Cannon 3',
        walkable: true
    }, {
        name: 'Black Cannon 1',
        walkable: true
    }, {
        name: 'Black Cannon 2',
        walkable: true
    }, {
        name: 'Black Cannon 3',
        walkable: true
    }, {
        name: 'Blue Cannon 1',
        walkable: true
    }, {
        name: 'Blue Cannon 2',
        walkable: true
    }, {
        name: 'Blue Cannon 3',
        walkable: true
    }, {
        name: 'White Cannon 1',
        walkable: true
    }, {
        name: 'White Cannon 2',
        walkable: true
    }, {
        name: 'White Cannon 3',
        walkable: true
    }, {
        name: 'Red Cannon 1',
        walkable: true
    }, {
        name: 'Red Cannon 2',
        walkable: true
    }, {
        name: 'Red Cannon 3',
        walkable: true
    }, {
        name: 'Green Cannon 1',
        walkable: true
    }, {
        name: 'Green Cannon 2',
        walkable: true
    }, {
        name: 'Green Cannon 3',
        walkable: true
    }
];

//optimize the grid map to use only the areas that you need, not lots of unnecessary tiles - IMPORTANT
// var mapDfn = [
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
//     [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
// ];

var level1 = [
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];

var level2 = [
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    [ 2, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];

var level3 = [
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];

var level4 = [
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];

var level5 = [
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];

var level6 = [
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
];

var MapSystem = pc.createScript('mapsystem');

// MapSystem.attributes.add('levelMatrix', {type: 'string', default: 'level1', title: 'Level matrix:'});
// MapSystem.attributes.add('levelMatrix', {type: 'entity'});
// var mapDfn = this.levelMatrix.script.level1.returnMatrix();

// MapSystem.attributes.add('currentLevel', {type: 'number', default: 1, title: 'Current level:'});

// initialize code called once per entity
MapSystem.prototype.initialize = function() {
    // this.firstMapCreation = true;
    
    // this.currentLevel = 1;
    
    this.getMatrix(level1);
    
    this.merging = false;
    
    this.levelReset = false;
    
    // switch(this.currentLevel){
    //     case 1:
    //         this.getMatrix(level1);
    //         break;
    //     case 2:
    //         this.getMatrix(level2);
    //         break;
    //     default:
    //         break;
    // }
    
    // this.map = [];
    // for (var y = 0; y < mapDfn.length; y++) {
    //     this.map.push([]);
    //     for (var x = 0; x < mapDfn[0].length; x++) {
    //         this.map[y][x] = {
    //             type: -1,
    //             entity: null
    //         };
    //     }
    // }
};

MapSystem.prototype.changeLevelNumber = function(newLevelNumber) {
    this.currentLevel = newLevelNumber;
};

MapSystem.prototype.getMatrix = function(mapDfn) {
    this.map = [];
    
    for (var y = 0; y < mapDfn.length; y++) {
        this.map.push([]);
        for (var x = 0; x < mapDfn[0].length; x++) {
            this.map[y][x] = {
                type: -1,
                entity: null
            };
        }
    }
};

MapSystem.prototype.getSpaceType  = function (x, y) {
    return this.map[y][x].type;
};

MapSystem.prototype.getSpaceName  = function (x, y) {
    var t = this.getSpaceType(x, y);
    return types[t].name;
};

MapSystem.prototype.setSpaceType  = function (x, y, t) {
    var app = this.app;
    var currType = this.map[y][x].type;

    var recreating = false;
    
    // If nothing's changed, early out
    // But, if it is SpawnLocation, then don't early out but recreate it
    if (t === currType && t != 2 && t != 3) {
        return;
    }

    if(currType > 3 && t === 3){
        recreating = true;
    }
    
    // Blow away whatever's on the space
    if (this.map[y][x].entity) {
        this.map[y][x].entity.destroy();
        this.map[y][x].entity = null;
    }

    var templates = app.root.findByName('Templates');
    var e = templates.findByName(types[t].name);
    var clone = null;
    
    if (e) {
        clone = e.clone();
        clone.enabled = true;
        if (clone.rigidbody) {
            clone.rigidbody.teleport(x * 2, 0, y * 2);
            if(t>4){
                this.placementAnimation(clone);
                
                if(this.merging){
                    this.mergeParticle(clone);
                    this.merging = false;
                }
            }
        } else {
            clone.setPosition(x * 2, 0, y * 2);
            if(t>4){
                this.placementAnimation(clone);
                
                if(this.merging){
                    this.mergeParticle(clone);
                    this.merging = false;
                }
            }
        }
        this.entity.addChild(clone);

        //using the same logic as above, but now to find the placement areas(t=3) for highlight,
        //and storing them in a different entity to manipulate later
        if((t === 3 && !recreating) || (t === 3 && this.levelReset)){
            var gridGreen = templates.findByName('GridGreenHighlight');
            var gridCloneUnit = null;

            if(gridGreen){
                gridCloneUnit = gridGreen.clone();
                gridCloneUnit.enabled = true;

                if(gridCloneUnit.rigidbody){
                    gridCloneUnit.rigidbody.teleport(x * 2, 0.01, y * 2);
                } else {
                    gridCloneUnit.setPosition(x * 2, 0.01, y * 2);
                }
            }
            
            var levelGrid = this.entity.findByName('Level Grid');
            
//             var levelGridChildren = levelGrid.children;
            
//             var gridCurrentPosition = new pc.Vec3();
//             var gridPosition = new pc.Vec3();
            
//             for(var i = 0; i < levelGridChildren.length; i++){
//                 gridCurrentPosition = levelGridChildren[i].getPosition();
//                 gridPosition = gridCloneUnit.getPosition();
                
//                 if(this.equals( gridCurrentPosition, gridPosition, 0.1 )){
//                     gridCloneUnit.destroy();
//                 } else {
//                     levelGrid.addChild(gridCloneUnit);
//                 }
//             }
            
            levelGrid.addChild(gridCloneUnit);
            
            // console.log(`Clone unit green: ${gridCloneUnit} x: ${x} y: ${y}`);
        }

    }

    this.map[y][x] = {
        type: t,
        entity: clone
    };
};

MapSystem.prototype.placementAnimation = function(entity){
    entity.sound.play('Placement');
    
    entity.setLocalScale(1.5,1.5,1.5);
    
    setTimeout(function(){
        entity.setLocalScale(1,1,1);
    }.bind(this), 100);
    
    setTimeout(function(){
        entity.setLocalScale(0.6,0.6,0.6);
    }.bind(this), 200);
    
    setTimeout(function(){
        entity.setLocalScale(1.2,1.2,1.2);
    }.bind(this), 300);
    
    setTimeout(function(){
        entity.setLocalScale(0.9,0.9,0.9);
    }.bind(this), 400);
};


MapSystem.prototype.mergeParticle = function(entity){
    var merge = entity.findByName('Merge');
    merge.enabled = true;
};

MapSystem.prototype.changeMergeState = function(){
    this.merging = true;
};

MapSystem.prototype.isWalkable  = function (x, y) {
    var t = this.map[y][x].type;
    return types[t].walkable;
};

//method to reset the map
//is called in game.js
MapSystem.prototype.reset  = function () {
    this.levelResetState(true);
    
    switch(this.currentLevel){
        case 1:
            this.resetMatrix(level1);
            
            console.log(this.entity.script.game.firstMerge);
            if(this.entity.script.game.firstMerge){
                PokiSDK.gameplayStart();
                
                var instance = this;
                instance.app.timeScale = 0;
                this.entity.script.game.gamePauseState(true);
                
                this.entity.script.game.tutorialUI();
            }
            break;
        case 2:
            this.entity.script.game.gamePauseState(false);
            this.resetMatrix(level2);
            break;
        case 3:
            this.entity.script.game.gamePauseState(false);
            this.resetMatrix(level3);
            break;
        case 4:
            this.entity.script.game.gamePauseState(false);
            this.resetMatrix(level4);
            break;
        case 5:
            this.entity.script.game.gamePauseState(false);
            this.resetMatrix(level5);
            break;
        case 6:
            this.entity.script.game.gamePauseState(false);
            this.resetMatrix(level6);
            break;
        default:
            break;
    }
    
    this.levelResetState(false);
};

MapSystem.prototype.levelResetState = function(newState){
    this.levelReset = newState;
};

MapSystem.prototype.resetMatrix = function(mapDfn){
    var app = this.app;
    var templates = app.root.findByName('Templates');
    
    templates.enabled = true;
    
    var levelGrid = new pc.Entity('Level Grid');
    this.entity.addChild(levelGrid);

    // Instatiate a copy of the master map
    var w = mapDfn[0].length;
    var h = mapDfn.length;
    var x, y;

    for (y = 0; y < h; y++) {
        for (x = 0; x < w; x++) {
            this.setSpaceType(x, y, mapDfn[y][x]);
        }
    }

    templates.enabled = false;

    this.updatePathFinder();
};

//updates the pathfinder through the map when it resets
//is called at reset method
//the pathfindergrid and pathfinder are used in getpath method
MapSystem.prototype.updatePathFinder  = function () {
    // Create the pathfinding structures
    var w = this.map[0].length;
    var h = this.map.length;
    var x, y;
    var matrix = [];
    this.walkable = [];
    for (y = 0; y < h; y++) {
        matrix[y] = [];
        for (x = 0; x < w; x++) {
            if (this.isWalkable(x, y)) {
                this.walkable.push([x, y]);
                matrix[y][x] = 0;
            } else {
                matrix[y][x] = 1;
            }
        }
    }

    this.pathFinderGrid = new PF.Grid(w, h, matrix);
    this.pathFinder = new PF.AStarFinder();
};

//determines the path from point A to point B using x,z coordinates of each point
//which can be objects or just destinations
//uses the pathfindergrid and pathfinder from updatePathFinder method, 
//to create the grid and the path
//it then creates the curve along the path in which the entity will walk
MapSystem.prototype.getPath  = function (fx, fy, tx, ty) {
    if ((tx === undefined) && (ty === undefined)) {
        // No target space was specified so pick one at random
        var numWalkable = this.walkable.length;
        do {
            var destination = this.walkable[Math.floor(Math.random() * (numWalkable - 1))];
            tx = destination[0];
            ty = destination[1];
        } while ((fx === tx) && (fy === ty));
    }

    var grid = this.pathFinderGrid.clone();
    var path = this.pathFinder.findPath(fx, fy, tx, ty, grid);

    var xkeys = [];
    var ykeys = [];
    for (var i = 0; i < path.length; i++) {
        var t = i / (path.length - 1);
        xkeys.push(t, path[i][0]);
        ykeys.push(t, path[i][1]);
    }
    
    // console.log('path: ' + path.length + ', x: ' + xkeys.length + ', ykeys: ' + ykeys.length);
    
    var curveSet = new pc.CurveSet(xkeys, ykeys);
    curveSet.type = pc.CURVE_LINEAR;

    return curveSet;
};

MapSystem.prototype.levelNumber = function(){
    return this.currentLevel;
};

// update code called every frame
MapSystem.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// MapSystem.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/

