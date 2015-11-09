var utils = require('./utils');

// Writes the search results page.
var handleReq = function(req, res) {
    var html = "";
    html += utils.getHeader(req);
    html += utils.getSidebar(req);
    html += getSearchResults(req);
    html += utils.getFooter(req);
    res.send(html);
};

// TODO: Add content for home page based on cookies.
function getSearchResults(request) {
    return "Search Results.";
}

module.exports = {
    handleReq : handleReq
};
