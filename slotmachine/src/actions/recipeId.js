// src/actions/recipeId.js
export const GET_RECIPE_ID = 'GET_RECIPE_ID'

export const dispatchRecipeId = (id) => ({
    type: GET_RECIPE_ID,
    payload: id
})