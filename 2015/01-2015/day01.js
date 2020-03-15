"use strict";
exports.__esModule = true;
var fs = require("fs");
var day1pt1 = function () {
    fs.readFile('./day01_input.txt', function (err, data) {
        var directions = data.toString();
        var directionsArray = directions.split('');
        var answer = directionsArray.reduce(function (accumulator, currentValue) {
            if (currentValue === '(') {
                return accumulator += 1;
            }
            else {
                return accumulator -= 1;
            }
        }, 0);
        console.log(answer);
    });
};
day1pt1();
var day1pt2 = function () {
    fs.readFile('./day01_input.txt', function (err, data) {
        var directions = data.toString();
        var directionsArray = directions.split('');
        var accumulator = 0;
        var counter = 0;
        var answer = directionsArray.some(function (currentItem) {
            if (currentItem === '(') {
                accumulator += 1;
            }
            else {
                accumulator -= 1;
            }
            counter++;
            return accumulator < 0;
        });
        console.log(counter);
    });
};
day1pt2();
