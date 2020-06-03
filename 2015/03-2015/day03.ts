import * as fs from "fs";

// Coordinate Type
interface coordinate {
  x: number;
  y: number;
}

// Move in the Cartesian Plane
const goToCoordinate = (
  direction: string,
  cX: number,
  cY: number
): coordinate => {
  if (direction === "<") {
    cX = cX - 1;
  } else if (direction === "^") {
    cY = cY + 1;
  } else if (direction === ">") {
    cX = cX + 1;
  } else if (direction === "v") {
    cY = cY - 1;
  }

  const position: coordinate = { x: cX, y: cY };

  return position;
};

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

      let position: coordinate = { x: 0, y: 0 };

      const housesVisited: coordinate[] = [];

      // Add the first house
      housesVisited.push(position);

      for (let i = 0; i < directionsArr.length; i++) {
        // Update position value
        position = goToCoordinate(directionsArr[i], position.x, position.y);

        // Add only new houses
        if (!isUnique(housesVisited, position)) {
          housesVisited.push(position);
        }
      }

      // Return the number of unique houses visited
      console.log("Part 1: " + housesVisited.length);
    }
  );
};

day03();

const day03pt2 = (): void => {
  fs.readFile(
    "day03_input.txt",
    "utf8",
    (err: NodeJS.ErrnoException, data: Buffer) => {
      const directions = data.toString();
      const directionsArr: string[] = directions.split("");

      let santasPosition: coordinate = { x: 0, y: 0 };
      let robotPosition: coordinate = { x: 0, y: 0 };

      const housesVisited: coordinate[] = [];

      // Add the first house
      housesVisited.push(santasPosition);

      for (let i = 0; i < directionsArr.length; i++) {
        let auxPosition: coordinate = { x: 0, y: 0 };

        // Update Santa's position value if i is even
        if (i === 0 || i % 2 === 0) {
          // Move in the Cartesian Plane

          santasPosition = goToCoordinate(
            directionsArr[i],
            santasPosition.x,
            santasPosition.y
          );
          auxPosition = { x: santasPosition.x, y: santasPosition.y };
        }

        //Update Robot Santa's position value if i is odd
        if (i === 1 || i % 2 !== 0) {
          robotPosition = goToCoordinate(
            directionsArr[i],
            robotPosition.x,
            robotPosition.y
          );
          auxPosition = { x: robotPosition.x, y: robotPosition.y };
        }

        // Add only new houses
        if (!isUnique(housesVisited, auxPosition)) {
          housesVisited.push(auxPosition);
        }
      }

      // Return the number of unique houses visited
      console.log("Part 2: " + housesVisited.length);
    }
  );
};

day03pt2();
