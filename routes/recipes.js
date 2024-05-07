const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Handle POST request to save recipe data
router.post('/save-recipes', async (req, res) => {
  try {
    // Extract JSON data from request body
    const { recipes } = req.body;

    // Loop through recipes array and save each recipe to the database
    for (const recipeData of recipes) {
      const recipe = new Recipe(recipeData);
      await recipe.save();
    }

    // Respond with success message
    res.json({ success: true, message: 'Recipes saved successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error saving recipes:', error);
    res.status(500).json({ success: false, error: 'Error saving recipes' });
  }
});

module.exports = router;
