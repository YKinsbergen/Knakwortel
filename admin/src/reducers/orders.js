import { ORDERS_FETCHED, SET_SENDDATE_SUCCESS, ORDER_DELETE_SUCCESS  } from '../actions/orders'

const reducer = (state = null, action= {}) => {
    switch(action.type) {
      case ORDERS_FETCHED:
        return action.payload

      case SET_SENDDATE_SUCCESS:
      const newOrdersState = [...state]
      const orderToChangeIndex = newOrdersState.findIndex(order => order.id === action.payload.id)
      newOrdersState[orderToChangeIndex] = action.payload
        return newOrdersState

      case ORDER_DELETE_SUCCESS:
        return state.filter(order => {
          return order.id !== action.payload.id
        })
      default:
        return state
    }
  }

  export default reducer