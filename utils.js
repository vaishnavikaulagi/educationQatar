var getHeader = function(request) {
    return "Header";
}

var getSidebar = function(request) {
    return "Sidebar";
}

var getFooter = function(request) {
    return "Footer";
}

module.exports = {
    getHeader : getHeader,
    getSidebar : getSidebar,
    getFooter : getFooter
};
