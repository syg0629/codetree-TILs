const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0].split("").sort().join("");
const str2 = input[1].split("").sort().join("");

for(let i = 0; i<str1.length; i++){
    if(str1[i] !== str2[i]){
        console.log("No")
    }
}
console.log("Yes")