const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const csvFile = require('./report.csv');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({
  storage:storage,
});

app.use(express.static('./client'));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})


// routers
app.post('/', upload.single('userJSON'), (req, res, next) => {
  console.log(req.file !== undefined);
  var bufferFile = (req.file.buffer);
  bufferFile = (bufferFile.toString());
  if (bufferFile[bufferFile.length-1] === ';') {
    bufferFile = bufferFile.substring(0, bufferFile.length-1);
  }
  bufferFile = JSON.parse(bufferFile);
  var parsed = parseData(bufferFile);
  console.log(parsed);
  writeCSV('./report.csv', parsed);
  res.location('/');
  res.sendFile('/Users/mdewitt/repos/galvanize/rpt26-mini-apps-1/challenge_2/report.csv');
})

app.get('/', (req, res, next) => {
  console.log('file requested');
  res.download('/Users/mdewitt/repos/galvanize/rpt26-mini-apps-1/challenge_2/report.csv', function(err) {
    if (err) {
      console.error(err)
    }
  });
});



// app.post('/', (req, res) => {
//   var data = req.body.userJSON;
//   if (data[data.length-1] === ';') {
//     data = data.substring(0, data.length-1);
//   }
//   var json = JSON.parse(data);
//   var parsed = parseData(json);
//   writeCSV('./report.csv', parsed);
//   res.location('/');
//   res.sendFile('/Users/mdewitt/repos/galvanize/rpt26-mini-apps-1/challenge_2/report.csv');
// });



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
  fs.writeFileSync(file, data, err => {
    if (err) {
      console.log('nope');
      console.error(err);
      return;
    }
    console.log('file written successfully');
    return;
  })
};