const path = require('path');

module.exports.home = (req, res) => {
    const fileChuan = path.resolve(__dirname, '../../views/index.html');
    res.sendFile(fileChuan);
};