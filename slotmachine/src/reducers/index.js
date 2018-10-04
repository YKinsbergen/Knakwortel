// src/reducers/index.js
import { combineReducers } from 'redux'
import recipes from './recipes'
import filters from './filters'
import recipeId from './recipeId'

export default combineReducers({
  recipes,
  filters,
  recipeId
})