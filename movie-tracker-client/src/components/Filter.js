import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/movieActions.js'
import {ConnectedDropdown} from './Dropdown'


class Filter extends Component {

constructor(props){
  super();
  this.state = {
    searchTerm: '',
    searchGenre: '', 
    searchGenreId: '',
    searchYear: '',
    searchPopularity: true,
    // searchDate: false
  }
}

  // // using button search for searchTerm: working great !!

  // updateSearchTerm = e => {
  //   this.setState({
  //     searchTerm: e.target.value,
  //   })
  //   console.log("state:", this.state)
  //   console.log("state:", this.state.searchTerm)
  //   console.log("this.props:",this.props)
  //   console.log("this.props.moviesFiltered:", this.props.moviesFiltered)
  //   console.log("this.props.actions", this.props.actions)
  //   console.log("this.state.searchTerm", this.state.searchTerm)
  //   console.log("this.state.searchTerm.length", this.state.searchTerm.length) 
  // }

  // handleSearchTermSubmit = e => {
  //   debugger
  //   console.log("this.state.searchTerm.length", this.state.searchTerm.length)
  //   console.log("this.state.searchTerm", this.state.searchTerm)
  //   console.log(this.props.actions.fetchMoviesByTitle(this.state.searchTerm))
  //   if (this.state.searchTerm.length > 1) { 
  //   this.props.actions.fetchMoviesByTitle(this.state.searchTerm)
  //   }
  // }

// using fetch onChange: not working !! has a character off in the search
  updateSearchTerm = e => {
      this.setState({
        searchTerm: e.target.value,
      })
      console.log("state:", this.state)
      console.log("state:", this.state.searchTerm)
      console.log("this.props:",this.props)
      console.log("this.props.moviesFiltered:", this.props.moviesFiltered)
      console.log("this.props.actions", this.props.actions)
      console.log("this.state.searchTerm", this.state.searchTerm)
      console.log("this.state.searchTerm.length", this.state.searchTerm.length)
      // we need to pass the value of the target in the fetchMoviesByTitle() because this.state.searchTerm is 1 character off
      let searchTerm = e.target.value
      if (this.state.searchTerm.length > 1) { 
        this.props.actions.fetchMoviesByTitle(searchTerm)
      }
    }


  changeStateSearchGenre = (genreValue, genreId) => {
    this.setState({
      searchGenre: genreValue
    })
    this.setState({
      searchGenreId: genreId
    })
    let sorting
    this.state.searchPopularity ? sorting="popularity.desc" : sorting="release_date.asc" 
    let searchYear = this.state.searchYear
    //the state doesn't show up has changed for the genre, as it is asynchronous but the year is changed
    this.props.actions.fetchMoviesByPreferences({searchYear: searchYear, genreId: genreId, sorting: sorting})

  }

  updateSearchYear = e => {
    this.setState({
      searchYear: e.target.value,
    })
    console.log(this.state)
    //the state doesn't show up has changed for the year, as it is asynchronous but the genreId is changed
    let searchYear = e.target.value
    let genreId = this.state.searchGenreId
    let sorting
    this.state.searchPopularity ? sorting="popularity.desc" : sorting="release_date.asc"
      if (this.state.searchYear.length > 2) { 
        this.props.actions.fetchMoviesByPreferences({searchYear: searchYear, genreId: genreId, sorting: sorting})
      }
  }

  updateSearchPopularity = e => {
      if (e.target.value === "option_date"){
        this.setState({
          searchPopularity: false
        })
      }
      else if (e.target.value === "option_popularity"){
        this.setState({
          searchPopularity: true
        })
      }
    let genreId = this.state.searchGenreId
    let searchYear = this.state.searchYear
    let sorting
      if (e.target.value === "option_date"){
        sorting = "release_date.asc"
      } 
      else if (e.target.value === "option_popularity"){
        sorting = "popularity.desc"
      }
    this.props.actions.fetchMoviesByPreferences({searchYear: searchYear, genreId: genreId, sorting: sorting})
  }



  render() {
    return (
 
      <div>
      <p> Search by: </p>

        <div className="row">
        <form className="col s12" onSubmit={this.filterMovies}>
          <div className="row">
            <div className="input-field col s5">
              {/*<form>*/}
              <input onChange={this.updateSearchTerm} value={this.state.searchTerm} placeholder="Title" type="text" className="validate" />
               {/*<button onClick={this.handleSearchTermSubmit}>Search</button>*/}
              {/*</form>*/}
            </div>
          </div>
          <div className="row">
            <div>Get suggestions by: </div>
            <div className="input-field col s2">
              <input  onChange={this.updateSearchYear} placeholder="Year" type="text" className="validate" />
            </div>
            <div className="input-field col s3">

            {/*drop menu*/}
              <ConnectedDropdown changeStateSearchGenre={this.changeStateSearchGenre}/>
            </div>
            <div className="input-field col s2">
              <div><label>
                <input name="filter_sorting" type="radio" onClick={this.updateSearchPopularity} value="option_date" className="input-field col s2" />
                <span>Sort by Date</span>
              </label>
              </div>
              <div>
              <label>
                <input name="filter_sorting" type="radio" onClick={this.updateSearchPopularity} value="option_popularity"  className="input-field col s2s"/>
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

// function mapStateToProps(state) {

//   console.log('in MapStateToProps in Filter.js')
//   return {
//     moviesFiltered: state.movies.moviesFiltered,
//     moviesWatched: state.movies.moviesWatched,
//     moviesToWatch: state.movies.moviesToWatch,
//   }
// }

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

// export const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
export const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

// To gain access to the store somewhere in our app, we use a function provided by react-redux, connect. 
// By modifying a component's export statement and included connect, 
// we are able to take data from our Redux store and map them to a component's props. 
