const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
words.sort()
const sortedArr = []
for(const x of words){
    if(x.startsWith(t)){
        sortedArr.push(x)
    }
}
console.log(sortedArr[k-1])