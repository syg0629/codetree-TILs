const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

const f = (n) => {
    if(n <= 1){
        return 1
    }else{
        return n * f(n-1)
    }
}

console.log(f(input))