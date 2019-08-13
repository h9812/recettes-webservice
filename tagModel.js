// tagModel.js
var mongoose = require('mongoose');

// Setup schema
var tagSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	}

});
// Export Tag model
var Tag = module.exports = mongoose.model('tag', tagSchema);

module.exports.get = function (callback, limit) {
	Tag.find(callback).limit(limit);
}