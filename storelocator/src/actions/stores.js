import * as request from 'superagent'

export const SEARCH_STORES = 'SEARCH_STORES';
export const GET_STORES = 'GET_STORES';

export const searchStores = (postcode) => {
  return {
    type: SEARCH_STORES,
    postcode
  };
}

export const getStores = (postcode, json) => {
  return {
    type: GET_STORES,
    postcode,
    stores: json.stores,
    receivedAt: Date.now()
  };
}

export function fetchStores(postcode) {
  return (dispatch) => {
    dispatch(searchStores(postcode));

    const baseURL = (window.location.hostname === 'localhost') ?
      'http://localhost:3000':
      'https://knakwortel.nl';

    const dataPath = 'data/storelocator.json';
    const dataURL = `${baseURL}/${dataPath}`;

    return request(dataURL)
      .then(response => response.json())
      .then(json => dispatch(getStores(postcode, json)))
  }
}