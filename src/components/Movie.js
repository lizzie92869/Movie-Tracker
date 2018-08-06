import React from 'react';
import FilmsPage from './FilmsPage'

const Movie = (props) => {

const film = props.film

	return ( 
	 <div className="block-movie">
     <a key={film.id} href="#"><img width="150" src={"https://image.tmdb.org/t/p/w185/"+film.poster_path}/></a>
    <div>
    	<a className="waves-effect waves-light btn btn-small green"><i class="small material-icons">playlist_add_check</i></a>  
    	<a className="waves-effect waves-light btn btn-small green"><i class="small material-icons">playlist_add</i></a>
    	<a className="waves-effect waves-light btn btn-small grey"><i class="small material-icons">remove_circle_outline</i></a>
    </div>
    </div>
	)
}

export default Movie