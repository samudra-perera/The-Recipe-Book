const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, //Add a link to a hosted picture on a seperate server, might need to 
    required: false,
  },
  ingredients: {
    type: String,
    required: true
  },
  instructions: {
    type: String, 
    required: true
  },
  time: {
    type: String,
    required: false
  },
  cals: {
    type: String,
    required: false
  },
  isPublic: {
    type: Boolean, 
    default: false,
    required: true
  },
  userId: {
    type: String, 
    required: true
  },
  likesCount: {
    type: Number,
    default: 0
  },
  likedBy: {
    type: [String],
    default: []  
  }
})

module.exports = mongoose.model('recipe', RecipeSchema)
 