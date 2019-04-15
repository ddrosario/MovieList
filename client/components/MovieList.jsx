import React from 'react';
import PropTypes from 'prop-types';
import MovieListEntry from './MovieListEntry';
import styles from '../styles/MovieListStyles.css';

export default function MovieList({ movies, handleRating, handleDelete }) {
  return (
    <div>
      <div className={styles.movieList}>
        {movies.map(movie => (
          <MovieListEntry
            movie={movie}
            // eslint-disable-next-line no-underscore-dangle
            key={movie._id}
            handleRating={handleRating}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    runtime: PropTypes.string,
    posterUrl: PropTypes.string,
    rottenRating: PropTypes.string,
    userRating: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
  handleRating: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
