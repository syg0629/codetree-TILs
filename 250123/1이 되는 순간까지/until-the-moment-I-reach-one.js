const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

let count = 0
const devide = (n) => {
    if(n === 1) return count
    if(n%2 === 0){
        n/=2
    }else{
        n = Math.floor(n/3)
    }
    count++
    return devide(n)
}
console.log(devide(input))