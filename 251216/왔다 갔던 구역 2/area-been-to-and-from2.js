const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);
const a = commands.map((x)=> x.split(" "))

const segments = new Map();

let pos = 0;
for(const [x, y] of a) {
    const distance = Number(x);
    let newPos = y === 'R' ? pos + distance : pos - distance;
    
    const [start, end] = pos < newPos ? [pos, newPos] : [newPos, pos];
    
    const key = `${start},${end}`;
    segments.set(key, (segments.get(key) || 0) + 1);
    
    pos = newPos;
}

let result = 0;
for(const [key, count] of segments) {
    if(count >= 2) {
        const [start, end] = key.split(',').map(Number);
        result += (end - start);
    }
}

console.log(result);