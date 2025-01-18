const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

const printStar = (num) => {
    if(num === 0) return
    printStar(num-1)
    for (let i = 0; i < num; i++) { 
        process.stdout.write("*"); 
    }
    console.log()
}

printStar(n)