class CreateWatchedMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :watched_movies do |t|
      t.string :poster_path
      t.string :name
      t.string :release_date
      
      t.timestamps
    end
  end
end
