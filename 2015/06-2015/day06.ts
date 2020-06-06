import * as fs from "fs";

interface instructions {
  command: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

// Extract the data needed in each instruction string
const extractInstructions = (instruction: string): instructions => {
  const extractData: string[] = instruction
    .replace(/\bturn\s\b|\bthrough\b\s/g, "") // replace 'turn' and 'through ' with empty
    .replace(/\s/g, ",") // replace all white spaces with commas
    .split(",");

  return {
    command: extractData[0],
    startX: Number(extractData[1]),
    startY: Number(extractData[2]),
    endX: Number(extractData[3]),
    endY: Number(extractData[4]),
  };
};

const day06 = (): void => {
  fs.readFile(
    "day06_input.txt",
    "utf8",
    (err: NodeJS.ErrnoException, data: Buffer) => {
      const dataString: string = data.toString();
      const dataArr: string[] = dataString.split("\n");
      let grid: Array<number>[] = [];

      // Create 1000x1000 grid
      for (let i = 0; i < 1000; i++) {
        grid[i] = new Array<number>(1000);
      }

      // Initialize all lights as 0 (off)
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          grid[i][j] = 0;
        }
      }

      // Read all entries and execute instruction
      for (let i = 0; i < dataArr.length; i++) {
        let instruction: instructions = extractInstructions(dataArr[i]);
        let command: string = instruction.command;

        // Switch on, off or toggle lights in the given range
        for (let i = instruction.startX; i <= instruction.endX; i++) {
          for (let j = instruction.startY; j <= instruction.endY; j++) {
            if (command === "on") {
              grid[i][j] = 1;
            }

            if (command === "off") {
              grid[i][j] = 0;
            }

            if (command === "toggle") {
              if (grid[i][j] === 0) {
                grid[i][j] = 1;
              } else if (grid[i][j] === 1) {
                grid[i][j] = 0;
              }
            }
          }
        }
      }

      // Count total of lit lights
      let countLit: number = 0;

      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
            countLit = countLit + 1;
          }
        }
      }

      console.log(countLit);
    }
  );
};

day06();
