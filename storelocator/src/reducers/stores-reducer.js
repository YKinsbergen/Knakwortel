import * as types from '../actions/action-types';

const storesFound = (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_STORES:
      // Handle isFetching, didInvalidate booleans etc. if applicable
      return state;
    case types.RECEIVE_STORES:
      return action.stores;
    default:
      return state;
  }
};

export default storesFound;
