import { CREATE_IMAGE_SUCCESS } from '../actions/images'

export default function (state = null, {type, payload}) {
	switch (type) {
		case CREATE_IMAGE_SUCCESS:
			return payload
		default:
      return state
	}
}
