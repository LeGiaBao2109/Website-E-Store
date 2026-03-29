const path = require('path');

module.exports.list = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/news.html"));
};