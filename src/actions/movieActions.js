import fetch from 'isomorphic-fetch';
// import ENV_KEY from '.env-key';



export function fetchMovies() {

  return (dispatch) => {
debugger
    dispatch({ type: 'LOADING_MOVIES' });
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=?????????????????&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
              .then(response => response.results.json())
              .then(moviesFiltered => dispatch({ type: 'FETCH_MOVIES', payload: moviesFiltered.backdrop_path }));
  };

}
