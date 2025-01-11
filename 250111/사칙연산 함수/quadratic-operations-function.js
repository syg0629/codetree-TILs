const fs = require("fs")
const [a,o,c] = fs.readFileSync(0).toString().trim().split(" ")
const numA = Number(a)
const numC = Number(c)
let answer = `${numA} ${o} ${numC} = `

if(o === "+"){
    answer += numA + numC
}
else if(o === "-"){
    answer += numA - numC
}
else if(o === "/"){
    answer = Math.floor(numA / numC);
}
else if(o === "*"){
    answer += numA * numC
}
else{
    answer = "False"
}
console.log(answer)