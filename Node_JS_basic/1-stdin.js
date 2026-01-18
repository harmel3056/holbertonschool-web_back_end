process.stdout.write('Welcome to Holberton School, what is your name?\n');

let response = ''; /* variable buffer to accumulate command line entry by user.
If we assigned the variable inside of process.stin.on it would override */

process.stdin.on('data', (data) => { // when input arrives, run this function
  response += data; // append stdin items to 'response' variable
  process.stdout.write(`Your name is: ${response.trim()}\n`);
});

process.on('exit', () => { // creates this process only if 'exit' enacted
  process.stdout.write('This important software is now closing\n');
});
