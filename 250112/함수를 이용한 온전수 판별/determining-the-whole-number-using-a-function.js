const fs = require("fs")
const [n,m] = fs.readFileSync(0).toString().trim().split(" ")

let count = 0
for(let i = n; i<=m; i++){
    if(i % 2 !== 0 && i.toString().split("")[1] !== "5" && !(i % 3 === 0 && i % 9 !== 0)){
        count++
    }
}
console.log(count)