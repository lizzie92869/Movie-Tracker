class ToWatchMoviesController < ApplicationController
	 def index
    @to_watch_movies = ToWatchMovie.all
    render json: @to_watch_movies, status: :ok
  end

  def create
  	debugger
    @to_watch_movie = ToWatchMovie.new(poster_path, name, release_date)
    @to_watch_movie.save
    render json: @to_watch_movie, status: :created
  end

  def destroy
    @to_watch_movie = ToWatchMovie.where(id: params[:id]).first
    @to_watch_movie.destroy
  end


end
