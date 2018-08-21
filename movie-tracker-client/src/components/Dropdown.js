 import React from 'react';
 import * as actions from '../actions/movieActions.js';
 import {connect} from 'react-redux';
 import { bindActionCreators } from 'redux';

class Dropdown extends React.Component {

constructor(props){
 super();

 this.state = {
       displayMenu: false,
     };
console.log("props from the constructor", props)
};

showDropdownMenu = (event) => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  // handleClickGenre = (e) => {
  //     // handleClickGenre2()
  //     debugger
  //     console.log("this.props", this.props)
  //     this.props.actions.fetchMoviesByPreferences(this.props.searchGenre)
  //     // console.log("this.props.searchGenre", this.props.searchGenre)
  //     // console.log("e.target.value", e.target.value)
  //     // let searchGenreTarget = e.target.value
  //     // console.log("searchGenreTarget", searchGenreTarget)
  //     // console.log("props", props)
  //     // console.log("props.searchGenre", props.searchGenre)
  // }

  handleGenreChosen = e => {
      console.log("text of target",e.currentTarget.innerText)
      console.log("this",this)
      console.log("this.props",this.props)
      console.log("this.props.searchGenre",this.props.searchGenre)
      console.log("this.props.searchYear", this.props.searchYear)
      let genreValue = e.currentTarget.innerText
      let genreId = parseInt(e.target.attributes.value.value, 10)
      this.props.changeStateSearchGenre(genreValue, genreId)
  }



  render() {

    return (
        <div  className="dropdown" >
         <div className="button" onClick={this.showDropdownMenu}> Genres <i className="small material-icons">arrow_drop_down</i> </div>

          { this.state.displayMenu ? (
          <ul>
            <li><a key={1} onClick={this.handleGenreChosen} value="28" href="">Action</a></li>
            <li><a key={2} onClick={this.handleGenreChosen} value="12">Adventure</a></li>
            <li><a key={3} onClick={this.handleGenreChosen} value="16">Animation</a></li>
            <li><a key={4} onClick={this.handleGenreChosen} value="35">Comedy</a></li>
            <li><a key={5} onClick={this.handleGenreChosen} value="80">Crime</a></li>
            <li><a key={6} onClick={this.handleGenreChosen} value="99">Documentary</a></li>
            <li><a key={7} onClick={this.handleGenreChosen} value="18">Drama</a></li>
            <li><a key={8} onClick={this.handleGenreChosen} value="10751">Family</a></li>
            <li><a key={9} onClick={this.handleGenreChosen} value="14">Fantasy</a></li>
            <li><a key={10} onClick={this.handleGenreChosen} value="36">History</a></li>
            <li><a key={11} onClick={this.handleGenreChosen} value="27">Horror</a></li>
            <li><a key={12} onClick={this.handleGenreChosen} value="10402">Music</a></li>
            <li><a key={13} onClick={this.handleGenreChosen} value="9648">Mystery</a></li>
            <li><a key={14} onClick={this.handleGenreChosen} value="10749">Romance</a></li>
            <li><a key={15} onClick={this.handleGenreChosen} value="878">Science Fiction</a></li>
            <li><a key={16} onClick={this.handleGenreChosen} value="10770">TV Movie</a></li>
            <li><a key={17} onClick={this.handleGenreChosen} value="53">Thriller</a></li>
            <li><a key={18} onClick={this.handleGenreChosen} value="10752">War</a></li>
            <li><a key={19} onClick={this.handleGenreChosen} value="37">Western</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

// we have access to the whole store thanks to Provider. We want to specify what state we want to access/listen and which actions we need 
 // we don't want every component re-rendering in response to every change in the state. 

 // So the React Redux library requires us to specify which changes to the store's state should 
 // prompt a re-render of the application. 
 //like this we are adding the moviesFiltered prop to our component (we could have call it something else than the original state. We could also have give it any value)
function mapStateToProps(state) {
  console.log('in MapStateToProps in MovieToWatch.js')
  return {
    moviesFiltered: state.movies.moviesFiltered,
  }
}

// Similarly, we can also take actions, and by wrapping them in a dispatch and an anonymous function, 
//be able pass them as props
// it adds our action creator as props
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}
//if we wanted to access only one specific action in the reducer we would do something like this: (but we want to go through the actions first)
// mapDispatchToProps = dispatch => {
//   return {
//     //addTodo: () => dispatch(<some action>)
//     addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
//   }
// }


// connect is a function that listens to every change in the store
// here we connect our React part of the application and the Redux part of the application
export const ConnectedDropdown = connect(mapStateToProps, mapDispatchToProps)(Dropdown)

// To gain access to the store somewhere in our app, we use a function provided by react-redux, connect. 
// By modifying a component's export statement and included connect, 
// we are able to take data from our Redux store and map them to a component's props. 


 