const router = require('express').Router();

const userController = require("../../controllers/client/user.controller");

router.get("/", userController.overview);

router.get("/info", userController.info);

router.get("/order-history", userController.orderHistory);

module.exports = router;