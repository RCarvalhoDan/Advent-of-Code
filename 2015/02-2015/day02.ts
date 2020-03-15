import * as fs from "fs";

// l,w,h => 2x3x4 => 2.l.w + 2.w.h + 2.h.l
//                   2.2.3 + 2.3.4 + 2.4.2
//                    2*6   +  2*12  +  2*8 = 52 + (3*2) = 58

const day02 = () => {
  fs.readFile('./day02_input.txt', (err: NodeJS.ErrnoException, data: Buffer) => {
    const dimensions: String = data.toString();
    const dimensionsArr: String[] = dimensions.split('x').join().split('\n');
    console.log(dimensionsArr[0]);
  })
}

day02();