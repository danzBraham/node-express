const express = require("express");
const app = express();
const port = 3000;
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Home Page</h1>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const productByID = products.find(
    (product) => product.id === parseInt(productID)
  );
  if (!productByID) {
    return res.json(products);
  }
  return res.json(productByID);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let filteredProducts = [...products];
  if (search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    filteredProducts = filteredProducts.slice(0, parseInt(limit));
  }
  if (filteredProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(filteredProducts);
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
