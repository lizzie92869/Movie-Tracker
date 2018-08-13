import fetch from 'isomorphic-fetch';


export function fetchMovies() {

  return (dispatch) => {

  	const moviesDBKey = process.env.REACT_APP_MOVIEDB_KEY
  	console.log("log:", moviesDBKey)
  	// debugger

    dispatch({ type: 'LOADING_MOVIES' });
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => response.json())
      .then(responseData => {
      	//dispatch an action with a type and a payload
      	const movies = responseData.results
      	dispatch({ type: 'FETCH_MOVIES', payload: movies}) 
        });            
  };
}


export const fetchMoviesByTitle = (searchTerm) => {
  return (dispatch) => { 
    const moviesDBKey = process.env.REACT_APP_MOVIEDB_KEY

    dispatch({ type: 'LOADING_MOVIES' });
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${moviesDBKey}&query=${searchTerm}`)
      .then(response => response.json())
      .then(responseData => {
        //dispatch an action with a type and a payload
        const movies = responseData.results
        dispatch({ type: 'FETCH_MOVIES', payload: movies})
      });
  };         
}

export const fetchMoviesByPreferences = (obj) => {
  console.log("obj", obj)
  console.log("obj.searchYear", obj.searchYear)
  console.log("obj.genreId", obj.genreId)
  console.log("obj.sorting", obj.sorting)
  return (dispatch) => { 
    const moviesDBKey = process.env.REACT_APP_MOVIEDB_KEY

    dispatch({ type: 'LOADING_MOVIES' });
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&primary_release_year=${obj.searchYear||""}&with_genres=${obj.genreId||""}&sort_by=${obj.sorting}&language=en-US&include_video=false&include_adult=false`)
      .then(response => response.json())
      .then(responseData => {
        //dispatch an action with a type and a payload
        const movies = responseData.results
        dispatch({ type: 'FETCH_MOVIES', payload: movies})
      });
  };         
}

// export const fetchMoviesByPreferences = (searchYear="", searchGenreId="", sorting="popularity") => {
//   debugger
//   return (dispatch) => { 
//     const moviesDBKey = process.env.REACT_APP_MOVIEDB_KEY

//     dispatch({ type: 'LOADING_MOVIES' });
//     return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&primary_release_year=${searchYear}&with_genres=${searchGenreId}&language=en-US&sort_by=${sorting}&include_video=false&include_adult=false`)
//       .then(response => response.json())
//       .then(responseData => {
//         //dispatch an action with a type and a payload
//         const movies = responseData.results
//         dispatch({ type: 'FETCH_MOVIES', payload: movies})
//       });
//   };         
// }

// export const fetchMoviesByGenre = (searchGenreId) => {
//   debugger
//   return (dispatch) => { 
//     const moviesDBKey = process.env.REACT_APP_MOVIEDB_KEY

//     dispatch({ type: 'LOADING_MOVIES' });
//     return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&with_genres=${searchGenreId}&language=en-US&include_video=false&include_adult=false`)
//       .then(response => response.json())
//       .then(responseData => {
//         //dispatch an action with a type and a payload
//         const movies = responseData.results
//         dispatch({ type: 'FETCH_MOVIES', payload: movies})
//       });
//   };         
// }


export const addFilmToWatchedList = film => ({
  type: 'ADD_FILM_TO_WATCHED_LIST',
  film,
})

export const addFilmToToWatchList = film => ({
  type: 'ADD_FILM_TO_TO_WATCH_LIST',
  film,
})


export const removeFilmFromWatchedList = film => ({
  type: 'REMOVE_FILM_FROM_WATCHED_LIST',
  film,
})

export const removeFilmFromToWatchList = film => ({
  type: 'REMOVE_FILM_FROM_TO_WATCH_LIST',
  film,
})
