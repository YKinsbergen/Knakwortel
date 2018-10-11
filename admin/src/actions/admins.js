import * as request from 'superagent'
import {apiUrl} from '../constants'
import {isExpired} from '../jwt'


export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS'
export const ADMIN_LOGIN_FAILED = 'ADMIN_LOGIN_FAILED'
export const ADMIN_LOGOUT = 'ADMIN_LOGOUT'
export const ADMINS_LOADED = 'ADMINS_LOADED'
export const ADMIN_SIGNUP_SUCCESS = 'ADMIN_SIGNUP_SUCCESS'
export const ADMIN_SIGNUP_FAILED = 'ADMIN_SIGNUP_FAILED'
export const ADMIN_DELETE_SUCCESS = 'ADMIN_DELETE_SUCCESS'


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

const loadAdminsSuccess = (admins) => {
  // console.log(admins)
  return {
    type: ADMINS_LOADED,
    payload: admins
  }
}

const adminSignupSuccess = (admin) => ({
  type: ADMIN_SIGNUP_SUCCESS,
  payload: admin
})

const adminSignupFailed = (error) => ({
  type: ADMIN_SIGNUP_FAILED,
  payload: error || 'Unknown error'
})

const deleteAdminSuccess = (admin) => {
  return {
    type: ADMIN_DELETE_SUCCESS,
    payload: admin
  }
}


export const login = (email, password) => (dispatch) => {
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
  }

    export const signup = (email, password) => (dispatch, getState) => {

    const state = getState()
    const jwt = state.currentUser.jwt
   
    if (isExpired(jwt)) return dispatch(logout())

    request
      .post(`${apiUrl}/admins`)
      .set('Authorization', `Bearer ${jwt}`)
      .send({ email, password })
      .then(result => {
        dispatch(adminSignupSuccess(result.body))
      })
      .catch(err => {
        if (err.status === 400) {
          
          dispatch(adminSignupFailed({message: err.response.body.message}))
        }
        else {
          console.error(err)
        }
      })
    }
  
  export const getAdmins = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .get(`${apiUrl}/admins`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(loadAdminsSuccess(result.body)))
      .catch(err => console.error(err))
  }

  export const deleteAdmin = (id) => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .delete(`${apiUrl}/admins/${id}`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(deleteAdminSuccess(result.body)))
      .catch(err => console.error(err))
  }