import React from 'react';

const WatchedMovies = (props) => {

	const listMovies = () => {
	    return props.watchedMovies.map(movie => {
	      return (
	        <div className="col-lg-12">
	        movie
	        </div>
	      )
	    })
  	}


	return (
	  {listMovies}
	)
}

export default WatchedMovies