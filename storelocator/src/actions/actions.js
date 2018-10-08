import * as types from './action-types';
import fetch from 'isomorphic-fetch'
import * as request from 'superagent'

import {baseUrl} from '../constants'

export const STORES_BY_POSTCODE_FETCHED = 'STORES_BY_POSTCODE_FETCHED'


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

const storesByPostcodeFetched = stores => ({
  type: STORES_BY_POSTCODE_FETCHED,
  stores
})

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

export const loadStoresByPostcode = (postcode) => (dispatch) => {
  request(`${baseUrl}/shops/${postcode}`)
    .then(response => {
      dispatch(storesByPostcodeFetched(response.body))
    })
    .catch(console.error)
}

// export function fetchStores(postcode) {
//   return (dispatch) => {
//     dispatch(requestStores(postcode));

//     const baseURL = (window.location.hostname === 'localhost') ?
//       'http://localhost:3000':
//       'http://knakwortel.nl'

//     const dataPath = 'data/stores.json';
//     const dataURL = `${baseURL}/${dataPath}`;

//     return fetch(dataURL)
//       .then(response => response.json())
//       .then(json => dispatch(receiveStores(postcode, json)))
//   }
// }
