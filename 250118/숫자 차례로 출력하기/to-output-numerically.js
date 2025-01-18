const fs = require("fs")
const n = Number(fs.readFileSync(0).toString().trim())

const goUp = (num) => {
    if(num === 0) return

    goUp(num -1)
    process.stdout.write(num + " ");
}

const goDown = (num) => {
    if(num === 0) return

    process.stdout.write(num + " ");
    goDown(num -1)
}

goUp(n)
console.log()
goDown(n)
