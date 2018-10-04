import request from 'superagent'
import {apiUrl} from '../constants'

export const BLOCKS_FETCHED = 'BLOCKS_FETCHED'
export const BLOCK_FETCHED = 'BLOCK_FETCHED'
export const BLOCK_UPDATE_SUCCESS = 'BLOCK_UPDATE_SUCCESS'


const blocksFetched = blocks => ({
  type: BLOCKS_FETCHED,
  payload: blocks
})

const blockFetched = block => ({
  type: BLOCK_FETCHED,
  payload: block
})

const blockUpdateSuccess = block => ({
  type: BLOCK_UPDATE_SUCCESS,
  payload: block
})

export const loadBlocks = () => (dispatch, getState) => {
  if (getState().blocks) return
  
  request(`${apiUrl}/contents`)
    .then(response => {
      dispatch(blocksFetched(response.body))
    })
    .catch(console.error)
}

export const loadBlock = (blockId) => (dispatch, getState) => {
  const state = getState().block
  if (state && state.id === blockId) return

  request(`${apiUrl}/contents/${blockId}`)
    .then(response => {
      dispatch(blockFetched(response.body))
    })
    .catch(console.error)
}

export const updateBlock = (blockId, data) => (dispatch, getState) => {
  // const state = getState()
  // const jwt = state.currentUser.jwt
 
  // if (isExpired(jwt)) return dispatch(logout())

  request
    .put(`${apiUrl}/contents/${blockId}`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => dispatch(blockUpdateSuccess(response.body)))
    .catch(console.error)
}