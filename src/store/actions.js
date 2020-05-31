import {API_PARAMS, API_URL} from '../environment/enviroments';

export const FETCH = {
  type: 'FETCH'
}

export function fetching(params) {
  return (dispatch) => {
    let url = new URL(API_URL);
    API_PARAMS.forEach(param => {
      if (params[param].length) {
        url.searchParams.append(param, params[param]);
      }
    });
    console.log(url);
    fetch(url.toString())
      .then(response => response.json())
        .then(data => dispatch({...FETCH, data, params}))
        .catch(er => console.log('Fetching error: ', er));
  }
}
