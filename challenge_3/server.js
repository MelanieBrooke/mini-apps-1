const express = require('express');
const app = express();
require("dotenv").config();
let port = process.env.PORT;
const path = require('path');
const db = require('./db/models.js');


app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/userInfo', (req, res) => {
  db.postUserInfo(req.body);
  res.end();
});

app.post('/userContact', (req, res) => {
  db.postUserContact(req.body);
  res.end();
});

app.post('/userPayment', (req, res) => {
  db.postUserPayment(req.body);
  res.end();
});



