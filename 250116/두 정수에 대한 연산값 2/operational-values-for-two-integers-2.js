const fs = require("fs")
const [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
const answer = (n,m) => {
    if(n > m){
        n *= 2
        m += 10
    }else{
        m *= 2
        n += 10
    }
    return [n, m]
}
console.log(answer(a,b).join(" "))