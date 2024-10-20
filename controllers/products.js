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

const getCart = (req, res, next) => {
  res.render("shop/cart", { pageTitle: "Cart", path: "/cart" });
};

const getIndex = (req,res,next) => {
  res.render("shop/index", { pageTitle: "Index", path: "/" });
};

const getCheckout = (req,res,next) => {
  res.render("shop/checkout", { pageTitle: "checkout", path: "/checkout" });
};



const productController = {
  getProducts,
  getIndex,
  getCheckout,
  getCart
};

module.exports = productController;