import React from 'react';
import fetch from 'isomorphic-fetch';
import {fetchMovies} from '../actions/movieActions'



const FilmsPage = () => 
  <div className="frameDisplayMovies">
  <div><p>Here is a list of suggestion from popular movies.</p> 
  <p>If the movie is in one of the list, it won't be shown here</p></div>
 {/* <div>{movies}</div>*/}
  </div>

  export default FilmsPage