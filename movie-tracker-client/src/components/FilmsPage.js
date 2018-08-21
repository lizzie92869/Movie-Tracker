import React from 'react';
// import fetch from 'isomorphic-fetch';
// import {fetchMovies} from '../actions/movieActions';
import {ConnectedMovie} from './Movie';
import {ConnectedFilter} from './Filter';


const FilmsPage = (props) => {
  const movies = props.moviesFiltered.map(
    film => <ConnectedMovie film={film}/>)

  return (
  <div className="frameDisplayMovies">
  <ConnectedFilter />
 {movies}
  </div>
  )
}
  export default FilmsPage
