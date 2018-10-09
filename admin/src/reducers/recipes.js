import { 
  RECIPES_FETCHED,
  TOPPINGS_FETCHED,
  ADD_RECIPE_SUCCESS
  } from '../actions/recipes'

const initialState = {
  list: [],
  toppings: []
}

const reducer = (state = initialState, action= {}) => {
    switch(action.type) {
      case RECIPES_FETCHED:
        return {
          ...state,
          list: action.payload.recipes
        }
      case TOPPINGS_FETCHED:
        return {
          ...state,
          toppings: action.payload.toppings
        }
      case ADD_RECIPE_SUCCESS:
        return {
          ...state,
          list: [action.payload, ...state.list]
        }
      default:
        return state
    }
  }

  export default reducer