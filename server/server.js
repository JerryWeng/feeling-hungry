require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const app = express()

mongoose.set("strictQuery", false)

app.get('/', (req, res) => {
  res.json({msg: "Welcome to the app"})
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error);
  })