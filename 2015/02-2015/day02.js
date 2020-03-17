"use strict";
exports.__esModule = true;
var fs = require("fs");
// l,w,h => 2x3x4 => 2.l.w + 2.w.h + 2.h.l
//                   2.2.3 + 2.3.4 + 2.4.2
//                    2*6   +  2*12  +  2*8 = 52 + (3*2) = 58
var surfaceArea = function (length, width, height) {
    var l = length;
    var w = width;
    var h = height;
    return (2 * l * w + 2 * w * h + 2 * h * l);
};
var day02 = function () {
    fs.readFile('./day02_input.txt', 'utf8', function (err, data) {
        var dimensions = data.toString();
        var dimensionsArr = dimensions.split('x').join().split('\n').join().split(',').map(Number);
        var subArr = [];
        var totalWrapping = 0;
        var ribbonLength = 0;
        for (var i = 0; i <= dimensionsArr.length; i++) {
            if (subArr.length < 3) {
                subArr.push(dimensionsArr[i]);
            }
            else {
                var partialWrapping = surfaceArea(subArr[0], subArr[1], subArr[2]);
                var sortedArr = subArr.sort(function (a, b) { return a - b; });
                var smallerSurface = sortedArr[0] * sortedArr[1];
                var ribbonCover = 2 * sortedArr[0] + 2 * sortedArr[1];
                var ribbonBow = sortedArr[0] * sortedArr[1] * sortedArr[2];
                totalWrapping += partialWrapping + smallerSurface;
                ribbonLength += ribbonCover + ribbonBow;
                while (subArr.length > 0) {
                    subArr.pop();
                }
                subArr.push(dimensionsArr[i]);
            }
        }
        console.log("Total wrapping paper needed: " + totalWrapping);
        console.log("Total ribbon needed: " + ribbonLength);
    });
};
day02();
