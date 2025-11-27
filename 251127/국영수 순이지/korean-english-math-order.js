const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1).map((x)=> x.split(" "));

rawStudentData.sort((a,b)=>{
    if(a[1]!==b[1]){
        return b[1]-a[1]
    }
    if(a[2]!==b[2]){
        return b[2]-a[2]    
    }
    return b[3]-a[3]    
})

for(const x of rawStudentData){
    console.log(x.join(" "))
}