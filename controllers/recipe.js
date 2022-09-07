//Copy of the todos.js contoller file -- need to update with our information
const Recipe = require('../models/recipe')

module.exports = {
  getRecipe: async (req, res) => {
    try {
      const privateRecipes = await Recipe.find({ userId: req.user.id })
      const userLikedRecipes = await Recipe.find({likedBy: req.user.id})
      res.render('mainDashBoard.ejs', { recipes: privateRecipes, likedRecipes: userLikedRecipes, user: req.user })
    } catch (err) {
      console.log(err)
    }
  },

  getPublicRecipe: async (req, res) => { //get request to get all recipes with the public field == true and display in the public recipe field
    try {
      const publicRecipes = await Recipe.find({ isPublic: true })
      res.render('findRecipes.ejs', { recipes: publicRecipes }) // Add view for public recipes seperately
    } catch (err) {
      console.log(err)
    }
  },

  getCreateRecipe: async (req, res) => {
    try {
      res.render('createRecipe.ejs')
    } catch (err) {
      console.log(err)
    }
  },

  createRecipe: async (req, res) => {
    try {
      await Recipe.create({ title: req.body.recipeTitle,
                            image: req.body.recipeImage,
                            ingredients: req.body.recipreIng,
                            time: req.body.recipeTime,
                            cals: req.body.recipeCals,
                            instructions: req.body.recipeInstr,
                            isPublic: req.body.isPublic,
                            userId: req.user.id  
                          }) // Add function to return img url
      console.log('Recipe has been added!')
      res.redirect('/recipe')
    } catch (err) {
      console.log(err)
    }
  },

  deleteRecipe: async (req, res) => {
    // console.log(req.body.recipeIdFromJSFile)
    try {
      await Recipe.findOneAndDelete({ _id: req.body.recipeIdFromJSFile }) //Look to see if this needs to be changed
      console.log('Deleted Recipe')
      res.json('Deleted It')
    } catch (err) {
      console.log(err)
    }
  },

  updateRecipe: async (req, res) => {
    try {
      // console.log(req.params.id,req.body)
      const editRecipe = await Recipe.findOneAndUpdate({_id: req.params.id}, 
        { title: req.body.recipeTitle,
          image: req.body.recipeImage,
          ingredients: req.body.recipreIng,
          time: req.body.recipeTime,
          cals: req.body.recipeCals,
          instructions: req.body.recipeInstr,
          isPublic: req.body.isPublic,
          userId: req.user.id
        },
        { new: true,
          runValidators: true
      })
      res.redirect('/recipe')
    } catch (err) {
      console.log(err)
    }
  },

  getUpdateRecipe: async (req, res) => { // We only want to edit that specific recipe, so we need to grab the objectID from the document of interest then render the editRecipe ejs file with that documents information
    try {
      // console.log(req.params.id)
      const editRecipe = await Recipe.findOne({ _id: req.params.id }).lean()
      // console.log(editRecipe)
      res.render('editRecipe.ejs', { recipe: editRecipe })
    } catch (err) {
      console.log(err)
    }
  },

  getDashBoard: async (req, res) => {
    try {
      //const privateRecipes = await Recipe.find({ userId: req.user.id }) // This is going to stay the same
      res.render('mainDashBoard.ejs')
    } catch (err) {
      console.log(err)
    }
  },

  getWholeRecipe: async(req, res) => {
    try {
      console.log(req.param.id)
      const getRecipeCard = await Recipe.findOne({ _id: req.params.id }).lean()
      res.render('wholeRecipeView.ejs', {recipe: getRecipeCard, user:req.user})
    } catch (err) {
      console.log(err)
    }
  },

  addLike: async(req,res) => {
    try {
      await Recipe.findOneAndUpdate({_id: req.params.id},{
        $push: {likedBy: req.user.id},
        $inc: {likesCount: 1}
      },
      { new: true,
        runValidators: true
      })
      res.redirect('back')
    } catch (err) {
      console.log(err)
    }
  },

  removeLike: async(req,res) => {
    try {
      await Recipe.findOneAndUpdate({_id: req.params.id},{
        $pull: {likedBy: req.user.id},
        $inc: {likesCount: -1}
      },
      { new: true,
        runValidators: true
      })
      // res.redirect(req.originalUrl)
      console.log(req.body)
      res.redirect('back')
    } catch (err) {
      console.log(err)
    }
  },
  
  preSearchRecipe: async(req,res) => {
    try {
      if(!req.body.searchRecipe) {
        res.redirect(`/recipe/searchRecipe/ `)
      } else {
        res.redirect(`/recipe/searchRecipe/${req.body.searchRecipe}`)
      }
    } catch(err) {
      console.log(err)
    }
  },
  searchRecipe: async(req,res) => {
    try {
      // console.log(req.body.searchRecipe)
      // const searchRecipes = await Recipe.find({title: req.body.searchRecipe, isPublic: true})
      const searchRecipes = await Recipe.find({ $or: [{title: {
          // $regex: new RegExp(req.body.searchRecipe),
          $regex: new RegExp(req.params.searchText),
          $options: 'i'
        }},{ingredients: {
          // $regex: new RegExp(req.body.searchRecipe),
          $regex: new RegExp(req.params.searchText),
          $options: 'i'
        }},{image: {
          // $regex: new RegExp(req.body.searchRecipe),
          $regex: new RegExp(req.params.searchText),
          $options: 'i'
        }}],
        isPublic: true})
      // console.log(searchRecipes)
      res.render('searchResults.ejs',{recipes: searchRecipes, user: req.user})
    } catch(err) {
      console.log(err)
    }
  }
}