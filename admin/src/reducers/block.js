
import { 
  BLOCK_FETCHED, 
  BLOCK_UPDATE_SUCCESS,
  BLOCK_IMAGE_UPDATE_SUCCESS
} from '../actions/blocks'

export default function (state = null, action) {
  switch(action.type) {
    case BLOCK_FETCHED:
      return action.payload
    case BLOCK_UPDATE_SUCCESS:
      return action.payload  
    case BLOCK_IMAGE_UPDATE_SUCCESS:
      return action.payload
    default:
      return state
  }
}