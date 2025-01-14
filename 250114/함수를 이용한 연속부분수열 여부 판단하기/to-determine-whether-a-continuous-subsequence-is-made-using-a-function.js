const fs = require("fs")
const [_, a, b] = fs.readFileSync(0).toString().trim().split("\n").map((x)=> x.split(" "))
const aStr = a.join(",")
const bStr = b.join(",")
console.log(aStr.includes(bStr) ? "Yes" : "No");
