import { RECIPES_FETCHED, TOPPINGS_FETCHED  } from '../actions/recipes'

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
      default:
        return state
    }
  }

  export default reducer