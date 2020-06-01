"use strict";
exports.__esModule = true;
var fs = require("fs");
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
        var cX = 0;
        var cY = 0;
        var position = { x: cX, y: cY };
        var housesVisited = [];
        // Add the first house
        housesVisited.push(position);
        for (var i = 0; i < directionsArr.length; i++) {
            // Move in the Cartesian Plane
            if (directionsArr[i] === "<") {
                cX = cX - 1;
            }
            else if (directionsArr[i] === "^") {
                cY = cY + 1;
            }
            else if (directionsArr[i] === ">") {
                cX = cX + 1;
            }
            else if (directionsArr[i] === "v") {
                cY = cY - 1;
            }
            // Update position value
            position = { x: cX, y: cY };
            // Add only new houses
            if (!isUnique(housesVisited, position)) {
                housesVisited.push(position);
            }
        }
        // Return the number of unique houses visited
        console.log(housesVisited.length);
    });
};
day03();
