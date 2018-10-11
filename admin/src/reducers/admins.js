import {
  ADMINS_LOADED,
  ADMIN_SIGNUP_SUCCESS,
  ADMIN_DELETE_SUCCESS
} from '../actions/admins'

export default (state = null, action = {}) => {
  switch (action.type) {
    case ADMINS_LOADED:
      // console.log(action.payload)
      return action.payload
    case ADMIN_SIGNUP_SUCCESS:
      console.log(action.payload)
      return [
        action.payload,
        ...state
      ]
    case ADMIN_DELETE_SUCCESS:
      const newAdmins = state.filter(admin => admin.id !== action.payload.id)
      return newAdmins
    default: 
      return state
  }
}