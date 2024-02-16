import { Kraken } from "./kraken"

const creds = {
    apiKey: 'LOqqLN8479Tup65hHEbxaX+fpzaIT6gofmsGQ1l6ii9GryVrT3pyKraN',
    secret: 'qhlkaQbwIWBuatMl7JPRxxmFYt+VEEHX2US8p4I2Fa4l82ABYpI2z7XpVI62whIXjrRcVfShrrHSbwN8mWTJFA=='
}

const kraken = new Kraken(creds.apiKey, creds.secret);
kraken.fetchBalance().then((res) => console.log(res));