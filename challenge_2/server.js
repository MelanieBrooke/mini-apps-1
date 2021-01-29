const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.static('./client'));



app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
})





// routers

app.post('/' (req, res) => {
  // preventDefault();
  console.log('hi');
  console.log(req.body);
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
        infoString += ',';
      } else {
        infoString += '<nodata>,';
      }
    }
    for (var key in dataObject) {
      if (keysArray.includes(key)) {
        console.log('cool')
      } else if (key !== 'children') {
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
  return csvText;
};


var writeFile = function(file, text) {
  fs.writeFile(file, text, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('file written successfully');
    return;
  })
};