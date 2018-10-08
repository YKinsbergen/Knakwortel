import * as types from './action-types';
import fetch from 'isomorphic-fetch'

export const requestStores = (postcode) => {
  return {
    type: types.REQUEST_STORES,
    postcode
  };
}

export const receiveStores = (postcode, json) => {
  return {
    type: types.RECEIVE_STORES,
    postcode,
    stores: json.stores,
    receivedAt: Date.now()
  };
}


// Async actions

export function fetchStores(postcode) {
  return (dispatch) => {
    dispatch(requestStores(postcode));

    const baseURL = (window.location.hostname === 'localhost') ?
      'http://localhost:3000':
      'http://knakwortel.nl'

    const dataPath = 'data/stores.json';
    const dataURL = `${baseURL}/${dataPath}`;

    return fetch(dataURL)
      .then(response => response.json())
      .then(json => dispatch(receiveStores(postcode, json)))
  }
}
