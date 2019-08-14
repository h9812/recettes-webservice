// ingredientController.js
// Import ingredient model
Ingredient = require('./ingredientModel');
// Handle index actions
exports.index = function (req, res) {
    Ingredient.get(function (err, ingredients) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Ingredients retrieved successfully",
            data: ingredients
        });
    });
};
// Handle create ingredient actions
exports.new = function (req, res) {
    var ingredient = new Ingredient(req.body);
	// save the ingredient and check for errors
    ingredient.save(function (err) {
        // if (err)
        //     res.json(err);
	res.json({
            message: 'New ingredient created!',
            data: ingredient
        });
    });
};
// Handle view ingredient info
exports.view = function (req, res) {
    Ingredient.findById(req.params.ingredient_id, function (err, ingredient) {
        if (err)
            res.send(err);
        res.json({
            message: 'Ingredient details loading..',
            data: ingredient
        });
    });
};
// Handle update ingredient info
exports.update = function (req, res) {
    Ingredient.findById(req.params.ingredient_id, function (err, ingredient) {
        if (err)
            res.send(err);
        ingredient.name = req.body.name ? req.body.name : ingredient.name;
        
        // save the ingredient and check for errors
        ingredient.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Ingredient Info updated',
                data: ingredient
            });
        });
    });
};
// Handle delete ingredient
exports.delete = function (req, res) {
    Ingredient.remove({
        _id: req.params.ingredient_id
    }, function (err, ingredient) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Ingredient deleted'
        });
    });
};