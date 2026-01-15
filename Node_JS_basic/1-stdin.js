const readline = require('readline'); // import the built-in readline module

const rl = readline.createInterface({
  // readline module allows the Node.js program to wait for user input
  input: process.stdin, // necessary for readline
  output: process.stdout, // optional for readline
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // .question enacts a callback once an entry has been made and returned
  // (name) becomes the parameter for that callback function
  console.log(`Your name is: ${name}`);
  // this is the callback, which uses the parameter (entry made by user)

  console.log('This important software is now closing');
  rl.close(); // function closes itself
});
