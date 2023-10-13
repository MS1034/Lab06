const Product = require("../models/products")

const createProduct =async ()=>{
try {
const product = await Product.create(req.body);
res.status(201).json(product);
console.log(product)
} catch (err) {
res.status(500).json({ error: err.message});}
}
module.exports = {
  createProduct,
};