// src/actions/recipeId.js
export const RECIPE_ID = 'RECIPE_ID'

export const dispatchRecipeId = (id) => ({
    type: RECIPE_ID,
    payload: id
})