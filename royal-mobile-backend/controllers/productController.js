const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const product = new Product({
    ...req.body,
    image: req.file ? req.file.filename : null
  });

  await product.save();

  res.json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

exports.updateProduct = async (req, res) => {
  try {

    const updateData = {
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
      description: req.body.description
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(product);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
