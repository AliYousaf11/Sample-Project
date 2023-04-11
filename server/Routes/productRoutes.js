const express = require("express");
const router = express.Router();
const {
  AddProduct,
  GetAllProducts,
} = require("../controllers/productController");

// routes....
router.post("/product", AddProduct);
router.get("/getallproduct", GetAllProducts);

module.exports = router;
