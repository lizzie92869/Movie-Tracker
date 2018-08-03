
export default function moviesReducer(state= {
	loading: false, 
	moviesFiltered: [],
  	moviesWatched: [], 
  	moviesToWatch: []
  }, 
  action) {
  	debugger
  switch ( action.type ) {
    case 'LOADING_MOVIES':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_MOVIES':
      return {loading: false, moviesFiltered: action.payload}
    default:
      return state;
  }

}
