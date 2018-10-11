import { BLOCKS_FETCHED, BLOCK_ADD_SUCCESS  } from '../actions/blocks'


const reducer = (state = null, action= {}) => {
    switch(action.type) {
      case BLOCKS_FETCHED:
        return action.payload
      case BLOCK_ADD_SUCCESS:
        return {
          ...state,
          pageContents: [
            action.payload,
            ...state.pageContents
          ]
        }
      default:
        return state
    }
  }

  export default reducer