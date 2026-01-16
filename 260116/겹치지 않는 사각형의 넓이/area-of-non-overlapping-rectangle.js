const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

const arr = Array(2001).fill(0).map(() => Array(2001).fill(0))
for (const [x1, y1, x2, y2] of [rectA, rectB]) {
    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            arr[x+1000][y+1000] = 1
        }
    }
}

const [x1, y1, x2, y2] = rectM
for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
        arr[x+1000][y+1000] = 0
    }
}


let answer = 0
for (let i = 0; i < 2001; i++) {
    for (let j = 0; j < 2001; j++) {
        answer += arr[i][j]
    }
}

console.log(answer)