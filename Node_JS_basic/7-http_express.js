const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  const database = process.argv[2];

  try {
    const output = await countStudents(database);
    response.send(`This is the list of our students\n${output}`);
  } catch (err) {
    response.status(500).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);

module.exports = app;
