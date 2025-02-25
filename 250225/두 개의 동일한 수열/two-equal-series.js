const fs = require("fs")
const [n, A, B] = fs.readFileSync(0).toString().trim().split("\n").map((x)=> x.split(" ").map(Number).sort((a,b)=> a-b))
for(let i = 0; i<=n; i++){
    if(A[i] !== B[i])
    return console.log("No")
}
console.log("Yes")