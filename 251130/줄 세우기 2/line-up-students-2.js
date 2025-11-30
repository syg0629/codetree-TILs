const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight, i]);
}

studentInputs.sort((a,b)=> {
    if(a[0]!==b[0]){
        return a[0]-b[0]
    }
    if(a[1]!==b[1]){
        return b[1]-a[1]
    }    
})

for (let i = 0; i < studentInputs.length; i++) {
    const [height, weight] = studentInputs[i];
    console.log(`${height} ${weight} ${i + 1}`);
}