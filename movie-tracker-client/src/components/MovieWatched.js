import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions.js'


class MovieWatched extends Component {

handleToWatchClick = e => {
this.props.actions.addFilmToToWatchList(this.props.film)
console.log("props after", this.props)
console.log("moviesToWatch prop after", this.props.moviesToWatch)
}

handleRemoveFromWatched = e => {
console.log("from handleRemoveFromWatched")
this.props.actions.removeFilmFromWatchedList(this.props.film)
}



	render() {
    return (
	 <div className="block-movie">
     <a key={this.props.film.id} href="#"><img width="150" src={"https://image.tmdb.org/t/p/w185/"+this.props.film.poster_path}/></a>
    <div>
    	<button onClick={this.handleToWatchClick} className="waves-effect waves-light btn btn-small green"><i class="small material-icons">playlist_add</i></button>
    	<button onClick={this.handleRemoveFromWatched} className="waves-effect waves-light btn btn-small grey"><i class="small material-icons">remove_circle_outline</i></button>
    </div>
    </div>
	)
	}
}

function mapStateToProps(state) {

  console.log('in MapStateToProps in MovieWatched.js')
  return {
    moviesFiltered: state.movies.moviesFiltered,
    moviesWatched: state.movies.moviesWatched,
    moviesToWatch: state.movies.moviesToWatch
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const ConnectedMovieWatched = connect(mapStateToProps, mapDispatchToProps)(MovieWatched)

