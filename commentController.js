// commentController.js
// Import comment model
Comment = require('./commentModel');
// Handle index actions
exports.index = function (req, res) {
    Comment.get(function (err, comments) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Comments retrieved successfully",
            data: comments
        });
    });
};
// Handle create comment actions
exports.new = function (req, res) {
    var comment = new Comment(req.body);
	// save the comment and check for errors
    comment.save(function (err) {
        // if (err)
        //     res.json(err);
	res.json({
            message: 'New comment created!',
            data: comment
        });
    });
};
// Handle view comment info
exports.view = function (req, res) {
    Comment.findById(req.params.comment_id, function (err, comment) {
        if (err)
            res.send(err);
        res.json({
            message: 'Comment details loading..',
            data: comment
        });
    });
};
// Handle update comment info
exports.update = function (req, res) {
    Comment.findById(req.params.comment_id, function (err, comment) {
        if (err)
            res.send(err);
        if(req.body.content) {
            if(comment.content != req.body.content) {
                comment.content = req.body.content;
                comment.modifiedDate = Date.now();
            }
        }
        // save the comment and check for errors
        comment.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Comment Info updated',
                data: comment
            });
        });
    });
};
// Handle delete comment
exports.delete = function (req, res) {
    Comment.remove({
        _id: req.params.comment_id
    }, function (err, comment) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Comment deleted'
        });
    });
};