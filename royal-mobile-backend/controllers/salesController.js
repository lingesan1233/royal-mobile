const Sale = require("../models/Sale");
const Product = require("../models/Product");

exports.createSale = async (req, res) => {
  try {

    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.stock < quantity) {
      return res.status(400).json({
        message: "Not enough stock available"
      });
    }

    const total = product.price * quantity;

    product.stock -= quantity;

    await product.save();

    const sale = new Sale({
      productId,
      quantity,
      total
    });

    await sale.save();

    const populatedSale = await sale.populate("productId", "name price");

    res.json({
      message: "Sale recorded",
      sale: populatedSale
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


/* GET SALES HISTORY */

exports.getSales = async (req, res) => {
  try {

    const sales = await Sale.find()
      .populate("productId", "name price")
      .sort({ date: -1 });

    res.json(sales);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
