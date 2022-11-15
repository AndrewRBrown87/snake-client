// input.js

// Stores the active TCP connection object.
let connection;


// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
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
  } else if (key === '\u0077') {
    // \u0077 maps to 'w' input
    connection.write("Move: up");
  } else if (key === '\u0061') {
    // \u0061 maps to 'a' input
    connection.write("Move: left");
  } else if (key === '\u0073') {
    // \u0073 maps to 's' input
    connection.write("Move: down");
  } else if (key === '\u0064') {
    // \u0064 maps to 'd' input
    connection.write("Move: right");
  } else if (key === '\u0079') {
    // \u0079 maps to 'y' input
    connection.write("Say: YUM!");
  } else if (key === '\u0068') {
    // \u0068 maps to 'h' input
    connection.write("Say: HI");
  } else if (key === '\u0078') {
    // \u0078 maps to 'x' input
    connection.write("Say: SNAKES!");
  }
};

module.exports = setupInput;