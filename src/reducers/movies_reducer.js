
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
	    default:
	      return state;
	  }

	}
