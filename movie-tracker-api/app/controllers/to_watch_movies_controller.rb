class ToWatchMoviesController < ApplicationController
	 def index
    @to_watch_movies = ToWatchMovie.all
    render json: @to_watch_movies, status: :ok
  end

  def create
    # binding.pry
    @to_watch_movie = ToWatchMovie.new(movie_params)
    @to_watch_movie.save
    render json: @to_watch_movie, status: :created
  end

  def destroy
    @to_watch_movie = ToWatchMovie.where(id: params[:id]).first
    @to_watch_movie.destroy
  end

  def movie_params
    params.permit(
      :id,
      :title,
      :poster_path,
      :release_date
    )
  end


end
