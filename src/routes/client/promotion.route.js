const router = require('express').Router();

const promotionController = require("../../controllers/client/promotion.controller");

router.get("/", promotionController.list);

router.get("/detail", promotionController.detail);

router.get("/product-list", promotionController.product);

module.exports = router;