const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const withIndex = arr.map((v, i) => ({ v, i }));

const sorted = [...withIndex].sort((a, b) => {
  if (a.v === b.v) {
    return a.i - b.i;
  }
  return a.v - b.v;
});

const result = new Array(n);

sorted.forEach((item, sortedIndex) => {
  result[item.i] = sortedIndex + 1;
});

console.log(result.join(' '));