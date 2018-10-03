import {ADMIN_LOGIN_FAILED} from '../actions/admins'

export default function (state = {}, {type, payload}) {
	switch (type) {
		case ADMIN_LOGIN_FAILED:
			return {
				error: payload
			}

		default:
      return state
	}
}
