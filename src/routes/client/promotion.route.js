const router = require('express').Router();

const promotionController = require("../../controllers/client/promotion.controller");

router.get("/", promotionController.list);

module.exports = router;