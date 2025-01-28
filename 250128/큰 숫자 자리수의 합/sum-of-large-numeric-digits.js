const fs = require("fs")
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
const digits =  (a * b * c).toString().split("").map(Number)
const f = (index) => {
    if(index === 0){
        return digits[0]
    }
    return digits[index] + f(index-1)
}
console.log(f(digits.length-1))