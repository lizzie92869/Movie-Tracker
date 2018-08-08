
export default function moviesReducer(state= {
	loading: false, 
	moviesFiltered: [],
  	moviesWatched: [], 
  	moviesToWatch: []
  }, 
  action) {
	  	
	  switch ( action.type ) {
	    case 'LOADING_MOVIES':
	      return Object.assign({}, state, {loading: true})
	    case 'FETCH_MOVIES':
	    	return Object.assign({}, state, {loading: false, moviesFiltered: action.payload} )
	    case 'ADD_FILM_TO_WATCHED_LIST':
	    	return { ...state, moviesWatched: state.moviesWatched.concat(action.film) }
	    case 'ADD_FILM_TO_TO_WATCH_LIST':
	    	return { ...state, moviesToWatch: state.moviesToWatch.concat(action.film) }
	    case 'REMOVE_FILM_FROM_WATCHED_LIST':
	    	const idx = state.moviesWatched.indexOf(action.film);
	    	return { ...state, moviesWatched: [].concat.apply([], [state.moviesWatched.slice(0, idx), state.moviesWatched.slice(idx + 1)]) }
	     case 'REMOVE_FILM_FROM_TO_WATCH_LIST':
	    	const idx2 = state.moviesToWatch.indexOf(action.film);
	    	return { ...state, moviesToWatch: [].concat.apply([], [state.moviesToWatch.slice(0, idx2), state.moviesToWatch.slice(idx2 + 1)]) }
	    default:
	      return state;
	  }

	}
