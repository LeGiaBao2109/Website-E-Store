const path = require('path');

module.exports.list = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/promotion-list.html"));
};

module.exports.detail = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/promotion-detail.html"));
};