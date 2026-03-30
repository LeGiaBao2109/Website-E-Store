const router = require('express').Router();

const userController = require("../../controllers/client/user.controller");

router.get("/", userController.overview);

router.get("/info", userController.info);

module.exports = router;