import request from 'superagent'
import {apiUrl} from '../constants'
import {isExpired} from '../jwt'
import {logout} from './admins'

export const RECIPES_FETCHED = 'RECIPES_FETCHED'

function recipesFetched(recipes) {
  return {
    type: RECIPES_FETCHED,
    payload: recipes
  }
}

export const loadRecipes = () => (dispatch) => {
  request(`${apiUrl}/recipes`)
    .then(response => {
      dispatch(recipesFetched(response.body))
    })
}