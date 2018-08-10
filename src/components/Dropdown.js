 import React from 'react';
 import * as actions from '../actions/movieActions.js'
 import {connect} from 'react-redux'
 import { bindActionCreators } from 'redux'

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
      debugger 
      console.log("this",this)
      console.log("this.props",this.props)
      console.log("this.props.searchGenre",this.props.searchGenre)
      debugger
      this.props.changeStateSearchGenre(e.currentTarget.innerText)
      debugger
      // this.props.actions.fetchMoviesByPreferences()
  }

  render() {

    return (
        <div  className="dropdown" >
         <div className="button" onClick={this.showDropdownMenu}> Genres <i class="small material-icons">arrow_drop_down</i> </div>

          { this.state.displayMenu ? (
          <ul>
            <li><a key={1} onClick={this.handleGenreChosen} value="Action" href="">Action</a></li>
            <li><a key={2} onClick={this.handleGenreChosen} href="">Adventure</a></li>
            <li><a key={3} onClick={this.handleGenreChosen} href="">Animation</a></li>
            <li><a key={4} onClick={this.handleGenreChosen} href="">Comedy</a></li>
            <li><a key={5} onClick={this.handleGenreChosen} href="">Crime</a></li>
            <li><a key={6} onClick={this.handleGenreChosen} href="">Documentary</a></li>
            <li><a key={7} onClick={this.handleGenreChosen} href="">Drama</a></li>
            <li><a key={8} onClick={this.handleGenreChosen} href="">Family</a></li>
            <li><a key={9} onClick={this.handleGenreChosen} href="">Fantasy</a></li>
            <li><a key={10} onClick={this.handleGenreChosen} href="">History</a></li>
            <li><a key={11} onClick={this.handleGenreChosen} href="">Horror</a></li>
            <li><a key={12} onClick={this.handleGenreChosen} href="">Music</a></li>
            <li><a key={13} onClick={this.handleGenreChosen} href="">Mystery</a></li>
            <li><a key={14} onClick={this.handleGenreChosen} href="">Romance</a></li>
            <li><a key={15} onClick={this.handleGenreChosen} href="">Science Fiction</a></li>
            <li><a key={16} onClick={this.handleGenreChosen} href="">TV Movie</a></li>
            <li><a key={17} onClick={this.handleGenreChosen} href="">Thriller</a></li>
            <li><a key={18} onClick={this.handleGenreChosen} href="">War</a></li>
            <li><a key={19} onClick={this.handleGenreChosen} href="">Western</a></li>
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

// function mapStateToProps(state) {

//   console.log('in MapStateToProps in MovieToWatch.js')
//   return {
//     searchGenre: state.searchGenre,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

// export const ConnectedDropdown = connect(mapStateToProps, mapDispatchToProps)(Dropdown)

export default Dropdown


 