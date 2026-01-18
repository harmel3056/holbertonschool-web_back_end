const readline = require('readline'); // import the built-in readline module

const rl = readline.createInterface({
  // readline module allows the Node.js program to wait for user input
  input: process.stdin, // necessary for readline
  output: process.stdout, // optional for readline
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // .question enacts a callback once an entry has been made and returned
  // (name) becomes the parameter for that callback function
  process.stdout.write(`Your name is: ${name}\r\n`);
  // this is the callback, which uses the parameter (entry made by user)

  process.on('exit', () => { // creates this process only if 'exit' enacted
  process.stdout.write('This important software is now closing\n');
  });
});
