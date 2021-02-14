const express = require('express');
const app = express();
require("dotenv").config();
let port = process.env.PORT;

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})

