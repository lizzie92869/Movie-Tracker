import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions.js'


class MovieToWatch extends Component {

handleWatchedClick = e => {
this.props.actions.addFilmToWatchedList(this.props.film)
console.log("props after", this.props)
console.log("moviesWatched prop after", this.props.moviesWatched)

}

handleRemoveFromToWatch = e => {
console.log("from handleRemoveFromToWatch")
this.props.actions.removeFilmFromToWatchList(this.props.film)
}



	render() {
    return (
	 <div className="block-movie">
     <a key={this.props.film.id} href="#"><img width="150" src={"https://image.tmdb.org/t/p/w185/"+this.props.film.poster_path}/></a>
    <div>
    	<button onClick={this.handleWatchedClick} className="waves-effect waves-light btn btn-small green"><i class="small material-icons">playlist_add_check</i></button>  
    	<button onClick={this.handleRemoveFromToWatch} className="waves-effect waves-light btn btn-small grey"><i class="small material-icons">remove_circle_outline</i></button>
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

