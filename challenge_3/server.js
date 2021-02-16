const express = require('express');
const app = express();
require("dotenv").config();
let port = process.env.PORT;
const path = require('path');
// require("@babel/register");

// **uncomment when ready to try database functions**
// const db = require('./db/models.js');





app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Hello world!');
});


app.post('userInfo', (req, res) => {
  console.log('post userInfo request sent to server')
  // format info
  var userInfo = {
    // see if you need to type it out or if data has some formatting already
  }
  db.postUserInfo(userInfo);
  res.end('post userInfo request to server successful')
});

app.post('userContact', (req, res) => {
  console.log('post userContact request sent to server')
  // format info
  var userContact = {
    // see if you need to type it out or if data has some formatting already
  }
  db.postUserInfo(userContact);
  res.end('post userContact request to server successful')
});

app.post('userPayment', (req, res) => {
  console.log('post userPayment request sent to server')
  // format info
  var userPayment = {
    // see if you need to type it out or if data has some formatting already
  }
  db.postUserInfo(userPayment);
  res.end('post userPayment request to server successful')
});



