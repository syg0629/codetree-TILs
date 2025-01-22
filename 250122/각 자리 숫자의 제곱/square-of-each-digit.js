const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

const sumF = (num) => {
    if(num < 10) return Math.pow(num,2)
    return Math.pow(num%10,2)+ sumF(parseInt(num/10))
}
console.log(sumF(n))