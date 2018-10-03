import request from 'superagent'
import {apiUrl} from '../constants'

export const BLOCKS_FETCHED = 'BLOCKS_FETCHED'

const blocksFetched = blocks => ({
  type: BLOCKS_FETCHED,
  payload: blocks
})

export const loadBlocks = () => (dispatch, getState) => {
  if (getState().blocks) return
  
  request(`${apiUrl}/contents`)
    .then(response => {
      dispatch(blocksFetched(response.body))
    })
    .catch(console.error)
}