const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

const pointsWithDistance = points.map((point, index) => {
  const [x, y] = point;
  const distance = Math.abs(x) + Math.abs(y);
  return {
    index: index + 1,
    distance: distance
  };
});

pointsWithDistance.sort((a, b) => {
  if (a.distance !== b.distance) {
    return a.distance - b.distance;
  }
  return a.index - b.index; 
});

for (const point of pointsWithDistance) {
  console.log(point.index);
}