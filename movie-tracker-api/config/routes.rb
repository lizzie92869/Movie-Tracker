Rails.application.routes.draw do

    get '/towatchmovies', to: 'to_watch_movies#index'
    post '/towatchmovies', to: 'to_watch_movies#create'
    delete '/towatchmovies/:id', to: 'to_watch_movies#destroy'

    get '/watchedmovies', to: 'watched_movies#index'
    post '/watchedmovies', to: 'watched_movies#create'
    delete '/watchedmovies/:id', to: 'watched_movies#destroy'

end