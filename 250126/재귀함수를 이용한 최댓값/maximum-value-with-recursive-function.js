const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])
const arr = input[1].split(" ").map(Number)

const f = (index) => {
    if(index === 0) return arr[0]
    return Math.max(arr[index], f(index - 1))
}
console.log(f(n-1))