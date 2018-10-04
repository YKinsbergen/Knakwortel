// src/reducers/recipes.js
import { RECIPE_FETCHED } from '../actions/recipes'

export default (state = null, action = {}) => {
    switch (action.type) {
      case RECIPE_FETCHED:
        return action.recipe
    default: 
      return state
    }
  }