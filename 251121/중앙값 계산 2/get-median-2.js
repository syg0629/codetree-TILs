const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const arr2 = []
const answer = []
arr.forEach((v,i)=> {
    arr2.push(v)
    arr2.sort((a,b)=> a-b)
    if ((i + 1) % 2 === 1) {
        answer.push(arr2[Math.floor(arr2.length/2)])
    }
})
console.log(answer.join(" "))