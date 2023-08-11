const express = require('express');
const app = express();
const port = 3000;
const logger = require('./logger.js');
const authorize = require('./authorize.js');

// request => middleware => response

// logger will active in all path
// app.use(logger);

// logger will active if the path starts with /api
// app.use('/api', logger);

// How to use multiple middleware
app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.status(200).send(`<h1>Home Page</h1>`);
});

app.get('/about', (req, res) => {
  res.status(200).send(`<h1>About Page</h1>`);
});

app.get('/contact', (req, res) => {
  console.log(req.user);
  res.status(200).send(`<h1>Contact Page</h1>`);
});

app.get('/api/products', (req, res) => {
  res.status(200).send(`<h1>Products</h1>`);
});

app.get('/api/items', (req, res) => {
  res.status(200).send(`<h1>Items</h1>`);
});

app.all('*', (req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
