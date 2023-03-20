const http = require("http");
const { readFileSync } = require("fs");
const port = 3000;

const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/style.css");
const homeLogic = readFileSync("./navbar-app/script.js");

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage, "utf-8");
    res.end();
  } else if (url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyle, "utf-8");
    res.end();
  } else if (url === "/script.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(homeLogic, "utf-8");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>About Page</h1>`, "utf-8");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`<h1>Page Not Found</h1>`, "utf-8");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
