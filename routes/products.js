const express = require("express");
const router = express.Router();
const {  createProduct}= require('../controllers/products')

router.route("/products").post(createProduct);
module.exports = router