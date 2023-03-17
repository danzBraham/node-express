const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Our Homepage");
  } else if (req.url === "/about") {
    res.end("about our page");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>The page you are looking for does not exist!</p>
    <a href="/">Back to Homepage!</a>
    `);
  }
});

server.listen(5000);
