const router = require("express").Router();

const cartController = require("../../controllers/client/cart.controller");

router.get('/', cartController.cart)

router.get('/payment-info', cartController.info)

router.get('/payment', cartController.payment)

module.exports = router;