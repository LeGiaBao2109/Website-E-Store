const path = require('path');

module.exports.login = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/login.html"));
};

module.exports.register = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/register.html"));
};