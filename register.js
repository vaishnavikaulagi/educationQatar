var utils = require('./utils');
var user = require('./user');

// Presents a new user register form.
var handleReq = function(req, res) {
    var html = "";
    html += utils.getHeader(req);
    html += utils.getSidebar(req);
    html += getRegisterForm();
    html += utils.getFooter(req);
    res.send(html);
};

// Handle new user registration information.
var handleNewUser = function(req, res) {
    // Add user details to DB.

    // UID is in req.
    user.handleReq(req, res);
}

function userOK(req) {
    return false;
}

// TODO: Add content for home page based on cookies.
function getRegisterForm() {
    return "Register here.";
}

module.exports = {
    handleReq : handleReq,
    handleNewUser : handleNewUser
};
