const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end("Hello World");
// });

// Using Event Emitter API
const server = http.createServer();
server.on('request', (req, res) => {
  res.end('Welcome to Home Page');
});

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});
