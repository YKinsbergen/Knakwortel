import {ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT} from '../actions/admins'

export default function (state = null, {type, payload}) {
	switch (type) {
		case ADMIN_LOGIN_SUCCESS:
			return payload

    case ADMIN_LOGOUT:
      return null

		default:
      return state
	}
}
