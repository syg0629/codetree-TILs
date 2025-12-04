const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const date1 = new Date(2011, m1-1, d1)
const date2 = new Date(2011, m2-1, d2)

const dayDiff = date2.getDay() - date1.getDay();
const resultIdx = (1 + dayDiff + 7) % 7;
console.log(day[resultIdx])