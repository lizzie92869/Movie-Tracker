import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions.js'


class MovieToWatch extends Component {

handleWatchedClick = e => {
this.props.actions.createFilmWatchedList(this.props.film)
}

handleRemoveFromToWatch = e => {
console.log("from handleRemoveFromToWatch")
this.props.actions.removeFilmFromToWatchList(this.props.film)
}



	render() {
    return (
	 <div className="block-movie">
     <div key={this.props.film.id}><img alt="movie_poster" width="150" src={"https://image.tmdb.org/t/p/w185/"+this.props.film.poster_path}/></div>
    <div>
    	<button onClick={this.handleWatchedClick} className="waves-effect waves-light btn btn-small green"><i className="small material-icons">playlist_add_check</i></button>  
    	<button onClick={this.handleRemoveFromToWatch} className="waves-effect waves-light btn btn-small grey"><i className="small material-icons">remove_circle_outline</i></button>
    </div>
    </div>
	)
	}
}

function mapStateToProps(state) {

  console.log('in MapStateToProps in MovieToWatch.js')
  return {
    moviesFiltered: state.movies.moviesFiltered,
    moviesWatched: state.movies.moviesWatched,
    moviesToWatch: state.movies.moviesToWatch
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const ConnectedMovieToWatch = connect(mapStateToProps, mapDispatchToProps)(MovieToWatch)

