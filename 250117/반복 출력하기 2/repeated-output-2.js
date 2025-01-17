const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())
const str = (n) => {
    if(n === 0) return
    str(n-1)
    console.log("HelloWorld")
}
str(input)
