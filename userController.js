// userController.js
// Import user model
User = require('./userModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};
// Handle create user actions
exports.new = async function (req, res) {
    // var user = new User(req.body);
	// // save the user and check for errors
    // user.save(function (err) {
    //     // if (err)
    //     //     res.json(err);
	// res.json({
    //         message: 'New user created!',
    //         data: user
    //     });
    // });
    result = await User.find({userId: req.body["userId"]});
    if(result.length == 0) {
        user = new User(req.body);
        user.save(function (err){
            if(err) {
                res.json(err);
            } else {
                res.json({
                    message: 'New user created!',
                    data: user
                });
            }
        });
    } else {
        res.json({
            message: 'User registered!'
        });
    }
};
// Handle view user info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};
// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        // TODO: update data

        // save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};
// Handle delete user
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};