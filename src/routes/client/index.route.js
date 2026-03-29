const router = require('express').Router();
const homeRoutes = require("./home.route");
const productRoutes = require("./product.route");
const promotionRoutes = require("./promotion.route");
const authRoutes = require("./auth.route");
const newsRoutes = require("./news.route");

router.use('/', homeRoutes);
router.use('/products', productRoutes);
router.use('/promotions', promotionRoutes);
router.use('/auth', authRoutes);
router.use('/news', newsRoutes);

module.exports = router;