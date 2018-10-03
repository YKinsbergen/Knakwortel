// src/actions/recipes.js
import request from 'superagent'

export const RECIPES_FETCHED = 'RECIPES_FETCHED'

const baseUrl = 'http://localhost:4000'

const recipesFetched = recipes => ({
    type: RECIPES_FETCHED,
    recipes
})

export const loadRecipes = () => (dispatch) => {
  request(`${baseUrl}/recipes`)
    .then(response => {
      dispatch(recipesFetched(response.body))
    })
    .catch(console.error)
}