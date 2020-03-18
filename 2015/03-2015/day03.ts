import * as fs from 'fs';

const day03 = (): void => {
  fs.readFile('day03_input.txt', 'utf8', (err: NodeJS.ErrnoException, data: Buffer) => {
    const directions = data.toString();
    const directionsArr: string[] = directions.split('');

    //TODO: Review typescript object typing. Maybe implement a interface first
    const coordinates: object = { x: 0, y: 0}

    for(let i = 0; i < directionsArr.length; i++){
      //TODO: implement logic
      //plot the points as in a Cartesian Plane
      //every point should be added to a Hash Table
      //  if the point is already in the Table, do nothing
      //return the number of points in the Table
    }
  })
}

day03();
