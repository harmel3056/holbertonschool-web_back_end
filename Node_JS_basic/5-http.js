const http = require('node:http'); // Node inbuilt HTTP module (raw server API)
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (request, response) => {
// we make this async to accommodate async function countStudents
  if (request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Holberton School!');
    return;
  }

  if (request.url === '/students') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');

    response.write('This is the list of our students\n');

    try {
      const output = await countStudents('database.csv');
      // have to await async response or it may return before complete
      response.end(output);
    } catch (err) {
      response.statusCode = 500;
      response.end('Cannot load the database');
    }
  }
});

app.listen(1245);

module.exports = app;
