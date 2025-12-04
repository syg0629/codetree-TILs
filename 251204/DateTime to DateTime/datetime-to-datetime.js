const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

const day = 11
const hour = 11
const min = 11
let totalMin = 0

if(day > A || day === A && hour < B || day === A && hour === B && min < C) {
    console.log(-1)
}
else{
    if(day < A){
        const totalDay = A - day
        totalMin += totalDay * 24 * 60
    }
    if(hour < B){
        const totalHour = B - hour
        totalMin += totalHour * 60
    }
    if(min < C){
        totalMin += C - min
    }   
    console.log(totalMin)
}