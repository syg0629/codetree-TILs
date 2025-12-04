const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const date1 = new Date(2011, m1-1, d1)
const date2 = new Date(2011, m2-1, d2)
if(date1 < date2){
    const dayIdx = date1.getDay()-date2.getDay()
    console.log(day[1 + dayIdx])
}else{
    const dayIdx = date1.getDay()-date2.getDay()
    console.log(day[1 - dayIdx])
}