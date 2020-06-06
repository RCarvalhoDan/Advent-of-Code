"use strict";
exports.__esModule = true;
var fs = require("fs");
// Extract the data needed in each instruction string
var extractInstructions = function (instruction) {
    var extractData = instruction
        .replace(/\bturn\s\b|\bthrough\b\s/g, "") // replace 'turn' and 'through ' with empty
        .replace(/\s/g, ",") // replace all white spaces with commas
        .split(",");
    return {
        command: extractData[0],
        startX: Number(extractData[1]),
        startY: Number(extractData[2]),
        endX: Number(extractData[3]),
        endY: Number(extractData[4])
    };
};
var day06 = function () {
    fs.readFile("day06_input.txt", "utf8", function (err, data) {
        var dataString = data.toString();
        var dataArr = dataString.split("\n");
        var grid = [];
        // Create 1000x1000 grid
        for (var i = 0; i < 1000; i++) {
            grid[i] = new Array(1000);
        }
        // Initialize all lights as 0 (off)
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[i].length; j++) {
                grid[i][j] = 0;
            }
        }
        // Read all entries and execute instruction
        for (var i = 0; i < dataArr.length; i++) {
            var instruction = extractInstructions(dataArr[i]);
            var command = instruction.command;
            // Switch on, off or toggle lights in the given range
            for (var i_1 = instruction.startX; i_1 <= instruction.endX; i_1++) {
                for (var j = instruction.startY; j <= instruction.endY; j++) {
                    if (command === "on") {
                        grid[i_1][j] = 1;
                    }
                    if (command === "off") {
                        grid[i_1][j] = 0;
                    }
                    if (command === "toggle") {
                        if (grid[i_1][j] === 0) {
                            grid[i_1][j] = 1;
                        }
                        else if (grid[i_1][j] === 1) {
                            grid[i_1][j] = 0;
                        }
                    }
                }
            }
        }
        // Count total of lit lights
        var countLit = 0;
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    countLit = countLit + 1;
                }
            }
        }
        console.log(countLit);
    });
};
day06();
