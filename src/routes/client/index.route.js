const router = require('express').Router();
const homeRoutes = require("./home.route");
const productRoutes = require("./product.route");
const promotionRoutes = require("./promotion.route");
const authRoutes = require("./auth.route");

router.use('/', homeRoutes);
router.use('/products', productRoutes);
router.use('/promotions', promotionRoutes);
router.use('/auth', authRoutes);

module.exports = router;