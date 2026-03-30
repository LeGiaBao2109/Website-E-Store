const path = require('path');

module.exports.cart = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/cart.html"));
};

module.exports.info = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/payment-info.html"));
};

module.exports.payment = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/payment.html"));
};