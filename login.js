var utils = require('./utils');
var user = require('./user');

// Presents the login form.
var handleReq = function(req, res) {
    var html = "";
    html += utils.getHeader(req);
    html += utils.getSidebar(req);
    html += getLoginForm();
    html += utils.getFooter(req);
    res.send(html);
};

// Authenticates a user.
var handleLogin = function(req, res) {
    // Check if user supplied credentials match.
    var html = "";
    if (userOK(req)) {
        // Set UID in req.
        user.handleReq(req, res);
    } else {
        html += getHeader(req);
        html += getSidebar(req);
        html += getIncorrectLogin(req);
        html += getFooter(req);
    }
}

function userOK(req) {
    return false;
}

// TODO: Add content for home page based on cookies.
function getIncorrectLogin(request) {
    return "Incorrect Username / Password.";
}

function getLoginForm() {
    return "Login here.";
}

module.exports = {
    handleReq : handleReq,
    handleLogin : handleLogin
};
