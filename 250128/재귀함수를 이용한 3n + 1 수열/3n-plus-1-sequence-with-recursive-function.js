const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

let count = 0
const f = (n) => {
    if(n === 1) return count
    if(n%2 === 0){ 
        n /=2
    }
    else{
        n = n *3 + 1
    }
    count++
    return f(n)
}
console.log(f(input))