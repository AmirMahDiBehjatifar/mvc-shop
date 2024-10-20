const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/cart', productsController.cart);

module.exports = router;
