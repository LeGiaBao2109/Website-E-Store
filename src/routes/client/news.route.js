const router = require("express").Router();

const newsController = require("../../controllers/client/news.controller");

router.get('/', newsController.list)

module.exports = router;