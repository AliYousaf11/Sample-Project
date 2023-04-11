const mongoose = require("mongoose");

const productModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Required"],
  },
  price: {
    type: Number,
    required: [true, "Required"],
  },
  quantity: {
    type: Number,
    required: [true, "Required"],
  },
  image: {
    type: String,
    required: [true, "Required"],
  },
});
const productsModel = mongoose.model("productsModel", productModel);
module.exports = productsModel;
