//Duplicate of the todos.js
const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, recipeController.getRecipe) // After ensureAuth == true, get recipes from the DB
router.get('/createRecipe', recipeController.getCreateRecipe)
router.post('/createRecipe', recipeController.createRecipe) // Rename the routes

//Deleting Recipes
router.delete('/deleteRecipe', recipeController.deleteRecipe)

//Editing recipes
router.get('/editRecipe/:id', recipeController.getUpdateRecipe) //This is the route when user want to edit recipes --> will take them to editREcipe.ejs
router.put('/editRecipe/:id', recipeController.updateRecipe) //This may need to be edited

//Viewing individual recipe cards
router.get('/wholeRecipeView/:id', recipeController.getWholeRecipe) //This is the route that directs users to see the whole recipe (ie ingredients, instructions etc)

//Recipe Likes
router.put('/likeRecipe/:id', recipeController.addLike)
router.put('/unlikeRecipe/:id', recipeController.removeLike)

// Search Routes
router.get('/preSearchRecipe', recipeController.preSearchRecipe)
router.get('/searchRecipe/:searchText', recipeController.searchRecipe)
module.exports = router