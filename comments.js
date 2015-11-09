var utils = require('./utils');
var newPost = require('./newPost')

// Writes the text editor to make a new post.
var handleReq = function(req, res) {
    // Instruct newPost.handleReq to display a comment by modifying req object.
    newPost.handleReq(req, res);
};

var handleNewComment = function(req, res) {
    // Add comment to DB.
    // Then, go to the post page and highlight that comment.
    newPost.handleReq(req, res);
}

module.exports = {
    handleReq : handleReq,
    handleNewComment : handleNewComment
};
