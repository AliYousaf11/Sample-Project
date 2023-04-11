const productsModel = require("../models/productModel");

const AddProduct = async (req, res) => {
  const { name, price, quantity, image } = req.body;
  console.log(name, price, quantity);
  try {
    const productexit = await productsModel.findOne({ name: name });
    if (!productexit) {
      const AddProduct = new productsModel({
        name,
        price,
        quantity,
        image: image,
      });
      await AddProduct.save();
      res.status(200).json({
        success: true,
        messgae: "Product Added Successfully.....",
      });
    } else {
      res.status(200).json({
        success: true,
        messgae: "Product alredy exit.....",
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      messgae: "Product Added un-Successfully.....",
    });
  }
};

const GetAllProducts = async (req, res) => {
  console.log("hello backend");
  try {
    const allProducts = await productsModel.find({});
    res.status(200).json({
      success: true,
      payload: allProducts,
      messgae: "Successfully get products.....",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      messgae: "Can't get products.....",
    });
  }
};
module.exports = {
  AddProduct,
  GetAllProducts,
};
