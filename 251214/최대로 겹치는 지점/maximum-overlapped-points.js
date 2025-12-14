const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

const map = new Map()
for(const [from, to] of segments){
  for (let i = from; i <= to; i++) {
    map.set(i, (map.get(i)||0)+1)
  }
}

console.log(Math.max(...map.values()))
