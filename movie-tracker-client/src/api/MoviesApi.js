class MoviesApi {

  static fetchMoviesToWatch() {
    return fetch(`http://localhost:3000/towatchmovies`)
    .then((response) => response.json())
    .catch((error) => error)
  }

  static fetchMoviesWatched() {
    return fetch(`http://localhost:3000/watchedmovies`)
    .then((response) => response.json())
    .catch((error) => error)
  }

  static createFilmToWatchListInApi(film) {

    const request = new Request(`http://localhost:3000/towatchmovies`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(film)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  }

  static createFilmWatchedListInApi(film) {

    const request = new Request(`http://localhost:3000/watchedmovies`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify(film)
    });

    return fetch(request).then(response => {
          debugger
      // console.log("reponse.json",response.json())
      return response.json();
    }).catch((error) => {
      return error;
    });
  }
  

  static removeFilmFromToWatchListInApi(film) {
    const request = new  Request(`http://localhost:3000/towatchmovies/${film.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  };

    static removeFilmFromWatchedListInApi(film) {
    const request = new  Request(`http://localhost:3000/watchedmovies/${film.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  };

}
export default MoviesApi;