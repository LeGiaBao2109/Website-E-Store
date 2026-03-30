const router = require('express').Router();

const userController = require("../../controllers/client/user.controller");

router.get("/", userController.overview);

module.exports = router;