import * as fs from "fs";

interface instructions {
  command: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

// Extract the data needed in each instruction string
// TODO: Test function
const extractInstructions = (rawInstruction: string): instructions => {
  let command: string;
  let startX: number;
  let startY: number;
  let endX: number;
  let endY: number;

  const turnon: string = "turnon";
  const turnoff: string = "turnoff";
  const toggle: string = "toggle";

  const extractData = rawInstruction.split(" ").join("");

  if (extractData.includes(turnon)) {
    command = turnon;
  }

  if (extractData.includes(turnoff)) {
    command = turnoff;
  }

  if (extractData.includes(toggle)) {
    command = toggle;
  }

  //TODO: loop through extract data checking isNan(character) || character === ','
  // add the number values to its respectives coordinates

  return; // return an object instructions with the extracted data
};

const day06 = (): void => {
  fs.readFile(
    "day06_input.txt",
    "utf8",
    (err: NodeJS.ErrnoException, data: Buffer) => {
      const instructions: string = data.toString();
      const instructionsArr: string[] = instructions.split("\n");
      let grid: Array<number>[] = [];

      // Create 1000x1000 grid
      for (let i = 0; i < 999; i++) {
        grid[i] = new Array<number>(1000);
      }
      // TODO: loop through instructionsArr and applicate each string to extractInstructions
    }
  );
};

day06();
