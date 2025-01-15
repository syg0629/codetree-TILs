const fs = require("fs")
const [n, m] = fs.readFileSync(0).toString().trim().split(" ")
console.log(m + " " + n)