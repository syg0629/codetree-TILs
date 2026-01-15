const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const grid = Array(201).fill(0).map(()=> Array(201).fill(0))

for(const [x1, y1, x2, y2] of rects){
    for(let x = x1; x < x2; x++){
        for(let y = y1; y < y2; y++){
            grid[x+100][y+100] = 1
        }
    }
}

let answer = 0;
for(let i = 0; i< 201; i++){
    for(let j = 0; j< 201; j++){
        answer += grid[i][j]
    }
}

console.log(answer)