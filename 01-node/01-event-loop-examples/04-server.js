const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event ocur");
  res.end("Hello Bang");
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
