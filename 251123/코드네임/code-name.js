const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [code0, s0] = input[0].split(' ');
const score0 = Number(s0);
const [code1, s1] = input[1].split(' ');
const score1 = Number(s1);
const [code2, s2] = input[2].split(' ');
const score2 = Number(s2);
const [code3, s3] = input[3].split(' ');
const score3 = Number(s3);
const [code4, s4] = input[4].split(' ');
const score4 = Number(s4);

class User {
    constructor(code, s){
        this.code = code
        this.s = s
    }
}

const users = [
    new User(code0, score0), 
    new User(code1, score1), 
    new User(code2, score2), 
    new User(code3, score3), 
    new User(code4, score4)
]

// 최솟값을 가진 사용자 찾기
let minUser = users[0];
for(let i = 1; i < users.length; i++){
    if(users[i].s < minUser.s){
        minUser = users[i];
    }
}

console.log(minUser.code + " " + minUser.s);