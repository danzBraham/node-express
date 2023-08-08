const fs = require('fs');

// Blocking - run the code step by step
console.log('start');
const first = fs.readFileSync('./content/first.txt', 'utf-8');
const second = fs.readFileSync('./content/second.txt', 'utf-8');
console.log(`${first} and ${second}`);

fs.writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first} and ${second}. `,
  { flag: 'a' }
);
console.log('task finished!');
console.log('start the next task');
