const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const students = [];
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ');
  const height = Number(heightStr);
  const weight = Number(weightStr);
  students.push({ name, height, weight });
}

const nameSort = [...students].sort((a,b)=> {
    return a.name.localeCompare(b.name)
})

const heightSort = [...students].sort((a,b)=> {
  return b.height - a.height
})

console.log("name")
for(const x of nameSort){
  console.log(x.name, x.height, x.weight)
}
console.log()
console.log("height")
for(const x of heightSort){
  console.log(x.name, x.height, x.weight)
}