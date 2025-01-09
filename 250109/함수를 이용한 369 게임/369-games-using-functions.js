const fs = require("fs")
const [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const divideByThree = (num) => num%3===0


const include369 = (num) => {
    return num.toString().split("").some((x)=> ["3","6","9"].includes(x))
}

let count = 0
for(let i = n; i<=m; i++){
    if(divideByThree(i) || include369(i)){
        count++
    }
}
console.log(count)


