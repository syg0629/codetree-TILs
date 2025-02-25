const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
// 수열 A
const A = input[1].trim().split(" ").map(Number).sort((a,b)=> a-b)
// 수열 B
const B = input[2].trim().split(" ").map(Number).sort((a,b)=> a-b)

// if(Object.is(A,B)) {
//     console.log("YES")
// }

// if(A.length !== B.length) {
//     console.log("No")
//     return 
// }

// for (let i = 0; i < A.length; i++) {
//     if(!(B.some((b) => b == A[i])) ) {
//         console.log("No")
//         return 
//     }
// }

// console.log("Yes")
console.log(A.some((v, i) => v !== B[i]) ? "No" : "Yes")