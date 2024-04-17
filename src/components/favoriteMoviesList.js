import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteMoviesList = () => {
  const favoriteMovies = useSelector((state) => state.favoriteMovies);

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => removeFavorite(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMoviesList;
