const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const A = input[1].split(" ").map(Number).sort((a,b)=> a-b)
const B = input[2].split(" ").map(Number).sort((a,b)=> a-b)

console.log(A.some((v, i) => v !== B[i]) ? "No" : "Yes")