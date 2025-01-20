const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

const recursive = (n) => {
    if(n === 0) return
    for(let i = 0; i<n; i++){
        process.stdout.write("* ");
    }
    console.log()
    recursive(n-1)
    for(let i = 0; i<n; i++){
        process.stdout.write("* ");
    }
    console.log()
}

recursive(n)