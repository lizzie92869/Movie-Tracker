import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import * as actions from './actions/movieActions.js'
import NavBar from './components/NavBar'
import FilmsPage from './components/FilmsPage'
import WatchedPage from './components/WatchedPage'
import ToWatchPage from './components/ToWatchPage'
// import {fetchMovies} from './actions/movieActions'

class App extends Component {

  // constructor(props) {
  //   super(props)
    
  // }


  componentDidMount() {
    if (this.props.moviesFiltered.length === 0) {
      console.log('in component did mount', this.props.moviesFiltered)
      this.props.actions.fetchMovies()
    }
    this.props.actions.fetchMoviesWatched()
    this.props.actions.fetchMoviesToWatch()
  }

  render() {

    return (
      <div className="background">

        <header > 
          <div className="app-title">my movie tracker</div>
        </header>

         <Router>
          <React.Fragment>
              <NavBar />

              <Route 
              exact path="/" 
              render={(props) => <FilmsPage {...props} moviesFiltered={this.props.moviesFiltered} />}
              />

              <Route exact path="/watched" 
              render={(props) => <WatchedPage {...props} moviesWatched={this.props.moviesWatched} />}
              />

              <Route exact path="/towatch" 
              render={(props) => <ToWatchPage {...props} moviesToWatch={this.props.moviesToWatch} />}
              />

            </React.Fragment>
          </Router>
       
      </div>
    );
  }
}


// pass the state as props. This function will subscribe to the Redux store and any updates will update props automatically
function mapStateToProps(state) {

  console.log('in MapStateToProps in App.js')
  return {
    moviesFiltered: state.movies.moviesFiltered,
    moviesWatched: state.movies.moviesWatched,
    moviesToWatch: state.movies.moviesToWatch
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

