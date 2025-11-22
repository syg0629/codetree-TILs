const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');

class str {
    constructor(code, point, time){
        this.code = code
        this.point = point
        this.time = time
    }
}

const str1 = new str(s_code, m_point, time)

console.log(`secret code : ${str1.code}`)
console.log(`meeting point : ${str1.point}`)
console.log(`time : ${str1.time}`)