export const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "Products testing route" });
};

export const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "Products route" });
};
