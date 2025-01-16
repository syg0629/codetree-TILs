const fs = require("fs")
const [info, arr] = fs.readFileSync(0).toString().trim().split("\n").map((x)=> x.split(" ").map(Number))
let [_, m] = info

const getSum = (x)=> {
    let total = arr[x-1]
    while(x > 1){
        if(x%2 === 0){
            x /= 2
        }else{
            x--
        }
        total += arr[x-1]
    }
    return total
}

console.log(getSum(m))