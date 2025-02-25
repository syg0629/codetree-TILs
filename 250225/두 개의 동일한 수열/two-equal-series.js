const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const A = input[1].split(" ").map(Number).sort((a,b)=> a-b)
const B = input[2].split(" ").map(Number).sort((a,b)=> a-b)
for(let i = 0; i < n; i++){
    if(A[i] !== B[i]){
    return console.log("No")
    }
}
console.log("Yes")