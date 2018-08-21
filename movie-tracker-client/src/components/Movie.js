import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions.js'


class Movie extends Component {

handleWatchedClick = e => {
// console.log("from handleWatchedClick")
// console.log("props avant",this.props)
// console.log("props.film is the film",this.props.film)
e.preventDefault();
this.props.actions.createFilmWatchedList(this.props.film)
// console.log("props after", this.props)
// console.log("moviesWatched prop after", this.props.moviesWatched)

}

handleToWatchClick = e => {
e.preventDefault();
// console.log("from handleToWatchClick")
// console.log("props avant",this.props)
// console.log("props.film is the film",this.props.film)
this.props.actions.createFilmToWatchList(this.props.film)
// console.log("props after", this.props)
// console.log("moviesToWatch prop after", this.props.moviesToWatch)
}

// handleNotInterestedClick = e => {
// console.log("from handleNotInterestedClick")
// }



	render() {
    return (
	 <div className="block-movie">
     <div key={this.props.film.id}><img alt="movie poster" width="150" src={"https://image.tmdb.org/t/p/w185/"+this.props.film.poster_path}/></div>
    <div>
    	<button onClick={this.handleWatchedClick} className="waves-effect waves-light btn btn-small green"><i className="small material-icons">playlist_add_check</i></button>  
    	<button onClick={this.handleToWatchClick} className="waves-effect waves-light btn btn-small green"><i className="small material-icons">playlist_add</i></button>
    </div>
    </div>
	)
	}
}

function mapStateToProps(state) {

  console.log('in MapStateToProps in Movie.js')
  return {
    moviesFiltered: state.movies.moviesFiltered,
    moviesWatched: state.movies.moviesWatched,
    moviesToWatch: state.movies.moviesToWatch
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const ConnectedMovie = connect(mapStateToProps, mapDispatchToProps)(Movie)

// To gain access to the store somewhere in our app, we use a function provided by react-redux, connect. 
// By modifying a component's export statement and included connect, 
// we are able to take data from our Redux store and map them to a component's props. 

