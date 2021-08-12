const express = require('express');
const router = express.Router();

const { getProducts, newProduct, getProductById, updateProductById, deleteProduct } = require('../controllers/productController');

// GETs
router.route('/products').get(getProducts);
router.route('/product/:id').get(getProductById);

// POSTs
router.route('/admin/product/new').post(newProduct);

// PUTs & DELETEs
router.route('/admin/product/:id')
  .put(updateProductById)
  .delete(deleteProduct);

module.exports = router;
