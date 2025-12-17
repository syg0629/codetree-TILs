const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);
const a = commands.map((x)=> x.split(" "))

const segments = new Map();

let pos = 0;
let count = {};

for(const [dist, dir] of a) {
    const distance = Number(dist);
    const newPos = dir === 'R' ? pos + distance : pos - distance;
    
    const start = Math.min(pos, newPos);
    const end = Math.max(pos, newPos);
    
    for(let j = start; j < end; j++) {
        count[j] = (count[j] || 0) + 1;
    }
    
    pos = newPos;
}

let result = 0;
for(let key in count) {
    if(count[key] >= 2) {
        result++;
    }
}

console.log(result);