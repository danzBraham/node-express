const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Home page</h1>`, 'utf-8');
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>About Page</h1>`, 'utf-8');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(`<h1>Page Not Found</h1>`, 'utf-8');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
