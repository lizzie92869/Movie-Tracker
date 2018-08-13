
import React from 'react';
import {ConnectedMovieWatched} from './MovieWatched';

// import WatchedMovies from './WatchedMovies'

const WatchedPage = (props) => {
console.log("props from WatchedPage", props)

	const movies = props.moviesWatched.map(
		film => <ConnectedMovieWatched film={film} />
	)

	return (
  <div className="frameDisplayMovies">
  <p>Here is the list of movies alreay seen.</p> 
	{movies}
  </div>
)
}
  export default WatchedPage