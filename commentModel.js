// commentModel.js
var mongoose = require('mongoose');
// Setup schema
var commentSchema = mongoose.Schema({
    content: String,
    ownerId: String,
    recipeId: String,
    modifiedDate: {
        type: Date,
        default: Date.now
    }
});
// Export Comment model
var Comment = module.exports = mongoose.model('comment', commentSchema);

module.exports.get = function (callback, limit) {
	Comment.find(callback).limit(limit);
}