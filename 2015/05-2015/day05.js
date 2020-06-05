"use strict";
exports.__esModule = true;
var fs = require("fs");
// Check if the next n-th letter is repeated
var duplicatedLetter = function (word, n) {
    var wordArray = word.split("");
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === wordArray[i + n]) {
            return true;
        }
    }
    return false;
};
var duplicatePair = function (word) {
    var wordArr = word.split("");
    for (var i = 0; i < wordArr.length; i++) {
        var j = i + 1;
        var pair = wordArr[i] + wordArr[j];
        var cutWord = word.slice(j + 1);
        if (cutWord.length > 1 && cutWord.includes(pair)) {
            return true;
        }
    }
    return false;
};
var day05 = function () {
    fs.readFile("day05_input.txt", "utf8", function (err, data) {
        var stringList = data.toString();
        var stringListArr = stringList.split("\n");
        var vowelsArr = ["a", "e", "i", "o", "u"];
        var forbiddenPairs = ["ab", "cd", "pq", "xy"];
        var totalNiceStrings = 0;
        var _loop_1 = function (i) {
            var checkWord = stringListArr[i];
            // boolean flag
            var isNice = true;
            // check if there is any forbidden pair in the string
            forbiddenPairs.forEach(function (pair) {
                if (checkWord.includes(pair)) {
                    isNice = false;
                }
            });
            // if isNice is false, there is no need to check the other rules
            if (isNice === true) {
                // check for duplicates: aa, bb, cc, ...
                isNice = duplicatedLetter(checkWord, 1);
                // check for at least 3 vowels, if there is a duplicate
                if (isNice === true) {
                    var vowelCount_1 = 0;
                    var checkWordArr = checkWord.split("");
                    // test each letter from the current string to see if it is a vowel
                    checkWordArr.forEach(function (letter) {
                        vowelsArr.forEach(function (vowel) {
                            if (letter === vowel) {
                                vowelCount_1 = vowelCount_1 + 1;
                            }
                        });
                    });
                    if (vowelCount_1 >= 3) {
                        totalNiceStrings = totalNiceStrings + 1;
                    }
                }
            }
        };
        for (var i = 0; i < stringListArr.length; i++) {
            _loop_1(i);
        }
        console.log(totalNiceStrings);
    });
};
day05();
var day05pt2 = function () {
    fs.readFile("day05_input.txt", "utf8", function (err, data) {
        var stringList = data.toString();
        var stringListArr = stringList.split("\n");
        var totalNiceStrings = 0;
        stringListArr.forEach(function (word) {
            // boolean flag
            var isNice = true;
            // Check for duplicate letter at the n-th position
            isNice = duplicatedLetter(word, 2);
            if (isNice === true) {
                // Check for duplicate pair in any position
                isNice = duplicatePair(word);
                if (isNice === true) {
                    totalNiceStrings = totalNiceStrings + 1;
                }
            }
        });
        console.log("Part 02 Answer: " + totalNiceStrings);
    });
};
day05pt2();
