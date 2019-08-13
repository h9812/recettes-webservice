// recipeModel.js
var mongoose = require('mongoose');
// Setup schema
var recipeSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: String,
	ingredientIds: [String],
	ingredientAmounts: [String],
	directions: [String],
	numberOfLikes: Number,
	ownerId: String,
	tagIds: [String]

});
// Export Recipe model
var Recipe = module.exports = mongoose.model('recipe', recipeSchema);

module.exports.get = function (callback, limit) {
	Recipe.find(callback).limit(limit);
}