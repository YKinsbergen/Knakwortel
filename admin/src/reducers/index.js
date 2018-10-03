import { combineReducers } from 'redux'
import login from './login'
import currentUser from './currentUser'


export default combineReducers({
  login,
  currentUser
})