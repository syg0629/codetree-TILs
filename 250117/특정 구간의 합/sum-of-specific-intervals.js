const fs = require("fs")
const [_, arr, ...needToSum] = fs.readFileSync(0).toString().trim().split("\n").map((x)=> x.split(" ").map(Number))

needToSum.forEach((x)=> {
    let sum = 0
    const [first, second] = x
    for(let i = first; i<=second; i++){
    sum += arr[i-1]
    }
    console.log(sum)
})
