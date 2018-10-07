import {ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT} from './actions/admins'
import {localStorageJwtKey} from './constants'

export const storeJwt = store => next => action => {
  try {
    if (action.type === ADMIN_LOGIN_SUCCESS) {
      localStorage.setItem(localStorageJwtKey, action.payload.jwt)
    }
    if (action.type === ADMIN_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey)
    }
  }
  catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e)
  }

  next(action)
}

// export const socketIo = socketio => store => next => action => {
//   if (action.type === USER_LOGIN_SUCCESS) {
//     const jwt = action.payload.jwt
//     socketio.connect(store.dispatch, jwt)
//   }
//   if (action.type === USER_LOGOUT) {
//     socketio.disconnect()
//   }

//   next(action)
// }
