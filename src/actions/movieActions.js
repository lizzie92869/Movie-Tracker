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

// export function fetchFilteredMovies() {
// console.log("in fetchFilteredMovies()")
//   return (dispatch) => {

//     const moviesDBKey = process.env.REACT_APP_MOVIEDB_KEY
//     console.log("log:", moviesDBKey)
//     //const sorting = //"date" or "popularity"
//     //const searchTerm =
//     //const year = 


//     // debugger

//     dispatch({ type: 'LOADING_MOVIES' });
//     return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${moviesDBKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
//            //https://api.themoviedb.org/3/search/movie?api_key=${moviesDBKey}&language=en-US&query={searchTerm}&year={year}&sort_by={sorting}.desc&include_adult=false
//               .then(response => response.json())
//               .then(responseData => {
//                 //dispatch an action with a type and a payload
//                 const movies = responseData.results
//                 dispatch({ type: 'FETCH_MOVIES', payload: movies})
//                 console.log(this)})
             
//   };

// }