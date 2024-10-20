const getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};
const postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

 let getProducts = (req, res, next) => {
    res.render("admin/products", { pageTitle: "Products", path: "/products" });
};

const adminController = {
    getAddProduct,
    postAddProduct,
    getProducts
};
module.exports = adminController;