const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const personLines = input.slice(1, n + 1).sort((a,b)=> b.localeCompare(a));
const [name, addr, city] = personLines[0].split(" ")

class List {
    constructor(name, addr, city){
        this.name = name
        this.addr = addr
        this.city = city
    }

    print(){
        console.log(`name ${this.name}`)
        console.log(`addr ${this.addr}`)
        console.log(`city ${this.city}`)
    }
}

const list = new List(name, addr, city)

list.print()