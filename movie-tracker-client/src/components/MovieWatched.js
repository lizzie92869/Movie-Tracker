import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions.js'


class MovieWatched extends Component {

handleToWatchClick = e => {
this.props.actions.createFilmToWatchList(this.props.film)
}

handleRemoveFromWatched = e => {
console.log("from handleRemoveFromWatched")
this.props.actions.removeFilmFromWatchedList(this.props.film)
}

	render() {
    return (
	 <div className="block-movie">
     <div key={this.props.film.id}><img alt="movie_poster" width="150" src={"https://image.tmdb.org/t/p/w185/"+this.props.film.poster_path}/></div>
    <div>
    	<button onClick={this.handleToWatchClick} className="waves-effect waves-light btn btn-small green"><i className="small material-icons">playlist_add</i></button>
    	<button onClick={this.handleRemoveFromWatched} className="waves-effect waves-light btn btn-small grey"><i className="small material-icons">remove_circle_outline</i></button>
    </div>
    </div>
	)
	}
}

// function mapStateToProps(state) {

//   console.log('in MapStateToProps in MovieWatched.js')
//   return {
//     moviesFiltered: state.movies.moviesFiltered,
//     moviesWatched: state.movies.moviesWatched,
//     moviesToWatch: state.movies.moviesToWatch
//   }
// }

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const ConnectedMovieWatched = connect(null, mapDispatchToProps)(MovieWatched)

// To gain access to the store somewhere in our app, we use a function provided by react-redux, connect. 
// By modifying a component's export statement and included connect, 
// we are able to take data from our Redux store and map them to a component's props. 

