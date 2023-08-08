const fs = require('fs');

// Non-Blocking - run the code simultaneously
console.log('start');

fs.readFile('./content/first.txt', 'utf-8', (err, firstData) => {
  if (err) throw err;
  console.log(firstData);
  fs.readFile('./content/second.txt', 'utf-8', (err, secondData) => {
    if (err) throw err;
    console.log(secondData);
    const result = `Here is the result: ${firstData} and ${secondData}.`;
    fs.writeFile('./content/result-async.txt', result, (err) => {
      if (err) throw err;
      console.log('The file has been written!');
      console.log('task finished!');
    });
  });
});

console.log('start the next task');
