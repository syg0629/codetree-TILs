const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

class Bomb {
  constructor(code, color, second) {
    this.code = code;
    this.color = color;
    this.second = second;
  }
  
  print() {
    console.log(`code : ${this.code}`);
    console.log(`color : ${this.color}`);
    console.log(`second : ${this.second}`);
  }
}

const [code, color, second] = input.split(' ');

const bomb = new Bomb(code, color, second);

bomb.print();