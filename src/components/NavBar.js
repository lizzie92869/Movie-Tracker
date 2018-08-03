import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


const NavBar = props => {

	
  return (
    <div className="nav-bar">
     <NavLink to="/" exact className="nav-button" activeClassName="active-nav-button" >Films</NavLink> 
     <NavLink to="/watched" exact className="nav-button" activeClassName="active-nav-button" id="button-watched">Watched</NavLink>
     <NavLink to="/towatch" exact className="nav-button" activeClassName="active-nav-button" id="button-to-watch">To Watch</NavLink>
    </div>
  );
};


export default NavBar;