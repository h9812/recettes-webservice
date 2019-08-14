// searchController.js
// Import recipe model
Recipe = require('./recipeModel');
// Import recipe model
Ingredient = require('./ingredientModel');
// Import comment model
Comment = require('./commentModel');
// Import tag model
Tag = require('./tagModel');

// Handle search
exports.getIngredientsByRecipeId = function (req, res) {
    Recipe.findById(req.params.recipe_id, async function (err, recipe) {
        if (err)
            res.send(err);
        
        ingredientIds = recipe["ingredientIds"];
        ingredientArr = [];
    
        for(var ingredientId of ingredientIds) {
            ingredient = await Ingredient.findById(ingredientId);
            ingredientArr.push(ingredient);
        }
        
        res.json({
            status: "success",
            message: "Searched for ingredients by recipe's id successfully",
            data: ingredientArr
        });
    });
};

exports.getTagsByRecipeId = function (req, res) {
    Recipe.findById(req.params.recipe_id, async function (err, recipe) {
        if (err)
            res.send(err);
        
        tagIds = recipe["tagIds"];
        tagArr = [];
    
        for(var tagId of tagIds) {
            tag = await Tag.findById(tagId);
            tagArr.push(tag);
        }
        
        res.json({
            status: "success",
            message: "Searched for ingredients by recipe's id successfully",
            data: tagArr
        });
    });
};

exports.getCommentsByRecipeId = function (req, res) {
    Comment.find({ recipeId: req.params.recipe_id }, function (err, comments) {
        if (err)
            res.send(err);
        
        res.json({
            status: "success",
            message: "Searched for comments by recipe's id successfully",
            data: comments
        });
    });
};

exports.getRecipes = async function (req, res) {
    result = [];
    recipes = await Recipe.find({});
    if(req.body["tagsId"]) {
        tagIds = req.body["tagIds"];
        for(tagId of tagIds) {
            for(recipe of recipes) {
                if(recipe["tagIds"].includes(tagId)) {
                    result.push(recipe);
                }
            }
        }
    }
    if(req.body["ingredientIds"]) {
        ingredientIds = req.body["ingredientIds"];
        for(ingredientId of ingredientIds) {
            for(recipe of recipes) {
                if(recipe["ingredientIds"].includes(ingredientId)) {
                    result.push(recipe);
                }
            }
        }
    }

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }

    unique = result.filter(onlyUnique);
    res.json({
        status: "success",
        message: "Search for recipes by [ingredientIds] and [tagIds] successfully!",
        data: unique
    });
    
};
