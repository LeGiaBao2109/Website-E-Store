const router = require('express').Router();
const homeRoutes = require("./home.route");
const productRoutes = require("./product.route");
const promotionRoutes = require("./promotion.route");
const authRoutes = require("./auth.route");
const newsRoutes = require("./news.route");
const cartRoutes = require("./cart.route");

router.use('/', homeRoutes);
router.use('/products', productRoutes);
router.use('/promotions', promotionRoutes);
router.use('/auth', authRoutes);
router.use('/news', newsRoutes);
router.use('/cart', cartRoutes);

module.exports = router;