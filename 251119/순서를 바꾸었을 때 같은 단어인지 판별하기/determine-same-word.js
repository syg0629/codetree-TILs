const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0].split("").sort().join("");
const str2 = input[1].split("").sort().join("");

if(str1 === str2) {
    console.log("Yes")
} else {
    console.log("No")
}