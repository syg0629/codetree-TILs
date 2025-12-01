const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);

let hour = a
let min = b
let elapsed_time = 0

while(true){
    if(hour === c && min === d){
        break
    }

    elapsed_time++
    min++

    if(min === 60){
        hour += 1
        min = 0
    }
}
console.log(elapsed_time)