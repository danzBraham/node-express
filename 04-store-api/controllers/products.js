import Product from "../models/product.js";

export const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort("-name price");
  res.status(200).json({ products, nbHits: products.length });
};

export const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const query = {};
  if (featured) {
    query.featured = featured;
  }
  if (company) {
    query.company = company;
  }
  if (name) {
    query.name = { $regex: name, $options: "i" };
  }
  let result = Product.find(query);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};
