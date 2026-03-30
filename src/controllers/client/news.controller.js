const path = require('path');

module.exports.list = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/news.html"));
};

module.exports.detail = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/news-detail.html"));
};