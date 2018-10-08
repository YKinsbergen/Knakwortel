import * as types from './action-types';
import request from 'superagent'
import { apiUrl } from '../constants'

export const requestStores = (postcode) => {
  return {
    type: types.REQUEST_STORES,
    postcode
  };
}

export const receiveStores = (stores) => {
  return {
    type: types.RECEIVE_STORES,
    stores: stores,
    receivedAt: Date.now()
  };
}


// Async actions

export function fetchStores(postcode) {
  return (dispatch) => {
    dispatch(requestStores(postcode));

    // const baseURL = (window.location.hostname === 'localhost') ?
    //   'http://localhost:3000':
    //   'http://knakwortel.nl'

   // const dataPath = 'data/stores.json';
   // const dataURL = `${baseURL}/${dataPath}`;

    return request(`${apiUrl}/shops`)
      // .then(response => response.body())
      .then(response => dispatch(receiveStores(response.body.shops)))
  }
}
