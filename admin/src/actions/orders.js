import request from 'superagent'
import {apiUrl} from '../constants'
import {isExpired} from '../jwt'
import {logout} from './admins'

export const ORDERS_FETCHED = 'ORDERS_FETCHED'
export const SET_SENDDATE_SUCCESS = 'SET_SENDDATE_SUCCESS'
export const ORDER_DELETE_SUCCESS = 'ORDER_DELETE_SUCCESS'

const ordersFetched = orders => ({
  type: ORDERS_FETCHED,
  payload: orders
})

const setSendDateSuccess = (order) => ({
  type: SET_SENDDATE_SUCCESS,
  payload: order
})

const orderDeleteSuccess = (order) => ({
  type: ORDER_DELETE_SUCCESS,
  payload: order
})

export const loadOrders = () => (dispatch) => {
 
  request(`${apiUrl}/orders`)
    .then(response => {
      dispatch(ordersFetched(response.body))
    })
    .catch(console.error)
}

export const setSendDate = (sendDate, orderId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())
  request
    .put(`${apiUrl}/orders/${orderId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({sendDate})
    .then(response => dispatch(setSendDateSuccess(response.body)))
    .catch(console.error)
}

export const deleteOrder = (id) => (dispatch) => {
  request
  .delete(`${apiUrl}/orders/${id}`)
  .then(response => dispatch(orderDeleteSuccess(response.body)))
  .catch(err => console.error(err))
}

