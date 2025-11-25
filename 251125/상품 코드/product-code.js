const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [prod2_id, code2] = input[0].split(' ');

class Prod {
    constructor(prod_id = "codetree", code = 50){
        this.prod_id = prod_id
        this.code = code
    }
    print(){
        console.log(`product ${this.code} is ${this.prod_id}`)
    }
}

const prod1 = new Prod()
const prod2 = new Prod(prod2_id, code2)

prod1.print()
prod2.print()