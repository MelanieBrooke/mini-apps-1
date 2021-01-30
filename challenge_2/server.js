const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const csvFile = require('./report.txt');

app.use(express.static('./client'));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})

// client action needs to send to server location, in this case it was the localhost
// body parser is required to read the data
// focus on one step at a time



// routers

app.post('/', (req, res) => {
  // body parser
  // take in data
  // convert it
  // send it back
  // preventDefault();
  console.log('hi----------------------');
  var data = req.body.userJSON;
  data = data.substring(0, data.length-1);
  var json = JSON.parse(data);
  var parsed = parseData(json);
  // console.log(parsed);
  // console.log(typeof parsed);

  // var file = '/report.txt'
  // writeCSV(parsed, '/Users/mdewitt/repos/galvanize/rpt26-mini-apps-1/challenge_2/report.txt');
  writeCSV('./report.txt', parsed);
  res.end();
});



var parseData = function(data) {
  var keysArray = [];
  var textToWrite = '';
  var organizeData = function(dataObject) {
    var infoString = '';
    for (var i = 0; i < keysArray.length; i++) {
      if (dataObject[keysArray[i]] !== undefined) {
        infoString += dataObject[keysArray[i]];
      }
      infoString += ',';
    }
    for (var key in dataObject) {
      if (!keysArray.includes(key) && key !== 'children') {
        keysArray.push(key);
        infoString += dataObject[key];
        infoString += ',';
      }
    }
    textToWrite += infoString;
    textToWrite += '\n';
    if (dataObject.children !== undefined && dataObject.children.length > 0) {
      for (j = 0; j < dataObject.children.length; j++) {
        organizeData(dataObject.children[j]);
      }
    }
  };
  organizeData(data);
  var csvKeys = keysArray.join(',');
  csvKeys = csvKeys += '\n';
  var csvText = csvKeys.concat(textToWrite);
  csvText = csvText.replace(/,\n/g, '\n');
  return csvText;
};


var writeCSV = function(file, data) {
  fs.writeFile(file, data, err => {
    if (err) {
      console.log('nope');
      console.error(err);
      return;
    }
    console.log('file written successfully');
    return;
  })
};