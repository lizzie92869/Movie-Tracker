import React from 'react';
import fetch from 'isomorphic-fetch';
import {fetchMovies} from '../actions/movieActions'



const FilmsPage = (props) => {
  return (
  <div className="frameDisplayMovies">
  <div><p>Here is a list of suggestion from popular movies.</p> 
  <p>If the movie is in one of the list, it won't be shown here</p></div>
 {props.moviesFiltered.map(film => <div key={film.id}>{film.title}</div>)}
  </div>
  )
}
  export default FilmsPage