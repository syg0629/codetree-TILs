const fs = require("fs")
const [_, ...arr] = fs.readFileSync(0).toString().trim().split("\n")
console.log(arr.sort().join("\n"))