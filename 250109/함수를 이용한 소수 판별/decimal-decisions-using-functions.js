const fs = require("fs")
const [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const isPrime = (num) => {
    if(num < 2) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

let sum = 0
for(let i = n; i <= m; i++){
    if(isPrime(i))
    sum += i
}
console.log(sum)