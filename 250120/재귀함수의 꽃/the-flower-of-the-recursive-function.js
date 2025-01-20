const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

const recursive = (n) => {
    if(n === 0) return
    process.stdout.write(n + " ");
    recursive(n-1)
    process.stdout.write(n + " ");
}

recursive(n)