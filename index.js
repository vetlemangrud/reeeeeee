const dotenv = require('dotenv');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.get('/', (req, res) => {
    res.send(req.query)
})

app.post("/", (req, res) => {
    res.send(req.body.challenge);
})
  
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:`+process.env.PORT)
})