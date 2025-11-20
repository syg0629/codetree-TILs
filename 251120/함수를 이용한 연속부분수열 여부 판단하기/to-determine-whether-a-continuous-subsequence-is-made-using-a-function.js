const fs = require("fs")
const [n, a, b] = fs.readFileSync(0).toString().trim().split("\n")

if(a.includes(b)){
    console.log("Yes")
}else{
    console.log("No")
}