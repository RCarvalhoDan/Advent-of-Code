import * as fs from "fs";

// Coordinate Type
interface coordinate {
  x: number;
  y: number;
}

// Tests if the coordinate already exists
const isUnique = (visitedArr: coordinate[], obj: coordinate): boolean =>
  visitedArr.some((value: coordinate) => {
    if (value.x === obj.x && value.y === obj.y) return true;
  });

const day03 = (): void => {
  fs.readFile(
    "day03_input.txt",
    "utf8",
    (err: NodeJS.ErrnoException, data: Buffer) => {
      const directions = data.toString();
      const directionsArr: string[] = directions.split("");

      let cX = 0;
      let cY = 0;

      let position: coordinate = { x: cX, y: cY };

      const housesVisited: coordinate[] = [];

      // Add the first house
      housesVisited.push(position);

      for (let i = 0; i < directionsArr.length; i++) {
        // Move in the Cartesian Plane
        if (directionsArr[i] === "<") {
          cX = cX - 1;
        } else if (directionsArr[i] === "^") {
          cY = cY + 1;
        } else if (directionsArr[i] === ">") {
          cX = cX + 1;
        } else if (directionsArr[i] === "v") {
          cY = cY - 1;
        }

        // Update position value
        position = { x: cX, y: cY };

        // Add only new houses
        if (!isUnique(housesVisited, position)) {
          housesVisited.push(position);
        }
      }

      // Return the number of unique houses visited
      console.log(housesVisited.length);
    }
  );
};

day03();
