const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];

const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const date1 = new Date(2024, m1-1, d1)
const date2 = new Date(2024, m2-1, d2)

let count = 0
const targetDayIndex = day.indexOf(A)

while (date1 <= date2) {
    if (date1.getDay() === targetDayIndex) {
        count++;
    }
    date1.setDate(date1.getDate() + 1);
}

console.log(count);