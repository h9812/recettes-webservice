// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Welcome to Recettes crafted with love!'
    });
});

// Import recipe controller
var recipeController = require('./recipeController');

// Recipe routes
router.route('/recipes')
    .get(recipeController.index)
    .post(recipeController.new);
	
router.route('/recipes/:recipe_id')
    .get(recipeController.view)
    .patch(recipeController.update)
    .put(recipeController.update)
    .delete(recipeController.delete);
	
// Import tag controller
var tagController = require('./tagController');
	
// Tag routes
router.route('/tags')
    .get(tagController.index)
    .post(tagController.new);
	
router.route('/tags/:tag_id')
    .get(tagController.view)
    .patch(tagController.update)
    .put(tagController.update)
    .delete(tagController.delete);
	
// Import ingredient controller
var ingredientController = require('./ingredientController');
	
// Ingredient routes
router.route('/ingredients')
    .get(ingredientController.index)
    .post(ingredientController.new);
	
router.route('/ingredients/:ingredient_id')
    .get(ingredientController.view)
    .patch(ingredientController.update)
    .put(ingredientController.update)
    .delete(ingredientController.delete);

// Export API routes
module.exports = router;