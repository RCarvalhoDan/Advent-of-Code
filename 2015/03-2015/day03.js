"use strict";
exports.__esModule = true;
var fs = require("fs");
var day03 = function () {
    fs.readFile('day03_input.txt', 'utf8', function (err, data) {
        var directions = data.toString();
        var directionsArr = directions.split('');
        //TODO: Review typescript object typing. Maybe implement a interface first
        var coordinates = { x: 0, y: 0 };
        for (var i = 0; i < directionsArr.length; i++) {
            //TODO: implement logic
            //plot the points as in a Cartesian Plane
            //every point should be added to a Hash Table
            //  if the point is already in the Table, do nothing
            //return the number of points in the Table
        }
    });
};
day03();
