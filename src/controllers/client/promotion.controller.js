const path = require('path');

module.exports.list = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/promotion-list.html"));
};

module.exports.detail = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/promotion-detail.html"));
};

module.exports.product = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/promotion-product-list.html"));
};