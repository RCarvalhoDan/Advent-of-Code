"use strict";
exports.__esModule = true;
var fs = require("fs");
// l,w,h => 2x3x4 => 2.l.w + 2.w.h + 2.h.l
//                   2.2.3 + 2.3.4 + 2.4.2
//                    2*6   +  2*12  +  2*8 = 52 + (3*2) = 58
var day02 = function () {
    fs.readFile('./day02_input.txt', function (err, data) {
        var dimensions = data.toString();
        var dimensionsArr = dimensions.split('x').join().split('\n');
        console.log(dimensionsArr[0]);
    });
};
day02();
