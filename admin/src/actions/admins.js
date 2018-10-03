import * as request from 'superagent'
import {apiUrl} from '../constants'


export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS'
export const ADMIN_LOGIN_FAILED = 'ADMIN_LOGIN_FAILED'
export const ADMIN_LOGOUT = 'ADMIN_LOGOUT'


export const logout = () => ({
  type: ADMIN_LOGOUT
})

const adminLoginSuccess = (login) => ({
  type: ADMIN_LOGIN_SUCCESS,
  payload: login
})

const adminLoginFailed = (error) => ({
  type: ADMIN_LOGIN_FAILED,
  payload: error || 'Unknown error'
})


export const login = (email, password) => (dispatch) =>
	request
		.post(`${apiUrl}/logins`)
    .send({email, password})
    .then(result => dispatch(adminLoginSuccess(result.body)))
    .catch(err => {
    	if (err.status === 400) {
    		dispatch(adminLoginFailed(err.response.body.message))
    	}
    	else {
    		console.error(err)
    	}
    })