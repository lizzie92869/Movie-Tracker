import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/movieActions.js'
import {ConnectedDropdown} from './Dropdown'

// const GenresTheMovieDB = [ 
//     {"Action": 28}, 
//     {"Adventure": 12}, 
//     {"Animation": 16}, 
//     {"Comedy": 35}, 
//     {"Crime": 80}, 
//     {"Documentary": 99}, 
//     {"Drama": 18}, 
//     {"Family": 10751}, 
//     {"Fantasy": 14},
//     {"History": 36}, 
//     {"Horror": 27},
//     {"Music": 10402},
//     {"Mystery": 9648},
//     {"Romance": 10749},
//     {"Science Fiction": 878},
//     {"TV Movie": 10770},
//     {"Thriller": 53},
//     {"War": 10752},
//     {"Western": 37}
//   ]


const GenresTheMovieDB = [ 
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

class Filter extends Component {

constructor(props){
  super();
  this.state = {
    searchTerm: '',
    searchGenre: '', 
    searchGenreId: '',
    searchYear: '',
    searchPopularity: true,
    searchDate: false
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
    // let objectGenre = GenresTheMovieDB.filter(item => item.name == genreValue)
    // let genreId = objectGenre[0].id
    debugger
    this.setState({
      searchGenre: genreValue
    })
    this.setState({
      searchGenreId: genreId
    })
    console.log("the state is now:", this.state)
    debugger
    this.props.actions.fetchMoviesByPreferences({searchYear: this.state.searchYear, genreId: genreId})
    // console.log("the state is now:", this.state)
    // console.log("the genre is now:", this.state.searchGenre)
    // console.log("the genre id is now:", this.state.searchGenreId)
  }

  updateSearchYear = e => {
    this.setState({
      searchYear: e.target.value,
    })
    console.log(this.state)
    let searchYear = e.target.value
      if (this.state.searchYear.length > 2) { 
        this.props.actions.fetchMoviesByPreferences({searchYear: searchYear})
      }
  }

  // updateSearchPopularity = e => {
  //   this.setState({
  //     searchPopularity: e.target.value,
  //   })
  // }

  updateSearchDate = e => {
    this.setState({
      searchDate: e.target.value,
    })
    console.log(this.state)
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
              <input onChange={this.updateSearchTerm} value={this.state.searchTerm} placeholder="Title" id="first_name" type="text" className="validate" />
               {/*<button onClick={this.handleSearchTermSubmit}>Search</button>*/}
              {/*</form>*/}
            </div>
          </div>
          <div className="row">
            <div>Get suggestions by: </div>
            <div className="input-field col s2">
              <input  onChange={this.updateSearchYear} placeholder="Year" id="year" type="text" className="validate" />
            </div>
            <div className="input-field col s3">

            {/*drop menu*/}
              <ConnectedDropdown searchGenre={this.state.searchGenre} searchGenreId={this.state.searchGenreId} changeStateSearchGenre={this.changeStateSearchGenre}/>
            </div>
            <div className="input-field col s2">
              <div><label>
                <input name="group1" type="radio" className="input-field col s2" />
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
    moviesToWatch: state.movies.moviesToWatch,
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
