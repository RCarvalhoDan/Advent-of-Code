const fs = require('fs');

const day1pt1 = () => {
  fs.readFile('./day01_input.txt', (err: any, data: String) => {
    console.time('time');
    const directions: String = data.toString();
    const directionsArray: String[] = directions.split('');
    const answer = directionsArray.reduce((accumulator: number, currentValue: String) => {
      if(currentValue === '('){
        return accumulator += 1;
      } else {
        return accumulator -= 1;
      }
    }, 0)
    console.timeEnd('time');
    console.log(answer);
  })
}

day1pt1();

const day1pt2 = () => {
  fs.readFile('./day01_input.txt', (err: any, data: String) => {
    console.time('time-position');
    const directions: String = data.toString();
    const directionsArray: String[] = directions.split('');
    
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      if(currentItem === '('){
        accumulator += 1;
      } else {
        accumulator -= 1;
      }
      counter++;
      return accumulator < 0;
    });
    console.log(counter);
    console.timeEnd('time-position');
  })
}

day1pt2();
