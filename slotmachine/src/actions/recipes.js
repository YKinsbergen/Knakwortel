// src/actions/recipes.js
import request from 'superagent'

export const RECIPES_FETCHED = 'RECIPES_FETCHED'
export const RECIPE_FETCHED = 'RECIPE_FETCHED'

const baseUrl = 'http://localhost:4000'

const recipesFetched = recipes => ({
    type: RECIPES_FETCHED,
    recipes
})

const recipeFetched = recipe => ({
  type: RECIPE_FETCHED,
  recipe
})

export const loadRecipes = () => (dispatch) => {
  request(`${baseUrl}/recipes`)
    .then(response => {
      dispatch(recipesFetched(response.body))
    })
    .catch(console.error)
}

export const loadRecipe = (id) => (dispatch) => {
  request(`${baseUrl}/recipes/${id}`)
  .then(response => {
    dispatch(recipeFetched(response.body))
  })
  .catch(console.error)
}