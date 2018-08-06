import React from 'react';

const Filter = () => 
  <div>
  <p> Here will be a movie filter to find more targetted suggestions or a title in particular </p>
  {/*<form onChange="filterMovies()">*/}
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s5">
          <input placeholder="Title" id="first_name" type="text" className="validate" />
        </div>
        <div className="input-field col s2">
          <input placeholder="Year" id="last_name" type="text" className="validate" />
        </div>
        <div className="input-field col s3">
          <input placeholder="Genre" id="last_name" type="text" className="validate" />
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

  export default Filter