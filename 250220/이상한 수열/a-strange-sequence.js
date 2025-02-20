const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

const dp = new Array(input + 1).fill(0)
const f = (n) => {
    if(n === 1) return 1
    if(n === 2) return 2
    if(dp[n] !== 0) return dp[n]

    dp[n] = f(Math.floor(n/3)) + f(n-1)
    return dp[n]
}

console.log(f(input))