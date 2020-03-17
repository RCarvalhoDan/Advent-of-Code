import * as fs from "fs";

// l,w,h => 2x3x4 => 2.l.w + 2.w.h + 2.h.l
//                   2.2.3 + 2.3.4 + 2.4.2
//                    2*6   +  2*12  +  2*8 = 52 + (3*2) = 58

const surfaceArea = (length: number, width: number, height: number) => {
  const l = length;
  const w = width;
  const h = height;

  return (2*l*w + 2*w*h + 2*h*l);
}

const day02pt1 = (): void => {
  fs.readFile('./day02_input.txt', 'utf8', (err: NodeJS.ErrnoException, data: Buffer) => {
    const dimensions: string = data.toString();
    const dimensionsArr: number[] = dimensions.split('x').join().split('\n').join().split(',').map(Number);

    const subArr: number[] = [];
    let total: number = 0;

    for(let i = 0; i<= dimensionsArr.length; i++){      
      if(subArr.length < 3){
        subArr.push(dimensionsArr[i]);
      }else{
        const partialWrapping: number = surfaceArea(subArr[0], subArr[1], subArr[2]);
        
        const sortedArr: number[] = subArr.sort((a: number, b: number) => a - b);
        
        const smallerSurface: number = sortedArr[0] * sortedArr[1];

        total += partialWrapping + smallerSurface;
        
        while(subArr.length > 0){
          subArr.pop();
        }

        subArr.push(dimensionsArr[i]);
      }
    }

    console.log(total);
  })
}

day02pt1();

