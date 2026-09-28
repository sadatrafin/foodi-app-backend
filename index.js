require('dotenv').config();
const express = require('express');
const router = require('./routur');
const {dbConnect} = require('./config/db');
const app = express()
const port = 3000
app.use(express.json())

dbConnect();

app.use("/", router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})