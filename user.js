var utils = require('./utils');

// Display a user's profile page.
var handleReq = function(req, res) {
    var html = "";
    html += utils.getHeader(req);
    html += utils.getSidebar(req);
    html += getUserInfo(req);
    html += utils.getFooter(req);
    res.send(html);
};

var handleUserChanges = function(req, res) {
    // Make changes to DB.
    // Then redirect to user's page. UID is in req.
    handleReq(req, res);
}

// TODO: Add content for home page based on cookies.
function getUserInfo(request) {
    return "Search Results.";
}

module.exports = {
    handleReq : handleReq,
    handleUserChanges : handleUserChanges
};
