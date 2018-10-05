import { combineReducers } from 'redux'
import login from './login'
import currentUser from './currentUser'
import blocks from './blocks'
import block from './block'
import shops from './shops'


export default combineReducers({
  login,
  currentUser,
  blocks,
  block,
  shops
})