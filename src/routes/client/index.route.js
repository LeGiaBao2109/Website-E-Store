const router = require('express').Router();
const homeRoutes = require("./home.route");
const productRoutes = require("./product.route");

router.use('/', homeRoutes);
router.use('/products', productRoutes);

module.exports = router;