const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("")
const set = new Set(input)
console.log(set.size >= 2 ? "Yes": "No")
