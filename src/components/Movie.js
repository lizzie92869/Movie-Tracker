import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions.js'


class Movie extends Component {

handleWatchedClick = e => {
console.log("from handleWatchedClick")
console.log("props avant",this.props)
console.log("props.film is the film",this.props.film)
// this.props = Object.assign({}, this.props, {moviesWatched: [...this.props.moviesWatched, this.props.film]})
// this.setState({Object.assign({}, this.props, {moviesWatched: [...this.props.moviesWatched, this.props.film]})})
this.props.actions.addFilmToWatchedList(this.props.film)
console.log("props after", this.props)
console.log("moviesWatched prop after", this.props.moviesWatched)

}

handleToWatchClick = e => {
console.log("from handleToWatchClick")
console.log("props avant",this.props)
console.log("props.film is the film",this.props.film)
this.props.actions.addFilmToToWatchList(this.props.film)
console.log("props after", this.props)
console.log("moviesToWatch prop after", this.props.moviesToWatch)
}

handleNotInterestedClick = e => {
console.log("from handleNotInterestedClick")
}



	render() {
    return (
	 <div className="block-movie">
     <a key={this.props.film.id} href="#"><img width="150" src={"https://image.tmdb.org/t/p/w185/"+this.props.film.poster_path}/></a>
    <div>
    	<button onClick={this.handleWatchedClick} className="waves-effect waves-light btn btn-small green"><i class="small material-icons">playlist_add_check</i></button>  
    	<button onClick={this.handleToWatchClick} className="waves-effect waves-light btn btn-small green"><i class="small material-icons">playlist_add</i></button>
    	<button onClick={this.handleNotInterestedClick} className="waves-effect waves-light btn btn-small grey"><i class="small material-icons">remove_circle_outline</i></button>
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

