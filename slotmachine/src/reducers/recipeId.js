// src/reducers/recipeId.js
import { GET_RECIPE_ID } from '../actions/recipeId'

const initialState = {
  value: 0
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case GET_RECIPE_ID:
        return {...state, value: action.payload}
    default: 
      return state
    }
  }