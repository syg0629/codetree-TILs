const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

const f = (n) => {
    if(n === 1 || n === 2){
        return 1
    }else{
        return f(n-1)+f(n-2)
    }
}

console.log(f(input))