import * as fs from "fs";

// Check if the next n-th letter is repeated
const duplicatedLetter = (word: string, n: number): boolean => {
  const wordArray: string[] = word.split("");

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === wordArray[i + n]) {
      return true;
    }
  }

  return false;
};

const duplicatePair = (word: string): boolean => {
  const wordArr: string[] = word.split("");

  for (let i = 0; i < wordArr.length; i++) {
    let j = i + 1;

    let pair: string = wordArr[i] + wordArr[j];

    let cutWord = word.slice(j + 1);

    if (cutWord.length > 1 && cutWord.includes(pair)) {
      return true;
    }
  }

  return false;
};

const day05 = (): void => {
  fs.readFile(
    "day05_input.txt",
    "utf8",
    (err: NodeJS.ErrnoException, data: Buffer) => {
      const stringList: string = data.toString();
      const stringListArr: string[] = stringList.split("\n");

      const vowelsArr: string[] = ["a", "e", "i", "o", "u"];
      const forbiddenPairs: string[] = ["ab", "cd", "pq", "xy"];
      let totalNiceStrings = 0;

      for (let i = 0; i < stringListArr.length; i++) {
        let checkWord = stringListArr[i];
        // boolean flag
        let isNice = true;

        // check if there is any forbidden pair in the string
        forbiddenPairs.forEach((pair) => {
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
            let vowelCount = 0;
            let checkWordArr: string[] = checkWord.split("");

            // test each letter from the current string to see if it is a vowel
            checkWordArr.forEach((letter) => {
              vowelsArr.forEach((vowel) => {
                if (letter === vowel) {
                  vowelCount = vowelCount + 1;
                }
              });
            });

            if (vowelCount >= 3) {
              totalNiceStrings = totalNiceStrings + 1;
            }
          }
        }
      }

      console.log(totalNiceStrings);
    }
  );
};

day05();

const day05pt2 = (): void => {
  fs.readFile(
    "day05_input.txt",
    "utf8",
    (err: NodeJS.ErrnoException, data: Buffer) => {
      const stringList: string = data.toString();
      const stringListArr: string[] = stringList.split("\n");

      let totalNiceStrings = 0;

      stringListArr.forEach((word) => {
        // boolean flag
        let isNice = true;

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
    }
  );
};

day05pt2();
