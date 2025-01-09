const fs = require("fs")
const input = fs.readFileSync(0).toString().trim()

const divideTwoAndMultipleFive = (n) => {
    return n % 2 === 0 && (n.split("").map(Number).reduce((a,b)=> a+b,0) % 5 === 0)
}

const answer = (n) => {
    if(divideTwoAndMultipleFive(n)){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

answer(input)