
import React from 'react';
import {ConnectedMovie} from './Movie';

// import WatchedMovies from './WatchedMovies'

const WatchedPage = (props) => {
console.log("props from WatchedPage", props)

	const movies = props.moviesWatched.map(
		film => <ConnectedMovie film={film} />
	)

	return (
  <div className="frameDisplayMovies">
  <p>Here is the list of movies alreay seen.</p> 
	{movies}
  </div>
)
}
  export default WatchedPage