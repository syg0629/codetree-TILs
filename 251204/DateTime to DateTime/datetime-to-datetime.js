const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

const curMin = (11 * 24 * 60) + (11 * 60) + 11
const totalMin = (A * 24 * 60) + (B * 60) + C

if(curMin > totalMin) {
    console.log(-1)
}
else{
    console.log(totalMin - curMin)
}
