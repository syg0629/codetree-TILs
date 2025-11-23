const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

class User {
    constructor(id = "codetree", lv = 10){
        this.id = id
        this.lv = lv
    }
}

const user1 = new User()
const user2 = new User(user_id, level)

console.log(`user ${user1.id} lv ${user1.lv}`)
console.log(`user ${user2.id} lv ${user2.lv}`)