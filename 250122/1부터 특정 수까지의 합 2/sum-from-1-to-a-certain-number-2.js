const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

const sumF = (n) => {
    if(n === 1) return 1
    return sumF(n-1) + n
}
console.log(sumF(n))