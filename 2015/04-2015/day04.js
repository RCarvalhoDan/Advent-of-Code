var CryptoJS = require("crypto-js");
var day04 = function () {
    var secretKey = "yzbqklnj";
    var auxSecretKey = secretKey;
    for (var i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
        // Reinstantiate auxiliary secret key
        auxSecretKey = secretKey;
        // Add current number to string
        auxSecretKey += i.toString();
        // Hash the key
        var md5Hash = CryptoJS.MD5(auxSecretKey).toString();
        // Extract the first five characters
        var md5HashSlice = md5Hash.slice(0, 5);
        // If it contains 5 zeroes return the current key
        if (md5HashSlice === "00000") {
            return auxSecretKey;
        }
    }
    return "Answer not found";
};
var day04pt2 = function () {
    var secretKey = "yzbqklnj";
    var auxSecretKey = secretKey;
    for (var i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
        // Reinstantiate auxiliary secret key
        auxSecretKey = secretKey;
        // Add current number to string
        auxSecretKey += i.toString();
        // Hash the key
        var md5Hash = CryptoJS.MD5(auxSecretKey).toString();
        // Extract the first six characters
        var md5HashSlice = md5Hash.slice(0, 6);
        // If it contains 6 zeroes return the current key
        if (md5HashSlice === "000000") {
            return auxSecretKey;
        }
    }
    return "Answer not found";
};
console.log(day04pt2());
