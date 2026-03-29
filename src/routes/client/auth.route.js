const router = require("express").Router();

const authController = require("../../controllers/client/auth.controller");

router.get('/login', authController.login)

module.exports = router;