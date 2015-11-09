var utils = require('./utils');
var comments = require ('./comments')

// Writes the text editor to make a new post.
var handleReq = function(req, res) {
    var html = "";
    html += utils.getHeader(req);
    html += utils.getSidebar(req);
    if (postExists(req.postID)) html += getPostHTML(req.postID);
    else html += getNewPostHTML(req);

    if ((req.isCommentHighlighted !== undefined) && (req.isCommentHighlighted)) html += "Comment highlighted.";
    html += utils.getFooter(req);
    res.send(html);
};

var handleNewPost = function(req, res) {
    // Add post to DB.
    // Then, go to the post page.
    handleReq(req, res);
}

// TODO: Get post's data from database.
function getPostHTML(postID) {
    return "Existing post text.";
}

// TODO: Add text editor.
function getNewPostHTML(request) {
    return "New Post here";
}

module.exports = {
    handleReq : handleReq,
    handleNewPost : handleNewPost
};
