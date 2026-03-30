const router = require('express').Router();
const path = require('path');
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

router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../../views/error-404.html'));
});

module.exports = router;