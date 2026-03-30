const path = require('path');

module.exports.cart = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/cart.html"));
};

module.exports.info = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/payment-info.html"));
};

module.exports.payment = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/payment.html"));
};