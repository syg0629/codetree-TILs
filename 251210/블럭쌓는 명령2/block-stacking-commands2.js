const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

const arr = new Array(n + 1).fill(0);

for(const [from, to] of segments) {
    arr[from] = to;
}

let answer = 0;
for(let i = 1; i <= n; i++) {
    if(arr[i] === 0) {
        answer++;
    }
}

console.log(answer);
