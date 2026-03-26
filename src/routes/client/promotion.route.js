const router = require('express').Router();

const promotionController = require("../../controllers/client/promotion.controller");

router.get("/", promotionController.list);

router.get("/detail", promotionController.detail);

module.exports = router;