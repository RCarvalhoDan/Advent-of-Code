"use strict";
exports.__esModule = true;
var fs = require("fs");
// Move in the Cartesian Plane
var goToCoordinate = function (direction, cX, cY) {
    if (direction === "<") {
        cX = cX - 1;
    }
    else if (direction === "^") {
        cY = cY + 1;
    }
    else if (direction === ">") {
        cX = cX + 1;
    }
    else if (direction === "v") {
        cY = cY - 1;
    }
    var position = { x: cX, y: cY };
    return position;
};
// Tests if the coordinate already exists
var isUnique = function (visitedArr, obj) {
    return visitedArr.some(function (value) {
        if (value.x === obj.x && value.y === obj.y)
            return true;
    });
};
var day03 = function () {
    fs.readFile("day03_input.txt", "utf8", function (err, data) {
        var directions = data.toString();
        var directionsArr = directions.split("");
        var position = { x: 0, y: 0 };
        var housesVisited = [];
        // Add the first house
        housesVisited.push(position);
        for (var i = 0; i < directionsArr.length; i++) {
            // Update position value
            position = goToCoordinate(directionsArr[i], position.x, position.y);
            // Add only new houses
            if (!isUnique(housesVisited, position)) {
                housesVisited.push(position);
            }
        }
        // Return the number of unique houses visited
        console.log("Part 1: " + housesVisited.length);
    });
};
day03();
var day03pt2 = function () {
    fs.readFile("day03_input.txt", "utf8", function (err, data) {
        var directions = data.toString();
        var directionsArr = directions.split("");
        var santasPosition = { x: 0, y: 0 };
        var robotPosition = { x: 0, y: 0 };
        var housesVisited = [];
        // Add the first house
        housesVisited.push(santasPosition);
        for (var i = 0; i < directionsArr.length; i++) {
            var auxPosition = { x: 0, y: 0 };
            // Update Santa's position value if i is even
            if (i === 0 || i % 2 === 0) {
                // Move in the Cartesian Plane
                santasPosition = goToCoordinate(directionsArr[i], santasPosition.x, santasPosition.y);
                auxPosition = { x: santasPosition.x, y: santasPosition.y };
            }
            //Update Robot Santa's position value if i is odd
            if (i === 1 || i % 2 !== 0) {
                robotPosition = goToCoordinate(directionsArr[i], robotPosition.x, robotPosition.y);
                auxPosition = { x: robotPosition.x, y: robotPosition.y };
            }
            // Add only new houses
            if (!isUnique(housesVisited, auxPosition)) {
                housesVisited.push(auxPosition);
            }
        }
        // Return the number of unique houses visited
        console.log("Part 2: " + housesVisited.length);
    });
};
day03pt2();
