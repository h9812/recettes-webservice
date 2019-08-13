// ingredientModel.js
var mongoose = require('mongoose');

// Setup schema
var ingredientSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	}

});
// Export Ingredient model
var Ingredient = module.exports = mongoose.model('ingredient', ingredientSchema);

module.exports.get = function (callback, limit) {
	Ingredient.find(callback).limit(limit);
}