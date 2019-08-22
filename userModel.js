// userModel.js
var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
    userId: {
		type: String,
		required: true
    },
	name: String,
    avatar: String
});
// Export User model
var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
	User.find(callback).limit(limit);
}