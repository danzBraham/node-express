const { readFile } = require('fs');

console.log('starting the task!');
readFile('./content/first.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log('task finished!');
});
console.log('starting the next task...');
