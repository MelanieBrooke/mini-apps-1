// import React from 'react';
// import App from '../src/index.jsx';
// import Board from '../src/components/Board.jsx';
// import GameEnd from '../src/components/GameEnd';
// import ReactTestUtils from 'react-dom/test-utils';

require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;