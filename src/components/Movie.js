// import React from 'react';
// import FilmsPage from './FilmsPage'

// const Movie = (props) => {

// // handleWatchedClick = e => {
// // console.log("ici")
// // }

// // handleToWatchClick = (e) => {

// // }

// // handleNotInterestedClick = (e) => {

// // }	

// const film = props.film

// 	return ( 
// 	 <div className="block-movie">
//      <a key={film.id} href="#"><img width="150" src={"https://image.tmdb.org/t/p/w185/"+film.poster_path}/></a>
//     <div>
//     	<button onClick={this.handleWatchedClick} className="waves-effect waves-light btn btn-small green"><i class="small material-icons">playlist_add_check</i></button>  
//     	<a className="waves-effect waves-light btn btn-small green"><i class="small material-icons">playlist_add</i></a>
//     	<a className="waves-effect waves-light btn btn-small grey"><i class="small material-icons">remove_circle_outline</i></a>
//     </div>
//     </div>
// 	)
// }

// export default Movie






import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieActions.js'


class Movie extends Component {

handleWatchedClick = e => {
console.log("from handleWatchedClick")
console.log("props avant",this.props)
console.log("props.film is the film",this.props.film)
this.props = Object.assign({}, this.props, {moviesWatched: [...this.props.moviesWatched, this.props.film]})
console.log("props after", this.props)
console.log("moviesWatched prop after", this.props.moviesWatched)

}

handleToWatchClick = e => {
console.log("from handleToWatchClick")
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

