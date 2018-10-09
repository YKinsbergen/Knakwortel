import { 
  RECIPES_FETCHED,
  TOPPINGS_FETCHED,
  ADD_RECIPE_SUCCESS,
  TOPPING_TYPES_FETCHED
  } from '../actions/recipes'

const initialState = {
  list: [],
  toppings: [],
  toppingTypes: []
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
      case TOPPING_TYPES_FETCHED:
        return {
          ...state,
          toppingTypes: action.payload.toppingTypes
        }
      default:
        return state
    }
  }

  export default reducer