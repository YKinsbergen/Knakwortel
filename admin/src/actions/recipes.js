import request from 'superagent'
import {apiUrl} from '../constants'
import {isExpired} from '../jwt'
import {logout} from './admins'

export const RECIPES_FETCHED = 'RECIPES_FETCHED'
export const TOPPINGS_FETCHED = 'TOPPINGS_FETCHED'
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS'
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS'
export const TOPPING_TYPES_FETCHED = 'TOPPING_TYPES_FETCHED'
export const ADD_TOPPING_SUCCESS = 'ADD_TOPPING_SUCCESS'
export const DELETE_TOPPING_SUCCESS = 'DELETE_TOPPING_SUCCESS'

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

function deleteToppingSuccess(id) {
  return {
    type: DELETE_TOPPING_SUCCESS,
    payload: id
  }
}

function toppingTypesFetched(types) {
  return {
    type: TOPPING_TYPES_FETCHED,
    payload: types
  }
}

function addToppingSuccess(topping) {
  return {
    type: ADD_TOPPING_SUCCESS,
    payload: topping
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

export const loadToppingTypes = () => (dispatch) => {
  request(`${apiUrl}/toppingtypes`)
    .then(response => {
      dispatch(toppingTypesFetched(response.body))
    })
}

export const addRecipe = (name, description, toppingIdArr, uploadedFileCloudinaryUrl, youtubeUrl) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${apiUrl}/recipes/`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({name, description, toppings:toppingIdArr,uploadedFileCloudinaryUrl, youtubeUrl})
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

export const deleteTopping = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

  request
    .delete(`${apiUrl}/toppings/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch(deleteToppingSuccess(response.body)))
    .catch(console.error)

}

export const addTopping = (name, toppingType, uploadedFileCloudinaryUrl) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${apiUrl}/toppings/`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({name, toppingType, uploadedFileCloudinaryUrl})
    .then(response => dispatch(addToppingSuccess(response.body)))
    .catch(console.error)
}