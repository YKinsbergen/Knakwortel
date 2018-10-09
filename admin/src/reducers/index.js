import { combineReducers } from 'redux'
import login from './login'
import currentUser from './currentUser'
import blocks from './blocks'
import block from './block'
import images from './images'
import shops from './shops'
import orders from './orders'


export default combineReducers({
  login,
  currentUser,
  blocks,
  block,
  images,
  shops,
  orders
})