const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const bodyParser = require('body-parser');

app.use(express.static('client'));



app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})





// routers

app.post('/' (req, res) => {
  // preventDefault();
  console.log('hi');
  console.log(req.body);
});