import { BLOCKS_FETCHED, BLOCK_ADD_SUCCESS, BLOCK_DELETE_SUCCESS} from '../actions/blocks'


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
      case BLOCK_DELETE_SUCCESS:
        return state, 
        {
          count: state.count, 
          next: state.next,
          previous: state.previous,
          range: state.range,
          pageContents: state.pageContents.filter(content => {
          return content.id !== action.payload.id
        })
      }
      default:
        return state
    }
  }

  export default reducer