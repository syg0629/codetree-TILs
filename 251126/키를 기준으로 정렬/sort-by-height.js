const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}

studentsInput.sort((a,b)=> {
    return Number(a[1]) - Number(b[1])
})

for (let i = 0; i < n; i++) {
    console.log(studentsInput[i].join(" "));
}