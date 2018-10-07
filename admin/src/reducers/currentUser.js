import {ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT} from '../actions/admins'
import {localStorageJwtKey} from '../constants'

let initialState = null
try {
  const jwt = localStorage.getItem(localStorageJwtKey)
  if (jwt) {
    initialState = { jwt }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default function (state = initialState, {type, payload}) {
	switch (type) {
		case ADMIN_LOGIN_SUCCESS:
			return payload

    case ADMIN_LOGOUT:
      return null

		default:
      return state
	}
}
