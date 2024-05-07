// /models/Recipes.js

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipe_name: String,
  how_long_minutes: String,
  difficulty: String,
  servings: String,
  culture_or_local: String
});

const Recipe = mongoose.model('recipes', recipeSchema);

module.exports = Recipe;
