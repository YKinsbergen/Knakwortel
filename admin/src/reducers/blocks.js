import { BLOCKS_FETCHED  } from '../actions/blocks'


const reducer = (state = null, action= {}) => {
    switch(action.type) {
      case BLOCKS_FETCHED:
        return action.payload
      default:
        return state
    }
  }

  export default reducer