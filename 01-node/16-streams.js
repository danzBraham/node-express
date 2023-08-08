const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// encoding - encoding options

// const stream = createReadStream('./content/big.txt');

const stream = createReadStream('./content/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf-8',
});

stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (err) => {
  console.error(err);
});
