const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
// 수열 A
const A = input[1].split(" ").map(Number).sort((a,b)=> a-b)
// 수열 B
const B = input[2].split(" ").map(Number).sort((a,b)=> a-b)

if(A.length !== B.length) {
    console.log("No")
    return 
}

console.log(A.some((v, i) => v !== B[i]) ? "No" : "Yes")