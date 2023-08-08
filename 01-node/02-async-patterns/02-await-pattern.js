const { readFile, writeFile } = require('fs').promises;
// const util = require("util");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     console.log(first);
//     const second = await getText("./content/second.txt");
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf-8");
//     console.log(first);
//     const second = await readFilePromise("./content/second.txt", "utf-8");
//     console.log(second);
//     await writeFilePromise(
//       "./content/result-await.txt",
//       `Learn JS is so fun, ${first} and ${second}`
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf-8');
    console.log(first);
    const second = await readFile('./content/second.txt', 'utf-8');
    console.log(second);
    await writeFile(
      './content/result-await.txt',
      `Learn NodeJS is so fun, ${first} and ${second}`
    );
  } catch (error) {
    console.error(error);
  }
};

start();
console.log('start');
