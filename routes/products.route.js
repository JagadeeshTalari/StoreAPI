const express = require("express");
const router = express.Router();

//controllers
const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products.controller");

router.route("/").get(getAllProducts);
router.route("/test").get(getAllProductsStatic);

module.exports = router;
