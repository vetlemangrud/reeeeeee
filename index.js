const dotenv = require('dotenv');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();


const port = 3000;

app.get('/', (req, res) => {
    res.send(req.body)
})

app.post("/", (req, res) => {
    res.send(req.body);
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})