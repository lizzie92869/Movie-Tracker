
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
	    default:
	      return state;
	  }

	}
