const fs = require("fs")
const [Y, M, D] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const isValidDate = (year, month, day) => {
    const date = new Date(year, month -1, day)
    if(date.getFullYear() === year && date.getMonth() === month-1 && date.getDate() === day){
        return findSeason(month - 1)
    }
    return -1
}

const findSeason = (m) => {
    if(m >= 3 && m <= 5) return "Spring"
    if(m >= 6 && m <= 8) return "Summer"
    if(m >= 9 && m <= 11) return "Fall"
    return "Winter"
}

console.log(isValidDate(Y, M, D))