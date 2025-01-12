const fs = require("fs")
const [n,m] = fs.readFileSync(0).toString().trim().split(" ")

let count = 0

const isPrime = (num) => {
    if(num < 2) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

const isEven = (num) => {
    if((num.toString().split("").map(Number).reduce((a,b)=> a+b,0)%2===0)){
        return true
    }
    return false
}
for(let i = n; i <= m; i++){
    if(isPrime(i) && isEven(i)){
        count++
    }
}

console.log(count)