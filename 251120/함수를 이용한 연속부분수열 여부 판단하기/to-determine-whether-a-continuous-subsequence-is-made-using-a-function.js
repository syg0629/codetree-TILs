const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const [n1, n2] = input[0].split(" ").map(Number)
const a = input[1].split(" ").map(Number)
const b = input[2].split(" ").map(Number)

const isSubArr = () => {
    if(n2 > n1) return false

    for(let i = 0; i<= n1-n2; i++){
        let match = true

        for(let j = 0; j<n2; j++){
            if(a[i+j] !== b[j]){
                match = false
                break
            }
        }

        if(match){
            return true
        }
    }
    return false
}

if(isSubArr()){
    console.log("Yes")
}else{
    console.log("No")
}