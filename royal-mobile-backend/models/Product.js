const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: {
    type: String,
    enum: ["Mobile","Mobile Charger","Mobile Cases","Service Mobile"]
  },
  stock: Number,
  image: String
},{timestamps:true});

module.exports = mongoose.model("Product", productSchema);