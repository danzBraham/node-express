const path = require('path');

console.log(`Path separator: ${path.sep}`);

const normalizePath = path.join(
  '/content//////',
  '////subfolder////',
  '///////text.txt'
);
console.log(`Normalized path: ${normalizePath}`);

const baseName = path.basename(normalizePath);
console.log(`The basename: ${baseName}`);

const absolutePath = path.resolve(
  __dirname,
  'content',
  'subfolder',
  'text.txt'
);
console.log(`Absolute path: ${absolutePath}`);
