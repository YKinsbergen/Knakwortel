// src/reducers/index.js
import { combineReducers } from 'redux'
import recipes from './recipes'
import filters from './filters'

export default combineReducers({
  recipes,
  filters
})