"use strict";
exports.__esModule = true;
var fs = require("fs");
var day06 = function () {
    fs.readFile("day06_input.txt", "utf8", function (err, data) {
        var instructions = data.toString();
        var instructionsArr = instructions.split("\n");
        var grid = [];
        // Create 1000x1000
        for (var i = 0; i < 999; i++) {
            grid[i] = new Array(1000);
        }
        console.log(grid[0].length);
    });
};
day06();
