import {SEARCH_STORES, GET_STORES}from "../actions/stores";

const storeReducer = (state = [], action) => {
    switch (action.type) {
      case SEARCH_STORES:
        // Handle isFetching, didInvalidate booleans etc. if applicable
        return '2033WJ';
      case GET_STORES:
        return action.stores;
      default:
        return state;
    }
  };
  
  export default storeReducer;