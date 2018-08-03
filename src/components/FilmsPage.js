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
  <div className="frameDisplayMovies">
  <div><p>Here is a list of suggestion from popular movies.</p> 
  <p>If the movie is in one of the list, it won't be shown here</p></div>
  <div>{movies}</div>
  </div>

  export default FilmsPage