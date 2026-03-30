const path = require('path');

module.exports.overview = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/user-profile-overview.html"));
};

module.exports.info = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/user-profile-info.html"));
};

module.exports.orderHistory = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/user-profile-order-history.html"));
};