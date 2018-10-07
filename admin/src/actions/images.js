import * as request from 'superagent'
import {apiUrl} from '../constants'
import {isExpired} from '../jwt'
import {logout} from './admins'

export const CREATE_IMAGE_SUCCESS = 'CREATE_IMAGE_SUCCESS'

const createImageSuccess = (url) => ({
  type: CREATE_IMAGE_SUCCESS,
  payload: url
})


export const dispatchUrl = (url) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 
  if (isExpired(jwt)) return dispatch(logout())

	request
		.post(`${apiUrl}/images`)
		.set('Authorization', `Bearer ${jwt}`)
    .send({url})
    .then(result => dispatch(createImageSuccess(result.body)))
    .catch(err => {
    	if (err.status === 400) {
    		console.error(err)
    	}
    	else {
    		console.error(err)
    	}
    })
	}