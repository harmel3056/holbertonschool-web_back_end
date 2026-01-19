const http = require('node:http'); // Node inbuilt HTTP module (raw server API)

const app = http.createServer((request, response) => {
// creates HTTP server object, registers function that runs for every request coming in
// 'request' contains properties like .url .method .headers so use that for specific access
  const body = 'Hello Holberton School!';

  response.statusCode = 200; // means OK, 200 is Node default but this is good practice
  response.setHeader('Content-Type', 'text/plain'); // tells server type of data sending
  response.end(body); // returns message, finalises HTTP response, closes connection
});

app.listen(1245); // Activates this server and tells it which port to listen on
