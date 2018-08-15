import fetch from 'isomorphic-fetch';
import MoviesApi from "../api/MoviesApi";



export function fetchMovies() {

  return (dispatch) => {

  	const moviesDBKey = process.env.REACT_APP_MOVIEDB_KEY
    dispatch({ type: 'LOADING_MOVIES' });

    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => response.json())
      .then(responseData => {
      	//dispatch an action with a type and a payload
      	const movies1 = responseData.results

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`)
        .then(response => response.json())
        .then(responseData => {
          const movies2 = responseData.results
          const movies12 = movies1.concat(movies2)

          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3`)
        .then(response => response.json())
        .then(responseData => {
          const movies3 = responseData.results
          const movies123 = movies12.concat(movies3)

          dispatch({ type: 'FETCH_MOVIES', payload: movies123}) 
          });
        });   
      });          
  };
}


export const fetchMoviesByTitle = (searchTerm) => {
  return (dispatch) => { 
    const moviesDBKey = process.env.REACT_APP_MOVIEDB_KEY

    dispatch({ type: 'LOADING_MOVIES' });
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${moviesDBKey}&language=en-US&query=${searchTerm}&page=1`)
      .then(response => response.json())
      .then(responseData => {
        const movies1 = responseData.results

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${moviesDBKey}&language=en-US&query=${searchTerm}&page=2`)
      .then(response => response.json())
      .then(responseData => {
        const movies2 = responseData.results
        const movies12 = movies1.concat(movies2)

          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${moviesDBKey}&language=en-US&query=${searchTerm}&page=2`)
          .then(response => response.json())
          .then(responseData => {
            const movies3 = responseData.results
            const movies123 = movies12.concat(movies3)

            dispatch({ type: 'FETCH_MOVIES', payload: movies123})

          });
        });
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
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&primary_release_year=${obj.searchYear||""}&with_genres=${obj.genreId||""}&sort_by=${obj.sorting}&language=en-US&include_video=false&include_adult=false&page=1`)
      .then(response => response.json())
      .then(responseData => {
        const movies1 = responseData.results

      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&primary_release_year=${obj.searchYear||""}&with_genres=${obj.genreId||""}&sort_by=${obj.sorting}&language=en-US&include_video=false&include_adult=false&page=2`)
      .then(response => response.json())
      .then(responseData => {
        const movies2 = responseData.results
        const movies12 = movies1.concat(movies2)

          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&primary_release_year=${obj.searchYear||""}&with_genres=${obj.genreId||""}&sort_by=${obj.sorting}&language=en-US&include_video=false&include_adult=false&page=3`)
          .then(response => response.json())
          .then(responseData => {
            const movies3 = responseData.results
            const movies123 = movies12.concat(movies3)

          dispatch({ type: 'FETCH_MOVIES', payload: movies123})
          });
      });
    });
  };         
}



export const addFilmToWatchedList = film => {
  type: 'ADD_FILM_TO_WATCHED_LIST',
  film
}


export const addFilmToToWatchList = film => {
  type: 'ADD_FILM_TO_TO_WATCH_LIST',
  film
}


export const createFilmWatchedList = film => {
  return (dispatch) => {
        MoviesApi.createFilmWatchedListInApi(film).then((responseMovie) => {
            console.log(`SAVED...${responseMovie.id}`)
            console.log(responseMovie)
          dispatch(addFilmToWatchedList(responseMovie));
          return responseMovie;
        })
            .catch((error) => {
              throw(error);
            });
  };
}


export const createFilmToWatchList = film => {
        return (dispatch) => {
                    MoviesApi.createFilmToWatchListInApi(film).then((responseMovie) => {
                        console.log(`SAVED...${responseMovie.id}`)
                        console.log(responseMovie)
                      dispatch(addFilmToToWatchList(responseMovie));
                      return responseMovie;
                    }).catch((error) => {
                      throw(error);
                    });
        };
}

// export const removeFilmFromWatchedListSuccess = film => ({
//   type: 'REMOVE_FILM_FROM_WATCHED_LIST',
//   film
// })



// export function removeFilmFromWatchedList = film => {
//   return (dispatch) => {
//     MoviesApi.removeFilmFromWatchedListInApi(film).then(() => {
//         console.log(`DELETED...${film.id}`)
//         console.log(film)
//       dispatch(removeFilmFromWatchedListSuccess(film));
//       return;
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export const removeFilmFromToWatchListSuccess = film => ({
//   type: 'REMOVE_FILM_FROM_TO_WATCH_LIST',
//   film,
// })

// // export const removeFilmFromToWatchList = film => ({
// //   type: 'REMOVE_FILM_FROM_TO_WATCH_LIST',
// //   film,
// // })

// export function removeFilmFromToWatchList = film => {
//   return (dispatch) => {
//     MoviesApi.removeFilmFromToWatchListInApi(film).then(() => {
//         console.log(`DELETED...${film.id}`)
//         console.log(save)
//       dispatch(removeFilmFromToWatchListSuccess(film));
//       return;
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }