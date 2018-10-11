import request from 'superagent'
import {apiUrl} from '../constants'
import {isExpired} from '../jwt'
import {logout} from './admins'

export const BLOCKS_FETCHED = 'BLOCKS_FETCHED'
export const BLOCK_FETCHED = 'BLOCK_FETCHED'
export const BLOCK_UPDATE_SUCCESS = 'BLOCK_UPDATE_SUCCESS'
export const BLOCK_IMAGE_UPDATE_SUCCESS = 'BLOCK_IMAGE_UPDATE_SUCCESS'
export const BLOCK_ADD_SUCCESS = 'BLOCK_ADD_SUCCESS'
export const BLOCK_DELETE_SUCCESS = 'BLOCK_DELETE_SUCCESS'


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

const blockAddSuccess = block => {
  console.log('-----', block)
  return {
    type: BLOCK_ADD_SUCCESS,
    payload: block
  }
}

const blockImageUpdateSuccess = (block) => {
  return {
    type: BLOCK_IMAGE_UPDATE_SUCCESS,
    payload: block
  }
}

const blockDeletedSuccess = (block) => {
  return {
    type: BLOCK_DELETE_SUCCESS,
    payload: block
  }
}

export const loadBlocks = () => (dispatch) => {
 
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
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

  request
    .put(`${apiUrl}/contents/${blockId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => dispatch(blockUpdateSuccess(response.body)))
    .catch(console.error)
}

export const addBlock = (data) => (dispatch, getState) => {
  
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

  request
    .post(`${apiUrl}/contents/`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => dispatch(blockAddSuccess(response.body)))
    .catch(console.error)
}

export const updateBlockImage = (blockId, url) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

  request
    .put(`${apiUrl}/contents/${blockId}/image`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({url})
    .then(result => dispatch(blockImageUpdateSuccess(result.body)))
    .catch(err => {
      if (err.status === 400) {
        console.error(err)
      }
      else {
        console.error(err)
      }
    })
  }

  export const deleteBlock = (id) => (dispatch) => {
    request
    .delete(`${apiUrl}/contents/${id}`)
    .then(response => dispatch(blockDeletedSuccess(response.body)))
    .catch(err => console.error(err))
  }