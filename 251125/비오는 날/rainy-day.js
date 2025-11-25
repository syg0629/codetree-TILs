const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

class Weather {
    constructor(date, day, weather){
        this.date = date
        this.day = day
        this.weather = weather
    }
    print(){
        console.log(`${date} ${day} ${weather}`)
    }
}

const [date, day, weather] = forecasts.filter(item => item[2] === "Rain").sort((a,b)=> new Date(a[0])- new Date(b[0]))[0]
const weather1 = new Weather(date, day, weather)
weather1.print()