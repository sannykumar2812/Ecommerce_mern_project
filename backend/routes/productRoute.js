const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,  
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productController");
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route("/products").get(getAllProducts);

router.route("/admin/products").get( getAdminProducts);

router.route("/admin/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct);

router.route("/product/:id").delete( deleteProduct);

router.route("/product/:id").get(getProductDetails);

// router.route("/review").put(isAuthenticatedUser, createProductReview);

// router
//   .route("/reviews")
//   .get(getProductReviews)
//   .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
