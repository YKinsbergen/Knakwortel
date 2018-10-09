import * as types from '../actions/action-types';
import {STORES_BY_POSTCODE_FETCHED} from '../actions/actions'

const storesFound = (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_STORES:
      // Handle isFetching, didInvalidate booleans etc. if applicable
      return state;
    case types.RECEIVE_STORES:
      return action.stores;

    case STORES_BY_POSTCODE_FETCHED:
      return action.stores;

    default:
      return state;
  }
};

export default storesFound;
