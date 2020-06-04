const CryptoJS = require("crypto-js");

const day04 = (): string => {
  let secretKey: string = "yzbqklnj";
  let auxSecretKey: string = secretKey;

  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    // Reinstantiate auxiliary secret key
    auxSecretKey = secretKey;

    // Add current number to string
    auxSecretKey += i.toString();

    // Hash the key
    let md5Hash: string = CryptoJS.MD5(auxSecretKey).toString();

    // Extract the first five characters
    let md5HashSlice: string = md5Hash.slice(0, 5);

    // If it contains 5 zeroes return the current key
    if (md5HashSlice === "00000") {
      return auxSecretKey;
    }
  }

  return "Answer not found";
};

const day04pt2 = (): string => {
  let secretKey: string = "yzbqklnj";
  let auxSecretKey: string = secretKey;

  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    // Reinstantiate auxiliary secret key
    auxSecretKey = secretKey;

    // Add current number to string
    auxSecretKey += i.toString();

    // Hash the key
    let md5Hash: string = CryptoJS.MD5(auxSecretKey).toString();

    // Extract the first six characters
    let md5HashSlice: string = md5Hash.slice(0, 6);

    // If it contains 6 zeroes return the current key
    if (md5HashSlice === "000000") {
      return auxSecretKey;
    }
  }

  return "Answer not found";
};

console.log(day04pt2());
