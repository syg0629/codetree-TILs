const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

for(let i = 0; i< n; i++){
    studentData[i][4] =  Number(studentData[i][1])+Number(studentData[i][2])+Number(studentData[i][3])
}
studentData.sort((a,b)=> a[4] - b[4])

for(const x of studentData){
    x.pop()
    console.log(x.join(" "))
}