const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
}

students.sort((a,b)=>{
    if(a[0]!==b[0]){
        return b[0]-a[0]
    }
    return b[1]-a[1]
})

for(const x of students){
    console.log(x.join(" "))
}