import * as fs from "fs";

const day07pt01 = (): void => {
  fs.readFile(
    "day07_input.txt",
    "utf8",
    (err: NodeJS.ErrnoException, data: Buffer) => {
      const dataStr: string = data.toString();
      const dataArr: string[] = dataStr.split("\n");

      const circuitMatrix: string[][] = dataArr.map((line) => line.split(" "));

      const operations = {
        'AND': '&',
        'OR': '|',
        'LSHIFT': '<<',
        'RSHIFT': '>>',
        'NOT': '!'
      }


      console.log(circuitMatrix);
    }
  );
};

day07pt01();
