
export default function catsReducer(state= {loading: false, pictures: []}, action) {
  switch ( action.type ) {
    case 'LOADING_MOVIES':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_MOVIES':
      return {loading: false, pictures: action.payload}
    default:
      return state;
  }

}