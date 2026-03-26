const router = require('express').Router();
const homeRoutes = require("./home.route");
const productRoutes = require("./product.route");
const promotionRoutes = require("./promotion.route");

router.use('/', homeRoutes);
router.use('/products', productRoutes);
router.use('/promotions', promotionRoutes);

module.exports = router;