const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())
const f = (n) => {
    if(n <= 1){
        return 1
    }
    return n + f(n-2)
}
console.log(f(input))