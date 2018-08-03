import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import * as actions from './actions/movieActions.js'
import NavBar from './components/NavBar'
import FilmsPage from './components/FilmsPage'
import WatchedPage from './components/WatchedPage'
import ToWatchPage from './components/ToWatchPage'

class App extends Component {
  render() {
    return (
      <div className="background">

        <header > 
          <h1 className="App-title">my movie tracker</h1>
        </header>

         <Router>
          <React.Fragment>
              <NavBar />
              <Route exact path="/" component={FilmsPage} />
              <Route exact path="/watched" component={WatchedPage} />
              <Route exact path="/towatch" component={ToWatchPage} />
            </React.Fragment>
          </Router>
       
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  return {
    moviesFiltered: state.moviesFiltered,
    moviesWatched: state.moviesWatched,
    moviesToWatch: state.moviesToWatch
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

