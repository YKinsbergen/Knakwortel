import {
  SHOPS_FETCHED,
  NEW_SHOPS_FETCHED
} from '../actions/shops'

export default (state = null, action = {}) => {
  switch (action.type) {
    case SHOPS_FETCHED:
      return action.payload.shops
    case NEW_SHOPS_FETCHED:
      return [
        ...action.payload,
        ...state
      ]
    default: 
      return state
  }
}