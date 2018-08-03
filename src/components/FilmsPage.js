import React from 'react';
import fetch from 'isomorphic-fetch';
function fetchmovies() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_MOVIES' });
    return fetch('')
              .then(response => response.json())
              .then(results => dispatch({ type: 'FETCH_MOVIES', payload: results.title }));
  };
}

let movies = fetchmovies()


const FilmsPage = () => 
  <div>
  <div>Hello from film page</div>
  <div>{movies}</div>
  </div>

  export default FilmsPage