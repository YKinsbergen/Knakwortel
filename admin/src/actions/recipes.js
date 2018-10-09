import request from 'superagent'
import {apiUrl} from '../constants'
import {isExpired} from '../jwt'
import {logout} from './admins'

export const RECIPES_FETCHED = 'RECIPES_FETCHED'
export const TOPPINGS_FETCHED = 'TOPPINGS_FETCHED'
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS'
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS'

function recipesFetched(recipes) {
  return {
    type: RECIPES_FETCHED,
    payload: recipes
  }
}

function toppingsFetched(toppings) {
  return {
    type: TOPPINGS_FETCHED,
    payload: toppings
  }
}

function addRecipeSuccess(recipe) {
  return {
    type: ADD_RECIPE_SUCCESS,
    payload: recipe
  }
}

function deleteRecipeSuccess(id) {
  return {
    type: DELETE_RECIPE_SUCCESS,
    payload: id
  }
}



export const loadRecipes = () => (dispatch) => {
  request(`${apiUrl}/recipes`)
    .then(response => {
      dispatch(recipesFetched(response.body))
    })
}

export const loadToppings = () => (dispatch) => {
  request(`${apiUrl}/toppings`)
    .then(response => {
      dispatch(toppingsFetched(response.body))
    })
}

export const addRecipe = (name, description, toppingIdArr) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${apiUrl}/recipes/`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({name, description, toppings:toppingIdArr})
    .then(response => dispatch(addRecipeSuccess(response.body)))
    .catch(console.error)

}

export const deleteRecipe = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

  request
    .delete(`${apiUrl}/recipes/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch(deleteRecipeSuccess(response.body)))
    .catch(console.error)

}