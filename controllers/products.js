const productModel = require('../models/product');

const getProducts = (req, res, next) => {
  productModel.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

const cart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Cart", path: "/cart" })
}

const productController = {
  getProducts,
  cart
};

module.exports = productController;