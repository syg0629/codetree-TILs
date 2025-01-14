const fs = require("fs")
const [M, D] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const isValidDate = (month, day) => {
    const date = new Date(2021, month-1, day);
    return date.getMonth() === month -1 && date.getDate() === day
}

console.log(isValidDate(M,D) ? "Yes": "No")