const fs = require("fs")
const [_, arr] = fs.readFileSync(0).toString().trim().split("\n").map((x)=> x.split(" ").map(Number))
const answer = []
arr.forEach((x)=> answer.push(Math.abs(x)))
console.log(answer.join(" "))