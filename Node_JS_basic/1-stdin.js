process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (name) => { // when input arrives, run this function
  process.stdout.write(`Your name is: ${name}`);
});

process.stdin.on('end', () => { // creates this process only when input ends
  process.stdout.write('This important software is now closing\n');
});
