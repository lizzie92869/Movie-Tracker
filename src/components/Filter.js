import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/movieActions.js'

class Filter extends Component {
  // constructor(props) {
  //   super(props)

  // }



  state = {
    searchTerm: '',
    searchGenre: '', 
    searchYear: '',
    searchPopularity: true,
    searchDate: false
  }

  fetchMoviesByTitle = (e) => {
// console.log("in fetchFilteredMovies()")
//   return (dispatch) => {

//     const moviesDBKey = process.env.REACT_APP_MOVIEDB_KEY
//     console.log("log:", moviesDBKey)

//     //const searchTerm =



//     // debugger

    dispatch({ type: 'LOADING_MOVIES' });
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${moviesDBKey}&query=${searchTerm}`)
              .then(response => response.json())
              .then(responseData => {
                //dispatch an action with a type and a payload
                const movies = responseData.results
                dispatch({ type: 'FETCH_MOVIES', payload: movies})
                console.log(this)})
             
  };

}

  fetchMoviesByPreferences = (e) => {

    //const sorting = //"primary_release_date.asc" or "popularity.desc"
    //const searchYear = 
    //const searchGenreId=

    dispatch({ type: 'LOADING_MOVIES' });
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${moviesDBKey}&primary_release_year=${searchYear}&with_genres={searchGenreId}&language=en-US&sort_by=${sorting}&include_video=false&include_adult=false`)
              .then(response => response.json())
              .then(responseData => {
                //dispatch an action with a type and a payload
                const movies = responseData.results
                dispatch({ type: 'FETCH_MOVIES', payload: movies})
                console.log(this)})
             
  };
  }


  updateSearchTerm = e => {
    this.setState({
      searchTerm: e.target.value,
    })
    console.log("state:", this.state)
    console.log("this.props:",this.props)
    console.log("this.props.moviesFiltered:", this.props.moviesFiltered)
    console.log("this.props.actions", this.props.actions)
    this.props.actions.fetchFilteredMovies()
  }

  updateSearchGenre = e => {
    this.setState({
      searchGenre: e.target.value,
    })
    console.log(this.state)
  }

  updateSearchYear = e => {
    this.setState({
      searchYear: e.target.value,
    })
    console.log(this.state)
  }

  // updateSearchPopularity = e => {
  //   this.setState({
  //     searchPopularity: e.target.value,
  //   })
  // }

  // updateSearchDate = e => {
  //   this.setState({
  //     searchDate: e.target.value,
  //   })
  // }


  render() {
    return (
 
      <div>
      <p> Here will be a movie filter to find more targetted suggestions or a title in particular </p>

        <div className="row">
        <form className="col s12" onSubmit={this.filterMovies}>
          <div className="row">
            <div className="input-field col s5">
              <input onChange={this.updateSearchTerm} placeholder="Title" id="first_name" type="text" className="validate" />
            </div>
            <div className="input-field col s2">
              <input  onChange={this.updateSearchYear} placeholder="Year" id="year" type="text" className="validate" />
            </div>
            <div className="input-field col s3">
              <input onChange={this.updateSearchGenre} placeholder="Genre" id="year" type="text" className="validate" />
            </div>
            <div className="input-field col s2">
              <div><label>
                <input name="group1" type="radio" checked className="input-field col s2" />
                <span>Sort by Date</span>
              </label>
              </div>
              <div>
              <label>
                <input name="group1" type="radio" checked className="input-field col s2s"/>
                <span>or Popularity</span>
              </label>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {

  console.log('in MapStateToProps in Filter.js')
  return {
    moviesFiltered: state.movies.moviesFiltered,
    moviesWatched: state.movies.moviesWatched,
    moviesToWatch: state.movies.moviesToWatch
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
