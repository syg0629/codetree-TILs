const fs = require("fs")
const [_, arr] = fs.readFileSync(0).toString().trim().split("\n").map((x)=> x.split(" ").map(Number))

let answer = []
arr.forEach((x)=> {
    if(x % 2 === 0){
        answer.push(x/2)
    }else{
    answer.push(x)
    }
})
console.log(answer.join(" "))