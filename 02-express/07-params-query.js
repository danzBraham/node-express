const express = require('express');
const app = express();
const port = 3000;
const { products } = require('./data.js');

app.get('/', (req, res) => {
  res.status(200).send(`<h1>Home Page</h1>`);
});

app.get('/api/v1/products', (req, res) => {
  const { search, limit } = req.query;
  let filteredProducts = [...products];

  filteredProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  if (search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.includes(search);
    });
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, parseInt(limit));
  }

  const response =
    filteredProducts.length > 0
      ? { success: true, data: filteredProducts }
      : { success: true, data: ['The product does not exist'] };

  res.status(200).json(response);
});

app.get('/api/v1/products/:productId', (req, res) => {
  const { productId } = req.params;
  const productById = products.find(
    (product) => product.id === parseInt(productId)
  );
  if (!productById) {
    res.status(404).send('<h1>Product Does Not Exist</h1>');
  } else {
    res.json(productById);
  }
});

app.all('*', (req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
