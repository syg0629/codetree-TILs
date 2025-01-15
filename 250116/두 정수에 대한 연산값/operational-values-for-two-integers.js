const fs = require("fs")
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
const answer = (a,b) => {
    if(a > b){
        a += 25
        b *= 2
    }else{
        a *= 2
        b += 25
    }
    return [a, b]
}
console.log(answer(n, m).join(" "))