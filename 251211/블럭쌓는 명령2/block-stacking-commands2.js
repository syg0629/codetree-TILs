const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

const arr = new Array(n).fill(0);

for(const [from, to] of segments) {
    for(let i = from; i <= to; i++){
        arr[i]++
    }
}

console.log(Math.max(...arr));
