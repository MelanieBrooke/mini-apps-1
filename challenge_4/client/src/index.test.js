// import React from "react";
// import ReactDOM from "react-dom";

var jsdom = require('mocha-jsdom')
const document = jsdom({
  url: "http://localhost:1963"
})

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders Hello World Title", () => {
    //
  });
});