const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

let month = m1
let day = d1
let elapsed_time = 1
while(true){
    if(month === m2 && day === d2){
        break
    }

    const lastDay = new Date(2011, month, 0).getDate()

    if(day === lastDay) {
      month++;
      day = 1;
    } else {
      day++;
    }
    
    elapsed_time++;
}
  
console.log(elapsed_time);
