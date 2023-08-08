const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // const data = fs.readFileSync('./content/big.txt');
    // res.end(data);
    const dataStream = fs.createReadStream('./content/big.txt', 'utf-8');
    dataStream.on('open', () => {
      dataStream.pipe(res);
    });
    dataStream.on('error', (err) => {
      console.log(err);
    });
  })
  .listen(5000, () => {
    console.log('Server listening on port 5000');
  });
