// src/reducers/recipes.js
import { RECIPES_FETCHED } from '../actions/recipes'

export default (state = null, action = {}) => {
    switch (action.type) {
      case RECIPES_FETCHED:
      // recipes.recipes because otherwise we get a nested object
        return action.recipes.recipes
    default: 
      return state
    }
  }