
import React from 'react';
import {ConnectedMovieToWatch} from './MovieToWatch';
// import ToWatchMovies from './ToWatchMovies'

const ToWatchPage = (props) => {
console.log("props from ToWatchPage", props)

	const movies = props.moviesToWatch.map(
			film => <ConnectedMovieToWatch film={film} />
		)

return (
  <div className="frameDisplayMovies">
  <p>Here is the list of movies I want to see.</p> 
	{movies}
  </div>
)
}

export default ToWatchPage
