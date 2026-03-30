const path = require('path');

module.exports.list = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/product-list.html"));
};

module.exports.detail = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/product-detail.html"));
};