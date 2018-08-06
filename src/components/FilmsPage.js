import React from 'react';
import fetch from 'isomorphic-fetch';
import {fetchMovies} from '../actions/movieActions';
import Movie from './Movie';
import Filter from './Filter';





const FilmsPage = (props) => {
  const movies = props.moviesFiltered.map(
    film => <Movie film={film}/>)

  return (
  <div className="frameDisplayMovies">
  <Filter/>
  <div><p>Here is a list of suggestion from popular movies.</p> 
  <p>If the movie is in one of the list, it won't be shown here</p></div>
 {movies}
  </div>
  )
}
  export default FilmsPage
