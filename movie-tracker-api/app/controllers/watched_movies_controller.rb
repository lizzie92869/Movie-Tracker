class WatchedMoviesController < ApplicationController

	def index
		@watched_movies = WatchedMovie.all
		render json: @watched_movies, status: :ok
	end

	def create
		# binding.pry
		@watched_movie = WatchedMovie.new(movie_params)
		@watched_movie.save
		render json: @watched_movie, status: :created
	end

	def destroy
		@watched_movie = WatchedMovie.where(id: params[:id]).first
		@watched_movie.destroy
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
