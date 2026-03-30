const path = require('path');

module.exports.overview = (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/client/user-profile-overview.html"));
};