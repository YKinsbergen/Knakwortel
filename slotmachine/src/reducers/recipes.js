// src/reducers/recipes.js
import { RECIPES_FETCHED } from '../actions/recipes'

export default (state = null, action = {}) => {
    switch (action.type) {
      case RECIPES_FETCHED:
        return action.recipes
    default: 
      return state
    }
  }