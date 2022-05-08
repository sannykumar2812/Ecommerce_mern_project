const express = require("express");
const router = express.Router()

const { getAllProducts } = require("../controllers/productController");

router.route('/products').get(getAllProducts)
// router.get('/products',()=>{
//     getAllProducts()
// })


module.exports = router;
