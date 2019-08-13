// tagController.js
// Import tag model
Tag = require('./tagModel');
// Handle index actions
exports.index = function (req, res) {
    Tag.get(function (err, tags) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tags retrieved successfully",
            data: tags
        });
    });
};
// Handle create tag actions
exports.new = function (req, res) {
    var tag = new Tag(req.body);
	// save the tag and check for errors
    tag.save(function (err) {
        // if (err)
        //     res.json(err);
	res.json({
            message: 'New tag created!',
            data: tag
        });
    });
};
// Handle view tag info
exports.view = function (req, res) {
    Tag.findById(req.params.tag_id, function (err, tag) {
        if (err)
            res.send(err);
        res.json({
            message: 'Tag details loading..',
            data: tag
        });
    });
};
// Handle update tag info
exports.update = function (req, res) {Tag.findById(req.params.tag_id, function (err, tag) {
        if (err)
            res.send(err);tag.name = req.body.name ? req.body.name : tag.name;
        tag.gender = req.body.gender;
        tag.email = req.body.email;
        tag.phone = req.body.phone;// save the tag and check for errors
        tag.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Tag Info updated',
                data: tag
            });
        });
    });
};
// Handle delete tag
exports.delete = function (req, res) {
    Tag.remove({
        _id: req.params.tag_id
    }, function (err, tag) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Tag deleted'
        });
    });
};