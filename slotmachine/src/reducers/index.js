// src/reducers/index.js
import { combineReducers } from 'redux'
import recipe from './recipe'
import recipes from './recipes'
import filters from './filters'
import recipeId from './recipeId'

export default combineReducers({
  recipe,
  recipes,
  filters,
  recipeId
})