const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

const arr = new Array(n+1).fill(0);

for(const [from, to] of segments) {
    for(let i = from; i <= to; i++){
        arr[i]++
    }
}

console.log(Math.max(...arr));
