// play.js

const connect = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    // \u0003 maps to ctrl+c input
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
};

setupInput();