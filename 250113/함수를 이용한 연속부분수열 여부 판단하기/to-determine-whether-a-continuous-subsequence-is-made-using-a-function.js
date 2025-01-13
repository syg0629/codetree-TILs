const fs = require("fs")
const [n, a, b] = fs.readFileSync(0).toString().trim().split("\n").map((x)=> x.split(" "))
const [numA, numB] = n

const aStr = a.join(",")
const bStr = b.join(",")

if (numA > numB) {
    console.log(aStr.includes(bStr) ? "Yes" : "No");
} else {
    console.log(bStr.includes(aStr) ? "Yes" : "No");
}