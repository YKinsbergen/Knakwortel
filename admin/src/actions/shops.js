import request from 'superagent'
import {apiUrl} from '../constants'
import {isExpired} from '../jwt'
import {logout} from './admins'

export const SHOPS_FETCHED = 'SHOPS_FETCHED'
export const NEW_SHOPS_FETCHED = 'NEW_SHOPS_FETCHED'

function shopsFetched(shops) {
  return {
    type: SHOPS_FETCHED,
    payload: shops
  }
}

function newShopsFetched(shops) {
  return {
    type: NEW_SHOPS_FETCHED,
    payload: shops
  }
}

export const addShops = (shopsArrOfObj) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${apiUrl}/shops`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(shopsArrOfObj)
    .then(response => dispatch(newShopsFetched(response.body.newShops)))
    .catch(console.error)
}

export const getShops = () => (dispatch) => {
  request(`${apiUrl}/shops`)
    .then(response => dispatch(shopsFetched(response.body)))
    .catch(err => console.error(err))
}