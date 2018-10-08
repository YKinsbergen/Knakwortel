import { RECIPES_FETCHED  } from '../actions/recipes'


const reducer = (state = null, action= {}) => {
    switch(action.type) {
      case RECIPES_FETCHED:
        return action.payload.recipes
      default:
        return state
    }
  }

  export default reducer