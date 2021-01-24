const dotenv = require('dotenv');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.get('/', (req, res) => {
    res.send(req.body)
})

app.post("/", (req, res) => {
    res.send(req.body);
})
  
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:`+process.env.PORT)
})