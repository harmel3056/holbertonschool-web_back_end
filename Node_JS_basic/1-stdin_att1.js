/* Had to abandon this version. Turns out readline is for interactive mode
only, which doesn't work for piped command-line entries. Readline waits for
user input, but if the entry is piped then the program is closed before an
entry can officially be made, so a process will be skipped.
*/
const readline = require('readline'); // import the built-in readline module

const rl = readline.createInterface({
  // readline module allows the Node.js program to wait for user input
  input: process.stdin, // necessary for readline
  output: process.stdout, // optional for readline
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // .question enacts a callback once an entry has been made and returned
  // (name) becomes the parameter for that callback function
  process.stdout.write(`Your name is: ${name}\r`);
  // this is the callback, which uses the parameter (entry made by user)

  process.on('exit', () => { // creates this process only if 'exit' enacted
    process.stdout.write('This important software is now closing\n');
  });
});
