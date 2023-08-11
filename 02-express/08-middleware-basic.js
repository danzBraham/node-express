const express = require('express');
const app = express();
const port = 3000;

// request => middleware => response

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date();
  console.log({ method, url, date });
  next();
};

app.get('/', logger, (req, res) => {
  res.status(200).send('<h1>Hello World</h1>');
});

app.get('/about', logger, (req, res) => {
  res.status(200).send(`<h1>About Page</h1>`);
});

app.all('*', logger, (req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
