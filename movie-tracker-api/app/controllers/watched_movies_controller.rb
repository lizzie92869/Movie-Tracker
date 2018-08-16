class WatchedMoviesController < ApplicationController

	def index
		# byebug
	@watched_movies = WatchedMovie.all
	render json: @watched_movies, status: :ok
	end

	def create
		# byebug
		binding.pry
	@watched_movie = WatchedMovie.new(poster_path)
	@watched_movie.save
	render json: @watched_movie, status: :created
	end

	def destroy
	@watched_movie = WatchedMovie.where(id: params[:id]).first
	@watched_movie.destroy
	end

end
