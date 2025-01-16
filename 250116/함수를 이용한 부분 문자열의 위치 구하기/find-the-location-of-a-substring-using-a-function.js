const fs = require("fs")
const [str, part] = fs.readFileSync(0).toString().trim().split("\n")
console.log(str.indexOf(part))
