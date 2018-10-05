import * as request from 'superagent'
import {apiUrl} from '../constants'

export const CREATE_IMAGE_SUCCESS = 'CREATE_IMAGE_SUCCESS'

const createImageSuccess = (url) => ({
  type: CREATE_IMAGE_SUCCESS,
  payload: url
})


export const dispatchUrl = (url) => (dispatch) => {
	request
		.post(`${apiUrl}/images`)
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