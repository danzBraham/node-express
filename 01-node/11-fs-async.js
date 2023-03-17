const fs = require("fs");

// Non-Blocking - run the code simultaneously
console.log("start");
fs.readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) throw err;
  const first = data;
  console.log(first);
  fs.readFile("./content/second.txt", "utf-8", (err, data) => {
    if (err) throw err;
    const second = data;
    console.log(second);
    fs.writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first} and ${second}.`,
      (err) => {
        if (err) throw err;
        console.log("The file has been wrote!");
        console.log("task finished!");
      }
    );
  });
});
console.log("start the next task");
