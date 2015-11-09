var utils = require('./utils');

// Writes the home page.
var handleReq = function(req, res) {
    var html = "";
    html += utils.getHeader(req);
    html += utils.getSidebar(req);
    html += getHomepageContent(req);
    html += utils.getFooter(req);
    res.send(html);
};

// TODO: Add content for home page based on cookies.
function getHomepageContent(request) {
    return "This is the home page.";
}

module.exports = {
    handleReq : handleReq
};
