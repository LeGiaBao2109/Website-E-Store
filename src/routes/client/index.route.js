const homeController = require("../../controllers/client/home.controller");
const productController = require("../../controllers/client/product.controller");
const path = require('path');

module.exports = (app) => {
    app.get('/', homeController.home);
};